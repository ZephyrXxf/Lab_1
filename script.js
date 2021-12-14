let singapore = [1.3598, 103.8107]; // #1 Singapore latlng
let map = L.map('map').setView(singapore, 13); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

let singaporeMarker = L.marker([1.29, 103.85]);
singaporeMarker.addTo(map);
singaporeMarker.bindPopup("<p>Singapore</p>");
singaporeMarker.addEventListener('click', function(){
    popup("Singapore");
})

let circle = L.circle([1.35166526, 103.773663572], {
    color: 'red',
    fillColor:"orange",
    fillOpacity:0.5,
    radius: 500
}) 
circle.addTo(map);

// Singapore Zoo

let sgzoo = L.marker([1.4106822710057016, 103.79335505942191]);
sgzoo.addTo(map);
sgzoo.bindPopup("<p>Singapore Zoo</p>");
sgzoo.addEventListener('click', function(){
    alert("We Are Going to the Zoo")
})

// Singapore Discovery Center

let sdc = L.marker([1.3333554078011443, 103.67885736931426]);
sdc.addTo(map);
sdc.bindPopup("<p>Singapore Discovery Center")
sdc.addEventListener('click', function(){
    alert("Science Center")
})

// Jurong Bird Park

let jbp = L.marker([1.3185329964906856, 103.7066753447659]);
jbp.addTo(map);
jbp.bindPopup("<p>Jurong Bird Park")
jbp.addEventListener('click', function(){
    alert("Many Many Birds")
})

