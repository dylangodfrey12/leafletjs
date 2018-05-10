

var mymap = L.map('mapid').setView([39.288183, -76.605988], 90);
var marker = L.marker([39.288183, -76.605988]).addTo(mymap);
var circle = L.circle([39.190039, -76.591032], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
    radius: 40000
}).addTo(mymap);
var greenIcon = L.icon({
    iconUrl: 'zombie.svg',

    iconSize:     [38, 38], // size of the icon
    iconAnchor:   [22, 38], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -40] // point from which the popup should open relative to the iconAnchor
});
var greenIcon1 = L.icon({
    iconUrl: 'bitcoin.svg',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [22, 38], // point of the icon which will correspond to marker's location
});



var polygon = L.polygon([
    [39.288183, -75.605988],
    [39.186605, -75.809915],
    [39.288183, -75.505988]
]).addTo(mymap);

marker.bindPopup("<b>Double Agent Zom-bo Here!</b><br>It appears the virus was transmitted to only bitcoin users. ").openPopup();
circle.bindPopup("You're screwed if you're in me...");
L.marker([39.288183, -76.605988], {icon: greenIcon}).addTo(mymap).bindPopup("*Grunnnttt")
L.marker([39.288183, -76.105988], {icon: greenIcon}).addTo(mymap).bindPopup("I got lost :(");
L.marker([39.288183, -76.405988], {icon: greenIcon}).addTo(mymap).bindPopup("*woof?");
L.marker([39.289373, -76.621785], {icon: greenIcon}).addTo(mymap).bindPopup("*argg");
L.marker([39.288593, -76.612537], {icon: greenIcon}).addTo(mymap).bindPopup("So does proactive help with this greenness?");
L.marker([39.288526, -76.617386], {icon: greenIcon}).addTo(mymap).bindPopup("*have you seen the walking dead?");
L.marker([39.290094, -76.611786], {icon: greenIcon}).addTo(mymap).bindPopup("*argggg");
L.marker([39.278721, -76.608996], {icon: greenIcon}).addTo(mymap).bindPopup("*rawr");
L.marker([39.277791, -76.619039], {icon: greenIcon}).addTo(mymap).bindPopup("*zombie noise");
L.marker([39.277791, -76.519039], {icon: greenIcon}).addTo(mymap).bindPopup("I'll have the steak, hold the brains please");
L.marker([39.288183, -76.605988], {icon: greenIcon1}).addTo(mymap)
L.marker([39.288183, -76.105988], {icon: greenIcon1}).addTo(mymap)
L.marker([39.288183, -76.405988], {icon: greenIcon1}).addTo(mymap)
L.marker([39.289373, -76.621785], {icon: greenIcon1}).addTo(mymap)
L.marker([39.288593, -76.612537], {icon: greenIcon1}).addTo(mymap)
L.marker([39.288526, -76.617386], {icon: greenIcon1}).addTo(mymap)
L.marker([39.290094, -76.611786], {icon: greenIcon1}).addTo(mymap)
L.marker([39.278721, -76.608996], {icon: greenIcon1}).addTo(mymap)
L.marker([39.277791, -76.619039], {icon: greenIcon1}).addTo(mymap)
L.marker([39.277791, -76.519039], {icon: greenIcon1}).addTo(mymap)
L.marker([39.207791, -76.619039], {icon: greenIcon}).addTo(mymap).bindPopup("Wait I didnt have bitcoin though :(");

polygon.bindPopup("Safe Zone.");
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZHlsYW5nb2RmcmV5MTIiLCJhIjoiY2poMGpuM3dzMTZjeTJ3bGVud2lvZmIzcCJ9.YjvOCV6fa-e2JeP3vRaUXw', {
		maxZoom: 18,
		attribution: '<div class="sponser"> <a  class="sponser" href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, </div>' +
			'<a class="sponser" href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a  class="sponser" href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.dark'
        
    }).addTo(mymap);
    L.geoJson(statesData).addTo(mymap);
    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }
    
    mymap.on('click', onMapClick);

    function getColor(d) {
        return d > 1000 ? '#800026' :
               d > 500  ? '#BD0026' :
               d > 200  ? '#E31A1C' :
               d > 100  ? '#FC4E2A' :
               d > 50   ? '#FD8D3C' :
               d > 20   ? '#FEB24C' :
               d > 10   ? '#FED976' :
                          '#FFEDA0';
    }
    function style(feature) {
        return {
            fillColor: getColor(feature.properties.density),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }
 
