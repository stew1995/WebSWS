function initMap() {
    var portsmouth = {lat: 50.8048232, lng: -1.1052416};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: portsmouth
    });
    var marker = new google.maps.Marker({
        position: portsmouth,
        map: map
    });
}