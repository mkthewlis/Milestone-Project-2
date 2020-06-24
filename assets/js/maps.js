//Defining variables that will be used later
var map;
var infoWindow;

//The location of the gyres
var locations = [
    {lat: 30.400, lng: -171.356},
    {lat: -34.013, lng: -139.597},
    {lat: 41.432, lng: -41.885},
    {lat: -28.856, lng: -12.090},
    {lat: -23.656, lng: 82.567}
];

//Content to be added to each info window
var contents = [
    '<h1>North Pacific</h1><p>More information about this gyre can be found at: </p><a href="https://en.wikipedia.org/wiki/North_Pacific_Gyre" target="_blank">Wikipedia: North Pacific Gyre</a>',
    '<h1>South Pacific</h1><p>More information about this gyre can be found at: </p><a href="https://en.wikipedia.org/wiki/South_Pacific_Gyre" target="_blank">Wikipedia: South Pacific Gyre</a>',
    '<h1>North Atlantic</h1><p>More information about this gyre can be found at: </p><a href="https://en.wikipedia.org/wiki/North_Atlantic_Gyre" target="_blank">Wikipedia: North Atlantic Gyre</a>',
    '<h1>South Atlantic</h1><p>More information about this gyre can be found at: </p><a href="https://en.wikipedia.org/wiki/South_Atlantic_Gyre" target="_blank">Wikipedia: South Atlantic Gyre</a>',
    '<h1>Indian Ocean</h1><p>More information about this gyre can be found at: </p><a href="https://en.wikipedia.org/wiki/Indian_Ocean_Gyre" target="_blank">Wikipedia: Indian Ocean Gyre</a>',
];

function initMap() {
    //Set the map to center on the North Pacific Gyre
    var startPosition = locations[0];
    var centerPoint = {
        center: startPosition,
        zoom: 1
    };

    //
    map = new google.maps.Map(document.getElementById('map'), centerPoint);
    infowindow = new google.maps.InfoWindow();
    for (var i = 0; i < locations.length; i++) {
        createMarker(locations[i], contents[i]);
    }
}

//Function passes locations[i] and contents [i] (from above) as parameters for each gyre marker
function createMarker(gyreLocation, gyreContent) {

    //Creates marker based on the locations of each gyre
    var marker = new google.maps.Marker({
        position: gyreLocation,
        map: map
    });

    //Opens info window about specific gyre when clicked
    marker.addListener('click', function() {
       infowindow.setContent(gyreContent);
       infowindow.open(map, this);
    });
}

/* Sources of guidance used to create this code: 
https://developers.google.com/maps/documentation/javascript/adding-a-google-map
https://gist.github.com/Cathon/9f650b5b722abc28e715
https://dev.to/beumsk/google-maps-show-multiple-markers-and-add-your-event-on-click-226i
*/