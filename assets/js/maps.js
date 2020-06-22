function initMap() {
  var northPacific = {lat: 30.400, lng: -171.356};
  var southPacific = {lat: -34.013, lng: -139.597};
  var northAtlantic = {lat: 41.432, lng: -41.885};
  var southAtlantic = {lat: -28.856, lng: -12.090};
  var indianOcean = {lat: -23.656, lng: 82.567}; 

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: northPacific
  });

  var marker = new google.maps.Marker({
    position: northPacific,
    map: map,
    title: 'North Pacific Gyre'
  });
}

/*
  var myLatLng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });

  */

// Source: https://developers.google.com/maps/documentation/javascript/adding-a-google-map