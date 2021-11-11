function initMap() {

  fetch("https://amapalanches.com/includes/v1/getTodas.php").then(function (data) {
    return data.json();
  }).then(function (json) {
    //console.log(json.todas);
 
    var map;
    var centerPos = new google.maps.LatLng(0.023908, -51.063174);
    var zoomLevel = 12;
  
    var mapOptions = {
      center: centerPos,
      zoom: zoomLevel
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    for (var i = 0; i < json.todas.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(json.todas[i].lat, lnge = json.todas[i].lng),
        title: json.todas[i].titulo,
        map: map
      });
    }
  
    google.maps.event.addDomListener(window, 'load', initialize); 
  })
}


