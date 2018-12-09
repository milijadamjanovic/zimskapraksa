var map;
function initMap() {
	var myLatLng = '-33.91722, 151.23064';
	map = new google.maps.Map(document.getElementById('map'), {
	zoom: 16,
        center: new google.maps.LatLng(-33.91722, 151.23064),
        mapTypeId: 'roadmap'
    });

	var marker = new google.maps.Marker({
    	position: myLatLng,
    	map: map,
    	icon: '../assets/img/pin.png'
	});

  
    // Create markers.
    features.forEach(function(feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
    });
}

/**
 * Google Maps API trazi API key koji nisam bio u mogucnosti da podesim
 * iz razloga sto je neophodno da se ostave podaci o kartici i da se podesi platni nalog da bi se
 * aktiviraio Google Maps API.
 *
 * Ref:  https://cloud.google.com/maps-platform/
 *
 * U kodu iznad mozete vidjeti funkciju za inicijalizaciju mape sa custom pin-om.
 */
//initMap();