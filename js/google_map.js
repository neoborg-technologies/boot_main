function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
		var myLatlng = new google.maps.LatLng(12.8527169,77.6561491);
        var mapOptions = {
          center: new google.maps.LatLng(12.8527169,77.6561491),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
		var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Neoborg Technologies'
 		 });
      }
      google.maps.event.addDomListener(window, 'load', initialize);