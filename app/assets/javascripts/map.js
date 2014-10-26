function initialize() {
  $.ajax({
    datatype: "json",
    url: "/events",
    type: "GET",
    success: function(data) {
      console.log(data)
    }
});

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
}

$(document).ready(function() {
  google.maps.event.addDomListener(window, 'load', initialize);
});
