var longNantes = "47.2184";
var latNantes = "-1.5536";

var map = L.map('mapid').setView([longNantes, latNantes], 9);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicXVpbm91LWt1biIsImEiOiJjamN1aWFpZ2QycWV0MnJsZ283dTc5eTRiIn0.xx76XQLovQFF3TwL4BqLTw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 17,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

var popup = "";

for(var i = 0; i<Object.keys(api).length; i++) {
    if(typeof api[i].ligne1 != 'undefined') {
        popup = popup + '<b>' + api[i].ligne1 + '</b>';
    }
    if(typeof api[i].ligne2 != 'undefined') {
        popup = popup + '<br/> Localisation : ' + api[i].ligne2 + '</b>';
    }
    if(typeof api[i].ligne3 != 'undefined') {
        popup = popup + '<br/> Sens de circulation : ' + api[i].ligne3 + '</b>';
    }
    if(typeof api[i].ligne4 != 'undefined') {
        popup = popup + '<br/> ' + api[i].ligne4 + '</b>';
    }
    if(typeof api[i].ligne5 != 'undefined') {
        popup = popup + '<br/> Restrictions de circulation : ' + api[i].ligne5 + '</b>';
    }
    if(typeof api[i].ligne6 != 'undefined') {
        popup = popup + '<br/> ' + api[i].ligne6 + '</b>';
    }
    if(typeof api[i].rattachement != 'undefined') {
        popup = popup + '<br/> Rattachement : ' + api[i].rattachement + '</b>';
    }
    if(typeof api[i].nature != 'undefined') {
        popup = popup + '<br/> Nature : ' + api[i].nature + '</b>';
    }
    if(typeof api[i].type) {
        popup = popup + '<br/> Type : ' + api[i].type + '</b>';
    }
    if(typeof api[i].statut != 'undefined') {
        popup = popup + '<br/> Statut : ' + api[i].statut + '</b>';
    }

    L.marker([api[i].latitude, api[i].longitude]).addTo(map)
    .bindPopup(popup);

    popup = "";

}