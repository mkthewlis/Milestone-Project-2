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
    'North Pacific Marker. More information can be found at: https://en.wikipedia.org/wiki/North_Pacific_Gyre',
    'North Pacific Marker. More information can be found at: https://en.wikipedia.org/wiki/North_Pacific_Gyre',
    'North Pacific Marker. More information can be found at: https://en.wikipedia.org/wiki/North_Pacific_Gyre',
    'North Pacific Marker. More information can be found at: https://en.wikipedia.org/wiki/North_Pacific_Gyre',
    'North Pacific Marker. More information can be found at: https://en.wikipedia.org/wiki/North_Pacific_Gyre',
];

function initMap() {
    //Set the map to center on the North Pacific Gyre
    var startPosition = {lat: 30.400, lng: -171.356};
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

function createMarker(location, content) {

    //Creates marker based on the locations of variable above
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });

    //Opens info window when clicked
    marker.addListener('click', function() {
       infowindow.setContent(content);
       infowindow.open(map, this);
    });
}

/*
  var northPacific = {lat: 30.400, lng: -171.356};
  var southPacific = {lat: -34.013, lng: -139.597};
  var northAtlantic = {lat: 41.432, lng: -41.885};
  var southAtlantic = {lat: -28.856, lng: -12.090};
  var indianOcean = {lat: -23.656, lng: 82.567}; 

  */

/* Source: 
https://developers.google.com/maps/documentation/javascript/adding-a-google-map
https://gist.github.com/Cathon/9f650b5b722abc28e715
*/