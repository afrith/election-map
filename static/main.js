$('#placeinfo').css('top', ($('#details').height() + 10) + 'px');
$('#placeinfo').css('bottom', ($('#legend').height() + 10) + 'px');

var tileroot = "http://localhost:8080/";

var partynames = {
    "ACDP": "African Christian Democratic Party",
    "AIC": "African Independent Congress",
    "ANC": "African National Congress",
    "APC": "African People's Convention",
    "AGANG": "Agang South Africa",
    "AJ": "Al Jama-ah",
    "AZAPO": "Azanian People's Organisation",
    "BRA": "Bushbuckridge Residents Association",
    "COPE": "Congress of the People",
    "DA": "Democratic Alliance",
    "EFF": "Economic Freedom Fighters",
    "FINLA": "First Nation Liberation Alliance",
    "FN": "Front National",
    "ICOSA": "Independent Civic Organisation of South Africa",
    "IFP": "Inkatha Freedom Party",
    "KISS": "Keep It Straight and Simple",
    "KGM": "Kingdom Governance Movement",
    "MF": "Minority Front",
    "NFP": "National Freedom Party",
    "PAC": "Pan Africanist Congress of Azania",
    "PAM": "Pan Africanist Movement",
    "PA": "Patriotic Alliance",
    "PAL": "Peoples Alliance",
    "UBUNTU": "Ubuntu Party",
    "UCDP": "United Christian Democratic Party",
    "UNICO": "United Congress",
    "UDM": "United Democratic Movement",
    "VF+": "Vryheidsfront Plus",
    "WASP": "Workers and Socialist Party",
};

var afmt1 = d3.format(",.0f");
var afmt2 = d3.format(",.1f");

function setHashParam(key, val) {
    var re = new RegExp('^' + key + '=');
    var params = (window.location.hash.substr(1)).split('&');
    var found = false;
    for (var i = 0, l = params.length; i < l; i++) {
        if (re.test(params[i])) {
            params[i] = key + '=' + val;
            found = true;
        }
    }
    if (!found) {
        params.push(key + '=' + val);
    }
    window.location.replace('#' + params.join('&'));
}

function clearHashParam(key) {
    var re = new RegExp('^' + key + '=');
    var params = (window.location.hash.substr(1)).split('&');
    var found = false;
    for (var i = 0, l = params.length; i < l; i++) {
        if (re.test(params[i])) {
            params.splice(i, 1);            
        }
    }
    window.location.replace('#' + params.join('&'));
}

function getHashParam(key) {
    var re = new RegExp('^' + key + '=');
    var params = (window.location.hash.substr(1)).split('&');
    for (var i = 0, l = params.length; i < l; i++) {
        if (re.test(params[i])) {
            return params[i].split('=')[1];
        }
    }
    return null;
}

var map = new L.Map('map', {
    center: new L.LatLng(-28.5, 24.5),
    zoom: 6,
    zoomAnimation: false,
    minZoom: 5,
    maxZoom: 16,
    maxBounds: [[-37, 13.5], [-20, 36]]
});

map.addControl(new L.Control.Permalink({useLocation: true}));

var cloudmade = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/afrith.hfk7dal4/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery &copy; <a href="http://mapbox.com">MapBox</a>'
});
cloudmade.addTo(map);

var aerial = new L.TileLayer('http://{s}.aerial.openstreetmap.org.za/ngi-aerial/{z}/{x}/{y}.jpg', {
    attribution: 'Aerial photography &copy; <a href="http://www.ngi.gov.za/">National Geospatial Information</a>'
});

L.control.layers({
    "Map" : cloudmade,
    "Photo" : aerial
}).addTo(map);

parties = ['ACDP','AIC','ANC','APC','AGANG','AJ','AZAPO','BRA','COPE','DA','EFF','FINLA','FN','ICOSA','IFP','KISS','KGM','MF','NFP','PAC','PAM','PA','PAL','UBUNTU','UCDP','UNICO','UDM','VF+','WASP'];

colours = {};
colours[2] = ['rgb(199,233,192)','rgb(161,217,155)','rgb(116,196,118)','rgb(65,171,93)','rgb(35,139,69)','rgb(0,90,50)']; //ANC
colours[9] = ['rgb(198,219,239)','rgb(158,202,225)','rgb(107,174,214)','rgb(66,146,198)','rgb(33,113,181)','rgb(8,69,148)']; //DA
colours[10] = ['rgb(218,218,235)','rgb(188,189,220)','rgb(158,154,200)','rgb(128,125,186)','rgb(106,81,163)','rgb(74,20,134)']; //EFF
colours[14] = ['rgb(252,187,161)','rgb(252,146,114)','rgb(251,106,74)','rgb(239,59,44)','rgb(203,24,29)','rgb(153,0,13)']; //IFP
colours[18] = ['rgb(253,208,162)','rgb(253,174,107)','rgb(253,141,60)','rgb(241,105,19)','rgb(217,72,1)','rgb(140,45,4)']; //NFP
colours[99] = ['rgb(217,217,217)','rgb(189,189,189)','rgb(150,150,150)','rgb(115,115,115)','rgb(82,82,82)','rgb(37,37,37)']; // Others

function partycol(vstr) {
    var vlist = vstr.split(',').map(function(x) { return +x; });
    sum = d3.sum(vlist);
    vmax = d3.max(vlist);
    widx = vlist.indexOf(vmax);

    if (sum == 0) {
        return colours[99][0];
    }

    var propn = vmax/sum;
    return colours[widx in colours ? widx : 99][propn <= 0.5 ? 0 : Math.ceil(propn*10)-5];
}

function style(feature) {
    var d = {
        stroke: true,
        opacity: 1,
        lineJoin: "round",
        fill: true,
        fillColor: partycol(feature.properties.v),
        fillOpacity: 0.5
    };
    var c = feature.properties.c;
    if (c == selcode) {
        d.color = "red"; d.weight = 2;
    } else if (c == hovcode) {
        d.color = "blue"; d.weight = 2;
    } else {
        d.color = "grey"; d.weight = 1;
    }
    return d;
}

var selcode = '';
var hovcode = '';
var sellayer;

var oef = function (feature, layer) {
    var p = feature.properties;

    layer.on('mouseover', function (e) {
        layer.bringToFront();
        hovcode = p.c;
        levels[curLevel].geojsonLayer.setStyle(style);
    });
    layer.on('mouseout', function () {
        hovcode = '';
        levels[curLevel].geojsonLayer.setStyle(style);
        if (sellayer) sellayer.bringToFront();
    });
    layer.on('click', function() {
        sellayer = layer;
        selcode = p.c;
        setHashParam('sel', p.c);
        layer.bringToFront();
        levels[curLevel].geojsonLayer.setStyle(style);
        $("#placename").text(p.n);
        do_table(feature);
        $("#vvalid").text(afmt1(p.sum));
        $("#vspoilt").text(afmt1(p.s));
        $("#vtotal").text(afmt1(p.sum + p.s));
        $("#placeinfo").css("display", "block");
    });
}

function do_table(feature)
{
    var p = feature.properties;

    if (!(p.sum)) {
        var vlist = p.v.split(',').map(function(x) { return +x; });
        p.sum = d3.sum(vlist);
        p.pvotes = d3.zip(parties, vlist)
            .filter(function(d) { return d[1] > 0; });
    }

    var sel = d3.select("table.voteinfo tbody").selectAll("tr")
        .data(p.pvotes, function(d) { return d[0]; });
    var aptr = sel.enter().append("tr");
    aptr.append("td").append("abbr")
        .attr("title", function(d) { return partynames[d[0]]; })
        .text(function(d) { return d[0]; });
    aptr.append("td").attr("class", "vnum");
    aptr.append("td").attr("class", "vperc");
    sel.select("td.vnum")
        .text(function(d) { return afmt1(d[1]); });
    sel.select("td.vperc")
        .text(function(d) { return afmt2(d[1]*100/p.sum); });
    sel.exit().remove();
    sel.sort(function(a, b) { return d3.descending(a[1], b[1]); });
}

function clearsel() {
    sellayer = null;
    selcode = null;
    clearHashParam('sel');
    if(levels[curLevel]) levels[curLevel].geojsonLayer.setStyle(style);
    $("#placeinfo").css("display", "none");
}

map.on('click', clearsel);

map.on('zoomstart', function() {
    sellayer = null;
});

map.on('zoomend', function() {
    var z = map.getZoom();
    if (z < 8) {
        if (curLevel == 'vd' || curLevel == 'ward') {
            setLevel('muni');
        }
        $('input[value="vd"]')
            .attr('disabled', true)
            .css('color', 'grey')
            .attr('title', 'Zoomed too far out to view voting districts');
        $('input[value="ward"]')
            .attr('disabled', true)
            .css('color', 'grey')
            .attr('title', 'Zoomed too far out to view wards');
    } else if (z < 10) {
        if (curLevel == 'vd') {
            setLevel('ward');
        }
        $('input[value="vd"]')
            .attr('disabled', true)
            .css('color', 'grey')
            .attr('title', 'Zoomed too far out to view voting districts');
        $('input[value="ward"]').attr('disabled', false).removeAttr('title');
    } else {
        $('input[value="vd"]').attr('disabled', false).removeAttr('title');
        $('input[value="ward"]').attr('disabled', false).removeAttr('title');
    }
});

var levelNames = ['prov', 'dist', 'muni', 'ward', 'vd'];
var levels = {};

for (var i = 0, l = levelNames.length; i < l; i++) {
    var lname = levelNames[i];
    levels[lname] = new L.TileLayer.GeoJSON(tileroot + lname + '/{z}/{x}/{y}.geojson', {
        clipTiles: true,
        unique: function (feature) { return feature.id; }
    }, {
        onEachFeature: oef,
        style: style
    });
    levels[lname].geojsonLayer.on('dblclick', function(e) {
        map.setZoomAround(e.latlng, map.getZoom() + 1);
    });
    levels[lname].geojsonLayer.on('layeradd', function(e) {
        if (e.layer.feature.properties.c == selcode) {
            sellayer = e.layer;
        }
    });
    levels[lname].on('load', function() {
        if (sellayer) sellayer.bringToFront();
    });
}

var curBallot;
function switchBallot() {
    var newBallot = $('input[name="ballot"]:checked').val();

    if (newBallot != curBallot) {
        //TODO: code to change styles and tables goes here
        setHashParam('ballot', newBallot);
        curBallot = newBallot;
    }
}

function setBallot(name) {
    $('input[name="ballot"][value="' + name + '"]')[0].checked = true;
    switchBallot();
}

var balpar = getHashParam('ballot');
setBallot((balpar && (balpar == 'nat' || balpar == 'prov')) ? balpar : 'nat');

var curLevel;
function switchLevel() {
    var newLevel = $('input[name="level"]:checked').val();

    if (newLevel != curLevel) {
        if (levels[curLevel]) map.removeLayer(levels[curLevel]);
        map.addLayer(levels[newLevel]);
        clearsel();
        setHashParam('level', newLevel);
        curLevel = newLevel;
    }
}

function setLevel(name) {
    $('input[name="level"][value="' + name + '"]')[0].checked = true;
    switchLevel();
}

var selpar = getHashParam('sel');

var levpar = getHashParam('level');
setLevel((levpar && levpar in levels) ? levpar : 'muni');

if (selpar) {
    levels[curLevel].once('load', function() {
        levels[curLevel].geojsonLayer.eachLayer(function(layer) {
            if (layer.feature.properties.c == selpar)
            {
                layer.fireEvent('click');
            }
        });
    });
}

map.fire('zoomend');
