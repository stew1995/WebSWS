
var gmarkers1 = [];
var markers1 = [];
var infowindow = new google.maps.InfoWindow({
    content: ''
});

markers1  = [
    '0', 'Portsmouth Habour', '50.796947', '-1.107811', 'portsHrb'
], [
    '1', 'Portsmouth and Southsea', '50.798513', '-1.090718', 'portsSth'
], [
    '2', 'Fratton', '50.796502', '-1.073922', 'fratton'
], [
    '3', 'Cosham', '50.841867', '-1.067212', 'cosham'
], [
    '4', 'Havant', '50.8048232', '-1.1052416', 'havant'
], [
    '5', 'Pyramid Center', '50.822379', '-1.085057', 'pyramid'
], [
    '6', 'Mountbatten Center', '50.822379', '-1.084392', 'mouthbatten'
], [
    '7', 'Blue Reef Aquarium', '50.780309', '-1.092699', 'aqua'
], [
    '8', 'Spinnaker Tower', '50.799341', '-1.108510', 'spinnaker'
], [
    '9', 'Victoria Park', '50.799341', '-1.094305', 'victoria'
], [
    '10', 'Gunwharf Quays', '50.795869', '-1.106106', 'gunwharf'
], [
    '11', 'Commercial Road', '50.800399', '-1.090271', 'commercial'
], [
    '12', 'City Library', '50.796940', '-1.091064', 'library'
];


/**
 * Function to init map
 */

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.796947,lng: -1.107811},
        zoom: 8
    });

    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
}


/**
 * Function to add marker to map
 */

function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];

    marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map
    });

    gmarkers1.push(marker1);

    // Marker click listener
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
            console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            map.panTo(this.getPosition());
            map.setZoom(15);
        }
    })(marker1, content));
}

/**
 * Function to filter markers by category
 */

filterMarkers = function (category) {
    for (i = 0; i < markers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0) {
            marker.setVisible(true);
        }
        // Categories don't match
        else {
            marker.setVisible(false);
        }
    }
}

// Init map
initMap();

$('.dropdown-button').dropdown('open');


































