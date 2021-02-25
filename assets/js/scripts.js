// Create google map

function initMap() {
  const map = new google.maps.Map(document.getElementById('gmap_canvas'),{
    zoom: 7,
    scrollwheel: false,
    center: new google.maps.LatLng(52.161583, -7.154476),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
      {
        featureType: 'landscape.natural',
        elementType: 'all',
        stylers: [
          {
            color: '#f8f8f8',
            gamma: 5
          }
        ]
      }]

  });

  // marker
  const drone = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(52.161583, -7.154476),
    icon: './assets/favicon/favicon-32x32.png'
  });

  // circle
  const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: {lat: 52.161583, lng: -7.154476},
      radius: 104000,
    });
}
