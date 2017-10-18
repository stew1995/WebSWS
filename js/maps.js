var gMarkers = [];
var markers = [];

markers = [
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

function initMap() {
    var uluru = {lat: 50.8048232, lng:-1.1052416};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });

    for(i=0; i<markers.length; i++) {
        //add Marker function
        locationMarkers(markers[i], map)
    }
}




function locationMarkers(markers, map) {
    var category = markers[4];
    var title = markers[1];
    var pos = new google.maps.LatLng(markers[2], markers[3]);
    var content = markers[1];

    var marker = new google.maps.Marker({
        position: pos,
        map: map
    });

}




$('.dropdown-button').dropdown('open');


































