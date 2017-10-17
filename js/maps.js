function initMap() {
    var portsmouth = {lat: 50.8048232, lng: -1.1052416};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: portsmouth
    });


    //location lat lng
    var portsmouthHrb= {lat: 50.796947, lng: -1.107811};
    var portsmouthSth= {lat: 50.798513, lng: -1.090718};
    var fratton= {lat: 50.796502, lng: -1.073922};
    var cosham= {lat: 50.841867, lng: -1.067212};
    var havant= {lat: 50.8048232, lng: -1.1052416};
    var pyramid= {lat: 50.779253, lng: -1.085057};
    var mountbatten= {lat: 50.822379, lng: -1.084392};
    var aquarium= {lat: 50.780309, lng: -1.092699};
    var spinnaker= {lat: 50.795516, lng: -1.108510};
    var victoria= {lat: 50.799341, lng: -1.094305};
    var gunwarf= {lat: 50.795869, lng: -1.106106};
    var commercial= {lat: 50.800399, lng: -1.090271};
    var library= {lat: 50.796940, lng: -1.091064};

    //location checkboxes
    var allChk = document.getElementById('allMarkers').checked;
    var portsmouthHrbChk = document.getElementById('ck1').checked;
    var portsmouthSthChk = document.getElementById('ck2').checked;
    var frattonChk = document.getElementById('ck3').checked;
    var coshamChk = document.getElementById('ck4').checked;
    var pyramidChk = document.getElementById('ck6').checked;
    var mountbattenChk = document.getElementById('ck7').checked;
    var aquariumChk = document.getElementById('ck8').checked;
    var spinnakerChk = document.getElementById('ck9').checked;
    var victoriaPrkChk = document.getElementById('ck10').checked;
    var gunwarfChk = document.getElementById('ck11').checked;
    var commercialRdChk = document.getElementById('ck12').checked;
    var libraryChk = document.getElementById('ck14').checked;
    //var havantChk = document.getElementById('ck15 ').checked;


    //Google map marker variable
    if(allChk = true) {
        var hrbMarker = new google.maps.Marker({
            position: portsmouthHrb,
            map: map,
            label: "T"
        });

        var sthMarker = new google.maps.Marker({
            position: portsmouthSth,
            map: map,
            label: "T"
        });

        var frattonMarker = new google.maps.Marker({
            position: fratton,
            map: map,
            label: "T"
        });

        var coshamMarker = new google.maps.Marker({
            position: cosham,
            map: map,
            label: "T"
        });

        var havantMarker = new google.maps.Marker({
            position: havant,
            map: map,
            label: "T"
        });

        var pyramidMarker = new google.maps.Marker({
            position: pyramid,
            map: map,
            label: "A"
        });

        var mountMarker = new google.maps.Marker({
            position: mountbatten,
            map: map,
            label: "A"
        });

        var aquariumMarker = new google.maps.Marker({
            position: aquarium,
            map: map,
            label: "A"
        });

        var spinnakerMarker = new google.maps.Marker({
            position: spinnaker,
            map: map,
            label: "A"
        });

        var victoriaMarker = new google.maps.Marker({
            position: victoria,
            map: map,
            label: "A"
        });

        var gunwarfMarker = new google.maps.Marker({
            position: gunwarf,
            map: map,
            label: "S"
        });

        var commercialMarker = new google.maps.Marker({
            position: commercial,
            map: map,
            label: "S"
        });

        var libraryMarker = new google.maps.Marker({
            position: library,
            map: map,
            label: "L"
        });
    } else if (portsmouthHrbChk) {
        var hrbMarker = new google.maps.Marker({
            position: portsmouthHrb,
            map: map
        });
    } else if (portsmouthSthChk) {
        var sthMarker = new google.maps.Marker({
            position: portsmouthSth,
            map: map
        });
    } else if(frattonChk) {
        var frattonMarker = new google.maps.Marker({
            position: fratton,
            map: map
        });
    } else if(coshamChk) {
        var coshamMarker = new google.maps.Marker({
            position: cosham,
            map: map
        });
    } /*else if(havantChk) {
        var havantMarker = new google.maps.Marker({
            position: havant,
            map: map
        });
    } */else if(pyramidChk) {
        var pyramidMarker = new google.maps.Marker({
            position: pyramid,
            map: map
        });
    } else if(mountbattenChk) {
        var mountMarker = new google.maps.Marker({
            position: mountbatten,
            map: map
        });
    } else if(aquariumChk) {
        var aquariumMarker = new google.maps.Marker({
            position: aquarium,
            map: map
        });
    } else if(spinnakerChk) {
        var spinnakerMarker = new google.maps.Marker({
            position: spinnaker,
            map: map
        });
    } else if(victoriaPrkChk) {
        var victoriaMarker = new google.maps.Marker({
            position: victoria,
            map: map
        });
    } else if (gunwarfChk) {
        var gunwarfMarker = new google.maps.Marker({
            position: gunwarf,
            map: map
        });
    } else if(commercialRdChk) {
        var commercialMarker = new google.maps.Marker({
            position: commercial,
            map: map
        });
    } else if(libraryChk) {
        var libraryMarker = new google.maps.Marker({
            position: library,
            map: map
        });
    }


}


function locationMarkers() {

}
$('.dropdown-button').dropdown('open');


































