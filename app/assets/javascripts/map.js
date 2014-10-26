function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(37.785564, -122.396935),
    zoom: 14,
    scrollwheel: false,
    mapTypeControl: false,
    scaleControl: false,
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

  //STYLE MAP
  var styles = [
  {featureType:"poi",stylers: [{visibility: "off" }]},
  {"featureType": "water","stylers": [{"color": "#021019"}]},
  {"featureType": "landscape","stylers": [{"color": "#08304b"}]},
  {"featureType": "poi","elementType": "geometry","stylers": [{"color": "#0c4152"},{"lightness": 5}]},
  {"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#000000"}]},
  {"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#0b434f"},{"lightness": 25}]},
  {"featureType": "road.arterial","elementType": "geometry.fill","stylers": [{"color": "#000000"}]},
  {"featureType": "road.arterial","elementType": "geometry.stroke","stylers": [{"color": "#0b3d51"},{"lightness": 16}]},
  {"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#000000"}]},
  {"elementType": "labels.text.fill","stylers": [{"color": "#ffffff"}]},
  {"elementType": "labels.text.stroke","stylers": [{"color": "#000000"},{"lightness": 13}]},
  {"featureType": "transit","stylers": [{"color": "#146474"}]},
  {"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#000000"}]},
  {"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#144b53"},{"lightness": 14},{"weight": 1.4}]}];
  map.setOptions({styles: styles});

  //POPULATE MARKERS
  $.get('/events').success(function(events) {
    console.log(events);
    for (var i = 0; i < events.length; i++) {
      var location = new google.maps.LatLng(parseFloat(events[i].latitude), parseFloat(events[i].longitude))
      var marker = new google.maps.Marker({
        position: location,
        title: events[i].title,
        map: map,
      });
    }
  });

  //ADD NEW MARKER ON CLICK, UPDATE COORDINATES
  google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng);
    document.getElementById("event_latitude").value = event.latLng.lng();
    document.getElementById("event_longitude").value = event.latLng.lng();
  });
  function placeMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      draggable: true
    });
    google.maps.event.addListener(marker, 'dragend', function (event) {
      document.getElementById("event_latitude").value = this.getPosition().lat();
      document.getElementById("event_longitude").value = this.getPosition().lng();
    });
  }
}

$(document).ready(function() {
  google.maps.event.addDomListener(window, 'load', initialize());
});
