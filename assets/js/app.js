function initMap() {
    var location = {
        lat: 40.709210
        , lng: -74.005710
    };
    var app = new google.maps.Map(document.getElementById("map"), {
        zoom: 4
        , center: location
    });
    var marker = new google.maps.Marker({
        position: location
        , map: map
    });
};



