var tileroot = "http://localhost:8080/";

var partynames = {
    "AMP": "Africa Muslim Party",
    "ACA": "African Christian Alliance",
    "ACDP": "African Christian Democratic Party",
    "AIC": "African Independent Congress",
    "ANC": "African National Congress",
    "ANP": "African National Party",
    "APC": "African People's Convention",
    "AGANG": "Agang South Africa",
    "AJ": "Al Jama-ah",
    "AFD": "Alliance of Free Democrats",
    "AP": "A Party",
    "AZAPO": "Azanian People's Organisation",
    "BRA": "Bushbuckridge Residents Association",
    "BCP": "Black Consciousness Party",
    "CAPE": "Cape Party",
    "CDA": "Christian Democratic Alliance",
    "CP": "Christian Party",
    "COPE": "Congress of the People",
    "DA": "Democratic Alliance",
    "DPSA": "Dikwankwetla Party of South Africa",
    "EFF": "Economic Freedom Fighters",
    "FINLA": "First Nation Liberation Alliance",
    "FN": "Front National",
    "GKSA": "Great Kongress of South Africa",
    "ICOSA": "Independent Civic Organisation of South Africa",
    "ID": "Independent Democrats",
    "IPO": "Indigenous Peoples Organisation",
    "IFP": "Inkatha Freedom Party",
    "KISS": "Keep It Straight and Simple",
    "KGM": "Kingdom Governance Movement",
    "KZNTA": "KwaZulu-Natal Transport Alliance",
    "LDA": "Lekgotla for Democracy Advancement",
    "MECA": "Merafong Civic Association",
    "MF": "Minority Front",
    "MDP": "Movement Democratic Party",
    "NA": "National Alliance",
    "NADECO": "National Democratic Convention",
    "NFP": "National Freedom Party",
    "NPSA": "National Party South Africa",
    "NVP": "New Vision Party",
    "PAC": "Pan Africanist Congress of Azania",
    "PAM": "Pan Africanist Movement",
    "PA": "Patriotic Alliance",
    "PAMSA": "Patriotic Movement of South Africa",
    "PJC": "Peace and Justice Congress",
    "PAL": "Peoples Alliance",
    "SCA": "Sibanye Civic Association",
    "SPP": "Sindawonye Progressive Party",
    "SADECO": "South African Democratic Congress",
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
    "UIF": "United Independent Front",
    "UP": "Universal Party",
    "VF+": "Vryheidsfront Plus",
    "WF": "Women Forward",
    "WASP": "Workers and Socialist Party",
    "XP": "Ximoko Party",
};

var years = ['2014', '2009'];

var natparties = {
    '2014': ['ACDP','AIC','ANC','APC','AGANG','AJ','AZAPO','BRA','COPE','DA',
            'EFF','FINLA','FN','ICOSA','IFP','KISS','KGM','MF','NFP','PAC',
            'PAM','PA','PAL','UBUNTU','UCDP','UNICO','UDM','VF+','WASP'],
    '2009': ['ACDP','ANC','APC','AJ','AFD','AP','AZAPO','CDA','COPE','DA',
            'GKSA','ID','IFP','KISS','MF','MDP','NADECO','NVP','PAC','PAM',
            'SADECO','UCDP','UDM','UIF','VF+','WF'],
};

var provparties = {
    '2014': {
        'EC': ['ACDP','AIC','ANC','APC','AGANG','AZAPO','COPE','DA','EFF',
                'IFP','KGM','NFP','PAC','PAMSA','UCDP','UNICO','UDM','VF+'],
        'FS': ['ACDP','ANC','APC','AGANG','AZAPO','COPE','DA','EFF','ICOSA',
                'IFP','NFP','PAC','PA','UCDP','UDM','VF+'],
        'GT': ['ACDP','ANC','APC','AGANG','AZAPO','COPE','DA','EFF','FN',
                'ICOSA','IFP','KGM','LDA','MECA','MF','NFP','PAC','PA','UCDP',
                'UDM','VF+','WASP'],
        'KZN': ['ACDP','ANC','APC','AZAPO','COPE','DA','EFF','IFP','KGM',
                'KZNTA','MF','NFP','PAC','TA','ULS','UCDP','UDM','VF+'],
        'LIM': ['ACDP','ANC','APC','AGANG','AZAPO','COPE','DA','EFF','IFP',
                'LDA','MECA','NFP','PAC','SAMEBA','UMSA','UCDP','UDM','VF+',
                'WASP','XP'],
        'MP': ['ACDP','ANC','APC','AGANG','AZAPO','BRA','COPE','DA','EFF',
                'IFP','NFP','PAC','SPP','UCDP','UDM','VF+'],
        'NC': ['ACDP','ANC','APC','AZAPO','COPE','DA','EFF','FINLA','ICOSA',
                'IFP','NFP','PAC','PA','UCDP','UDM','VF+'],
        'NW': ['ACDP','ANC','APC','AGANG','AZAPO','COPE','DA','EFF','IFP',
                'NFP','PAC','SAPP','UCDP','UDM','VF+','WASP'],
        'WC': ['ACDP','AIC','ANC','ANP','APC','AGANG','AJ','AZAPO','COPE','DA',
                'EFF','FINLA','ICOSA','IPO','IFP','KGM','NFP','NPSA','PAC',
                'PA','PAL','SCA','SAPCO','UCDP','UDM','VF+'],
    },
    '2009': {
        'EC': ['ACDP','AIC','ANC','APC','AZAPO','CDA','COPE','DA','ID','IFP',
                'NADECO','NVP','PAC','PAM','UCDP','UDM','VF+'],
        'FS': ['ACDP','ANC','APC','COPE','DA','DPSA','ID','IFP','NADECO','PAC',
                'PJC','UCDP','UDM','VF+'],
        'GT': ['ACA','ACDP','ANC','APC','AFD','AZAPO','CDA','COPE','DA','GKSA',
                'ID','IFP','MDP','NADECO','NVP','PAC','UCDP','UDM','VF+','WF'],
        'KZ': ['ACDP','ANC','APC','AJ','COPE','DA','GKSA','ID','IFP','MF',
                'NADECO','PAC','SADECO','UCDP','UDM','VF+','WF'],
        'NP': ['ACDP','ANC','APC','AFD','AZAPO','BCP','COPE','DA','ID','IFP',
                'NVP','PAC','UCDP','UDM','UIF','VF+','WF','XP'],
        'MP': ['ACDP','ANC','APC','AZAPO','CP','COPE','DA','ID','IFP','NADECO',
                'PAC','SPP','UCDP','UDM','VF+'],
        'NC': ['ACDP','ANC','APC','AZAPO','CDA','COPE','DA','ID','IFP','PAC',
                'UCDP','UDM','VF+'],
        'NW': ['ACA','ACDP','ANC','APC','AZAPO','COPE','DA','ID','IFP','MDP',
                'NADECO','PAC','SAPP','UCDP','UDM','VF+'],
        'WC': ['AMP','ACDP','ANC','APC','AJ','AZAPO','CAPE','CDA','COPE','DA',
                'ID','IFP','NA','NADECO','NPSA','PAC','PJC','UCDP','UDM','UIF',
                'UP','VF+'],
    }
};

var levels = ['prov', 'dist', 'muni', 'ward', 'vd'];

var heatParties = ['ANC', 'DA', 'COPE', 'EFF', 'IFP', 'NFP'];

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

var curYear, curBallot, curLevel, colourblind, curScheme;

curYear = getHashParam('year');
if ($.inArray(curYear, years) == -1) {
    curYear = '2014';
    setHashParam('year', curYear);
}
$('input[name="year"][value="' + curYear + '"]')[0].checked = true;

curBallot = getHashParam('ballot');
if ($.inArray(curBallot, ['nat', 'prov']) == -1) {
    curBallot = 'nat';
    setHashParam('ballot', curBallot);
}
$('input[name="ballot"][value="' + curBallot + '"]')[0].checked = true;

curLevel = getHashParam('level');
if ($.inArray(curLevel, levels) == -1) {
    curLevel = 'muni';
    setHashParam('level', curLevel);
}
$('input[name="level"][value="' + curLevel + '"]')[0].checked = true;

curScheme = getHashParam('colours');
if (curScheme !== 'winner' && curScheme !== 'blank' && $.inArray(curScheme, heatParties) == -1) {
    curScheme = 'winner';
    setHashParam('colours', curScheme);
}
$('select#colscheme')[0].value = curScheme;

colourblind = (getHashParam('colourblind')) ? true : false;
$('a#colblind').text(colourblind ? 'Not colourblind?' : 'Colourblind?');

var map = new L.Map('map', {
    center: new L.LatLng(-28.5, 24.5),
    zoom: 6,
    zoomAnimation: false,
    minZoom: 5,
    maxZoom: 16,
    maxBounds: [[-37, 13.5], [-20, 36]]
});

var selcode, sellayer, hovcode;

selcode = getHashParam('sel');

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

var layers = {};

var keys, colours;
function setColours() {
    if (colourblind) {
        keys = ['ANC', 'DA', 'Other'];
        colours = {
            'ANC': ['rgb(252,187,161)','rgb(252,146,114)','rgb(251,106,74)','rgb(239,59,44)','rgb(203,24,29)','rgb(153,0,13)'],
            'DA': ['rgb(198,219,239)','rgb(158,202,225)','rgb(107,174,214)','rgb(66,146,198)','rgb(33,113,181)','rgb(8,69,148)'],
            'Other': ['rgb(217,217,217)','rgb(189,189,189)','rgb(150,150,150)','rgb(115,115,115)','rgb(82,82,82)','rgb(37,37,37)'],
        };
    } else {
        if (curYear == '2009') {
            keys = ['ANC', 'DA', 'COPE', 'IFP', 'Other'];
        } else {
            keys = ['ANC', 'DA', 'EFF', 'IFP', 'NFP', 'Other'];
        }
        colours = {
            'ANC': ['rgb(199,233,192)','rgb(161,217,155)','rgb(116,196,118)','rgb(65,171,93)','rgb(35,139,69)','rgb(0,90,50)'],
            'COPE': ['rgb(253,208,162)','rgb(253,174,107)','rgb(253,141,60)','rgb(241,105,19)','rgb(217,72,1)','rgb(140,45,4)'],
            'DA': ['rgb(198,219,239)','rgb(158,202,225)','rgb(107,174,214)','rgb(66,146,198)','rgb(33,113,181)','rgb(8,69,148)'],
            'EFF': ['rgb(218,218,235)','rgb(188,189,220)','rgb(158,154,200)','rgb(128,125,186)','rgb(106,81,163)','rgb(74,20,134)'],
            'IFP': ['rgb(252,187,161)','rgb(252,146,114)','rgb(251,106,74)','rgb(239,59,44)','rgb(203,24,29)','rgb(153,0,13)'],
            'NFP': ['rgb(253,208,162)','rgb(253,174,107)','rgb(253,141,60)','rgb(241,105,19)','rgb(217,72,1)','rgb(140,45,4)'],
            'Other': ['rgb(217,217,217)','rgb(189,189,189)','rgb(150,150,150)','rgb(115,115,115)','rgb(82,82,82)','rgb(37,37,37)'],
        };
    }
}
setColours();

var heatColours = {
    'ANC': ['rgb(247,252,245)','rgb(229,245,224)','rgb(199,233,192)','rgb(161,217,155)','rgb(116,196,118)','rgb(65,171,93)','rgb(35,139,69)','rgb(0,90,50)'],
    'DA': ['rgb(247,251,255)','rgb(222,235,247)','rgb(198,219,239)','rgb(158,202,225)','rgb(107,174,214)','rgb(66,146,198)','rgb(33,113,181)','rgb(8,69,148)'],
    'COPE': ['rgb(255,245,235)','rgb(254,230,206)','rgb(253,208,162)','rgb(253,174,107)','rgb(253,141,60)','rgb(241,105,19)','rgb(217,72,1)','rgb(140,45,4)'],
    'EFF': ['rgb(255,245,240)','rgb(254,224,210)','rgb(252,187,161)','rgb(252,146,114)','rgb(251,106,74)','rgb(239,59,44)','rgb(203,24,29)','rgb(153,0,13)'],
};
heatColours['IFP'] = heatColours['EFF'];
heatColours['NFP'] = heatColours['COPE'];

function resetDivSize() {
    $('#placeinfo').css('top', ($('#details').height() + 5) + 'px');
    $('#placeinfo').css('bottom', ($('#legend').height()) + 'px');
}

function makeLegend() {
    if (curScheme == 'winner') {
        $('#winner-legend').css('display', 'block');
        $('#heat-legend').css('display', 'none');
        var legbody = $('#winner-legend table tbody');
        legbody.find('tr').remove();
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

        $('a#colblind').css('display', 'inline');
        if (colourblind) {
            $('a#colblind').text('Not colourblind?');
        } else {
            $('a#colblind').text('Colourblind?');
        }
    }
    else if (curScheme == 'blank') {
        $('#winner-legend').css('display', 'none');
        $('#heat-legend').css('display', 'none');
    }
    else
    {
        $('#winner-legend').css('display', 'none');
        $('#heat-legend').css('display', 'block');
        $('a#colblind').css('display', 'none');

        var collist = heatColours[curScheme];
        $('#heat-legend td.legcel').each(function(i) {
            this.style.backgroundColor = collist[i].replace('rgb(', 'rgba(').replace(')', ',0.5)');
        });
    }

    resetDivSize();
}
makeLegend();

var curNatParties, curProvParties;
function setParties() {
    curNatParties = natparties[curYear];
    curProvParties = provparties[curYear];
}
setParties();

function calcCachedData(p) {
    if (curBallot == 'prov') {
        if (!(p.pvmap)) {
            var vlist = p.pv.split(',').map(function(x) { return +x; });
            var parties = curProvParties[p.pc];
            p.pvsum = d3.sum(vlist);
            p.pvwin = parties[$.inArray(d3.max(vlist), vlist)];
            var vmap = {};
            for (var i = 0, l = parties.length; i < l; i++) {
                if (vlist[i] > 0) vmap[parties[i]] = vlist[i];
            }
            p.pvmap = vmap;
        }
    } else {
        if (!(p.nvmap)) {
            var vlist = p.v.split(',').map(function(x) { return +x; });
            p.nvsum = d3.sum(vlist);
            p.nvwin = curNatParties[$.inArray(d3.max(vlist), vlist)];
            var vmap = {};
            for (var i = 0, l = curNatParties.length; i < l; i++) {
                if (vlist[i] > 0) vmap[curNatParties[i]] = vlist[i];
            }
            p.nvmap = vmap;
        }
    }
}

function colfun_winner(p) {

    calcCachedData(p);

    var vsum, vmap, vwin;
    if (curBallot == 'prov') {
        vsum = p.pvsum;
        vmap = p.pvmap;
        vwin = p.pvwin;
    } else {
        vsum = p.nvsum;
        vmap = p.nvmap;
        vwin = p.nvwin;
    }

    if (vsum == 0) {
        return colours['Other'][0];
    }

    var propn = vmap[vwin]/vsum;
    return colours[($.inArray(vwin, keys) == -1) ? 'Other' : vwin][propn <= 0.5 ? 0 : Math.ceil(propn*10)-5];
}

function colfun_blank(p) {
    return 'rgb(150,150,150)';
}

function colfun_heat(abbrev) {
    return function(p) {
        calcCachedData(p);

        var vsum, vmap;
        if (curBallot == 'prov') {
            vsum = p.pvsum;
            vmap = p.pvmap;
        } else {
            vsum = p.nvsum;
            vmap = p.nvmap;
        }

        if (vsum == 0) {
            return 'rgb(150,150,150)';
        }

        var propn = (vmap[abbrev] || 0)/vsum;
        return heatColours[abbrev][propn == 1 ? 7 : Math.floor(propn * 8)];
    };
}

var colfun;
function chooseColfun() {
    if (curScheme == 'winner') {
        colfun = colfun_winner;
    } else if (curScheme == 'blank') {
        colfun = colfun_blank;
    } else {
        colfun = colfun_heat(curScheme);
    }
}
chooseColfun();

function style(feature) {
    var d = {
        stroke: true,
        opacity: 1,
        lineJoin: "round",
        fill: true,
        fillColor: colfun(feature.properties),
        fillOpacity: (curScheme == 'blank' ?  0 : 0.5)
    };
    var c = feature.properties.c;
    if (c == selcode) {
        d.color = "red"; d.weight = 2;
    } else {
        d.color = "grey"; d.weight = 1;
    }
    return d;
}

function resetStyle() {
    var lname = curLevel + curYear;
    if (layers[lname]) {
        layers[lname].geojsonLayer.setStyle(style);
    }
}

var oef = function (feature, layer) {
    var p = feature.properties;

    layer.on('mouseover', function (e) {
        layer.bringToFront();
        hovcode = p.c;
        if (p.c !== selcode) {
            layer.setStyle({ color: 'blue', weight: 2 });
        }
    });
    layer.on('mouseout', function () {
        hovcode = '';
        if (p.c !== selcode) {
            layer.setStyle({color: 'grey', weight: 1 });
        }
        if (sellayer) sellayer.bringToFront();
    });
    layer.on('click', function() {
        sellayer = layer;
        selcode = p.c;
        setHashParam('sel', p.c);
        layer.bringToFront();
        resetStyle();
        do_table(feature);
    });
}

function clearsel() {
    sellayer = null;
    selcode = null;
    clearHashParam('sel');
    resetStyle();
    $("#placeinfo").css("display", "none");
    $(".hint").css("display", "block");
}

map.on('click', clearsel);

map.on('zoomstart', function() {
    sellayer = null;
});

map.on('zoomend', function() {
    var z = map.getZoom();
    if (z < 8) {
        if (curLevel == 'vd' || curLevel == 'ward') {
            $('input[name="level"][value="muni"]')[0].checked = true;
            switchLevel();
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
            $('input[name="level"][value="ward"]')[0].checked = true;
            switchLevel();
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

for (var j = 0; j < years.length; j++) {
    for (var i = 0; i < levels.length; i++) {
        var lname = levels[i] + years[j];
        var newLayer = new L.TileLayer.GeoJSON(tileroot + lname + '/{z}/{x}/{y}.geojson', {
            clipTiles: true,
            unique: function (feature) { return feature.id; }
        }, {
            onEachFeature: oef,
            style: style
        });
        newLayer.geojsonLayer.on('dblclick', function(e) {
            map.setZoomAround(e.latlng, map.getZoom() + 1);
        });
        newLayer.geojsonLayer.on('layeradd', function(e) {
            if (e.layer.feature.properties.c == selcode) {
                sellayer = e.layer;
                e.layer.bringToFront();
                do_table(e.layer.feature);
            }
        });
        newLayer.on('load', function() {
            if (sellayer) sellayer.bringToFront();
        });

        layers[lname] = newLayer;
    }
}

function do_table(feature)
{
    var p = feature.properties;

    calcCachedData(p);

    $("#placename").text(p.n);

    var vmap, vsum, vspoilt;
    if (curBallot == 'prov') {
        vmap = p.pvmap;
        vsum = p.pvsum
        spoilt = p.ps;
    } else {
        vmap = p.nvmap;
        vsum = p.nvsum;
        spoilt = p.s;
    }

    var sel = d3.select("table.voteinfo tbody").selectAll("tr")
        .data(d3.entries(vmap), function(d) { return d.key; });
    var aptr = sel.enter().append("tr");
    aptr.append("td").text(function (d) { return partynames[d.key]; });
    aptr.append("td").attr("class", "vnum");
    aptr.append("td").attr("class", "vperc");
    sel.select("td.vnum")
        .text(function(d) { return afmt1(d.value); });
    sel.select("td.vperc")
        .text(function(d) { return afmt3(d.value*100/vsum); });
    sel.exit().remove();
    sel.sort(function(a, b) { return d3.descending(a.value, b.value); });

    $("#vvalid").text(afmt1(vsum));
    $("#vspoilt").text(afmt1(spoilt));
    $("#vtotal").text(afmt1(vsum + spoilt));
    $("#placeinfo").css("display", "block");
    $(".hint").css("display", "none");
}

map.addLayer(layers[curLevel + curYear]);

function switchYear() {
    var newYear = $('input[name="year"]:checked').val();

    if (newYear != curYear) {
        var curLname = curLevel + curYear;
        var newLname = curLevel + newYear;
        curYear = newYear;
        setParties();
        $("#placeinfo").css("display", "none");
        $(".hint").css("display", "block");
        sellayer = null;
        if (layers[curLname]) map.removeLayer(layers[curLname]);
        map.addLayer(layers[newLname]);
        setHashParam('year', newYear);
        setColours();
        makeLegend();
        resetStyle();
    }
}

function switchBallot() {
    var newBallot = $('input[name="ballot"]:checked').val();

    if (newBallot != curBallot) {
        setHashParam('ballot', newBallot);
        curBallot = newBallot;
        resetStyle();
        if(sellayer) do_table(sellayer.feature);
    }
}

function switchScheme() {
    var newScheme = $('select#colscheme').val();

    if (newScheme !== curScheme) {
        setHashParam('colours', newScheme);
        curScheme = newScheme;
        chooseColfun();
        makeLegend();
        resetStyle();
    }
}

function switchLevel() {
    var newLevel = $('input[name="level"]:checked').val();

    if (newLevel != curLevel) {
        var curLname = curLevel + curYear;
        var newLname = newLevel + curYear;
        if (layers[curLname]) map.removeLayer(layers[curLname]);
        map.addLayer(layers[newLname]);
        clearsel();
        setHashParam('level', newLevel);
        curLevel = newLevel;
    }
}

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

function flipColourBlind() {
    if (colourblind) {
        clearHashParam('colourblind');
        colourblind = false;
    } else {
        setHashParam('colourblind', 'yes');
        colourblind = true;
    }
    setColours();
    makeLegend();
    resetStyle();
}

resetStyle();

map.fire('zoomend');
