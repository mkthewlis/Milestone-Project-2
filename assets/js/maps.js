function initMap() {

  var northPacific = {lat: 30.400, lng: -171.356};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: northPacific
  });

  //North Pacific Marker
  var northPacificMarker = new google.maps.Marker({
    position: new google.maps.LatLng(30.400, -171.356),
    map: map,
    title: 'North Pacific Gyre'
  });

  //South Pacific Marker
  var southPacificMarker = new google.maps.Marker({
    position: new google.maps.LatLng(-34.013, -139.597),
    map: map,
    title: 'South Pacific Gyre'
  });

  //North Atlantic Marker
  var southPacificMarker = new google.maps.Marker({
    position: new google.maps.LatLng(41.432, -41.885),
    map: map,
    title: 'South Pacific Gyre'
  });

  //South Atlantic Marker
  var southPacificMarker = new google.maps.Marker({
    position: new google.maps.LatLng(-28.856, -12.090),
    map: map,
    title: 'South Pacific Gyre'
  });

  //South Atlantic Marker
  var southPacificMarker = new google.maps.Marker({
    position: new google.maps.LatLng(-23.656, 82.567),
    map: map,
    title: 'South Pacific Gyre'
  });

}

/*
  var northPacific = {lat: 30.400, lng: -171.356};
  var southPacific = {lat: -34.013, lng: -139.597};
  var northAtlantic = {lat: 41.432, lng: -41.885};
  var southAtlantic = {lat: -28.856, lng: -12.090};
  var indianOcean = {lat: -23.656, lng: 82.567}; 

  */

// Source: https://developers.google.com/maps/documentation/javascript/adding-a-google-map