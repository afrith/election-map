
var tileroot = "http://localhost:8080/";

var partynames = {
    "ACDP": "African Christian Democratic Party",
    "AIC": "African Independent Congress",
    "ANC": "African National Congress",
    "ANP": "African National Party",
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
    "IPO": "Indigenous Peoples Organisation",
    "IFP": "Inkatha Freedom Party",
    "KISS": "Keep It Straight and Simple",
    "KGM": "Kingdom Governance Movement",
    "KZNTA": "KwaZulu-Natal Transport Alliance",
    "LDA": "Lekgotla for Democracy Advancement",
    "MECA": "Merafong Civic Association",
    "MF": "Minority Front",
    "NFP": "National Freedom Party",
    "NPSA": "National Party South Africa",
    "PAC": "Pan Africanist Congress of Azania",
    "PAM": "Pan Africanist Movement",
    "PA": "Patriotic Alliance",
    "PAMSA": "Patriotic Movement of South Africa",
    "PAL": "Peoples Alliance",
    "SCA": "Sibanye Civic Association",
    "SPP": "Sindawonye Progressive Party",
    "SAMEBA": "South African Maintenance and Estate Beneficiaries Association",
    "SAPP": "South African Political Party",
    "SAPCO": "South African Progressive Civic Organisation",
    "TA": "Truly Alliance",
    "ULS": "Ubumbano Lwesizwe Sabangoni",
    "UBUNTU": "Ubuntu Party",
    "UMSA": "Unemployment Movement SA",
    "UCDP": "United Christian Democratic Party",
    "UNICO": "United Congress",
    "UDM": "United Democratic Movement",
    "VF+": "Vryheidsfront Plus",
    "WASP": "Workers and Socialist Party",
    "XP": "Ximoko Party",
};

var afmt1 = d3.format(",.0f");
var afmt2 = d3.format(",.1f");
var afmt3 = d3.format(",.2f");

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

natparties = ['ACDP','AIC','ANC','APC','AGANG','AJ','AZAPO','BRA','COPE','DA','EFF','FINLA','FN','ICOSA','IFP','KISS','KGM','MF','NFP','PAC','PAM','PA','PAL','UBUNTU','UCDP','UNICO','UDM','VF+','WASP'];

provparties = {
    'EC': ['ACDP','AIC','ANC','APC','AGANG','AZAPO','COPE','DA','EFF','IFP','KGM','NFP','PAC','PAMSA','UCDP','UNICO','UDM','VF+'],
    'FS': ['ACDP','ANC','APC','AGANG','AZAPO','COPE','DA','EFF','ICOSA','IFP','NFP','PAC','PA','UCDP','UDM','VF+'],
    'GT': ['ACDP','ANC','APC','AGANG','AZAPO','COPE','DA','EFF','FN','ICOSA','IFP','KGM','LDA','MECA','MF','NFP','PAC','PA','UCDP','UDM','VF+','WASP'],
    'KZN': ['ACDP','ANC','APC','AZAPO','COPE','DA','EFF','IFP','KGM','KZNTA','MF','NFP','PAC','TA','ULS','UCDP','UDM','VF+'],
    'LIM': ['ACDP','ANC','APC','AGANG','AZAPO','COPE','DA','EFF','IFP','LDA','MECA','NFP','PAC','SAMEBA','UMSA','UCDP','UDM','VF+','WASP','XP'],
    'MP': ['ACDP','ANC','APC','AGANG','AZAPO','BRA','COPE','DA','EFF','IFP','NFP','PAC','SPP','UCDP','UDM','VF+'],
    'NC': ['ACDP','ANC','APC','AZAPO','COPE','DA','EFF','FINLA','ICOSA','IFP','NFP','PAC','PA','UCDP','UDM','VF+'],
    'NW': ['ACDP','ANC','APC','AGANG','AZAPO','COPE','DA','EFF','IFP','NFP','PAC','SAPP','UCDP','UDM','VF+','WASP'],
    'WC': ['ACDP','AIC','ANC','ANP','APC','AGANG','AJ','AZAPO','COPE','DA','EFF','FINLA','ICOSA','IPO','IFP','KGM','NFP','NPSA','PAC','PA','PAL','SCA','SAPCO','UCDP','UDM','VF+'],
};

var keys = ['ANC', 'DA', 'EFF', 'IFP', 'NFP', 'Other'];
var colours = {
    'ANC': ['rgb(199,233,192)','rgb(161,217,155)','rgb(116,196,118)','rgb(65,171,93)','rgb(35,139,69)','rgb(0,90,50)'],
    'DA': ['rgb(198,219,239)','rgb(158,202,225)','rgb(107,174,214)','rgb(66,146,198)','rgb(33,113,181)','rgb(8,69,148)'],
    'EFF': ['rgb(218,218,235)','rgb(188,189,220)','rgb(158,154,200)','rgb(128,125,186)','rgb(106,81,163)','rgb(74,20,134)'],
    'IFP': ['rgb(252,187,161)','rgb(252,146,114)','rgb(251,106,74)','rgb(239,59,44)','rgb(203,24,29)','rgb(153,0,13)'],
    'NFP': ['rgb(253,208,162)','rgb(253,174,107)','rgb(253,141,60)','rgb(241,105,19)','rgb(217,72,1)','rgb(140,45,4)'],
    'Other': ['rgb(217,217,217)','rgb(189,189,189)','rgb(150,150,150)','rgb(115,115,115)','rgb(82,82,82)','rgb(37,37,37)'],
}

var legbody = $('#legend table tbody');
for (var i = 0, l = keys.length; i < l; i++) {
    var k = keys[i];
    var row = $('<tr>');
    if (k == 'Other') {
        row.append($('<td>').text(k));
    } else {
        row.append($('<td>').append($('<abbr>').text(k).attr('title', partynames[k])));
    }
    for (var j = 0; j < 6; j++) {
        row.append($('<td>').attr('class', 'legcel').css('background-color', colours[k][j]).css('opacity',0.5));
    }
    legbody.append(row);
}

function partycol(p) {
    var parties;
    var votes;
    if (curBallot == 'nat') {
        parties = natparties;
        votes = p.v;
    } else {
        parties = provparties[p.pc];
        votes = p.pv;
    }

    var vlist = votes.split(',').map(function(x) { return +x; });
    sum = d3.sum(vlist);
    vmax = d3.max(vlist);
    widx = vlist.indexOf(vmax);

    if (sum == 0) {
        return colours['Other'][0];
    }

    var pabbv = parties[widx];

    var propn = vmax/sum;
    return colours[pabbv in colours ? pabbv : 'Other'][propn <= 0.5 ? 0 : Math.ceil(propn*10)-5];
}

function style(feature) {
    var d = {
        stroke: true,
        opacity: 1,
        lineJoin: "round",
        fill: true,
        fillColor: partycol(feature.properties),
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
        do_table(feature);
        $("#placeinfo").css("display", "block");
    });
}

function do_table(feature)
{
    var p = feature.properties;

    $("#placename").text(p.n);

    var parties, votes, spoilt;
    if (curBallot == 'nat') {
        parties = natparties;
        votes = p.v;
        spoilt = p.s;
    } else {
        parties = provparties[p.pc];
        votes = p.pv;
        spoilt = p.ps;
    }

    var vlist = votes.split(',').map(function(x) { return +x; });
    var vsum = d3.sum(vlist);
    var pvotes = d3.zip(parties, vlist)
        .filter(function(d) { return d[1] > 0; });

    var sel = d3.select("table.voteinfo tbody").selectAll("tr")
        .data(pvotes, function(d) { return d[0]; });
    var aptr = sel.enter().append("tr");
    aptr.append("td").text(function (d) { return partynames[d[0]]; });
    aptr.append("td").attr("class", "vnum");
    aptr.append("td").attr("class", "vperc");
    sel.select("td.vnum")
        .text(function(d) { return afmt1(d[1]); });
    sel.select("td.vperc")
        .text(function(d) { return afmt3(d[1]*100/vsum); });
    sel.exit().remove();
    sel.sort(function(a, b) { return d3.descending(a[1], b[1]); });

    $("#vvalid").text(afmt1(vsum));
    $("#vspoilt").text(afmt1(spoilt));
    $("#vtotal").text(afmt1(vsum + spoilt));
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
        setHashParam('ballot', newBallot);
        curBallot = newBallot;
        if(levels[curLevel]) levels[curLevel].geojsonLayer.setStyle(style);
        if(sellayer) do_table(sellayer.feature);
    }
}

function setBallot(name) {
    $('input[name="ballot"][value="' + name + '"]')[0].checked = true;
    switchBallot();
}

var balpar = getHashParam('ballot');
setBallot((balpar && (balpar == 'nat' || balpar == 'prov')) ? balpar : 'nat');

var curLevel;
function switchLevel(dont_clear) {
    var newLevel = $('input[name="level"]:checked').val();

    if (newLevel != curLevel) {
        if (levels[curLevel]) map.removeLayer(levels[curLevel]);
        map.addLayer(levels[newLevel]);
        if(!dont_clear) clearsel();
        setHashParam('level', newLevel);
        curLevel = newLevel;
    }
}

function setLevel(name, dont_clear) {
    $('input[name="level"][value="' + name + '"]')[0].checked = true;
    switchLevel(dont_clear);
}

var selpar = getHashParam('sel');

var levpar = getHashParam('level');
setLevel((levpar && levpar in levels) ? levpar : 'muni', true);

if (selpar) {
    selcode = selpar;
    levels[curLevel].once('load', function() {
        levels[curLevel].geojsonLayer.eachLayer(function(layer) {
            if (layer.feature.properties.c == selcode)
            {
                layer.fireEvent('click');
            }
        });
    });
}

map.fire('zoomend');

function do_search() {
    var searchstr = $('#searchbox').val().trim();
    if (searchstr.length == 0)
        return;

    var bds = map.getBounds();

    $.getJSON('http://nominatim.openstreetmap.org/search?' +
        'format=json&countrycodes=ZA&accept-language=en' +
        'viewbox=' + bds.getWest() + ',' + bds.getNorth() +
        ',' + bds.getEast() + ',' + bds.getSouth() +
        '&q=' + encodeURIComponent(searchstr),
        success = function (data) {
            if (data.length == 0)
                return;
            var bb = data[0].boundingbox;
            map.fitBounds([[bb[0], bb[2]], [bb[1], bb[3]]]);
        });
}

$('#placeinfo').css('top', ($('#details').height() + 5) + 'px');
$('#placeinfo').css('bottom', ($('#legend').height()) + 'px');
