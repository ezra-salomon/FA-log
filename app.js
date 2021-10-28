//Initalize initMap function

function initMap(){

    let options = {
        center: {lat: 38.4221, lng: -120.0469},
        zoom: 13
    }
    
    //New map
    map = new google.maps.Map(document.getElementById("map"),options)

    //add marker
    function addMarker(location, boulderName){

        const marker = new google.maps.Marker({
            position: location,
            name: boulderName,
            map: map
        });

        marker.addListener("click", () => {
            detailWindow.open(map, marker);
        });

        const detailWindow = new google.maps.InfoWindow({
            content: boulderName
        });

    }

    

    

    addMarker({lat: 38.429229, lng: -120.056118}, 'Flying Dutchman V8');
    addMarker({lat: 38.409574, lng: -120.052870}, 'Timber Terror V6');
    addMarker({lat: 38.412808, lng: -120.048411}, 'Napoleon Complex V7');
    addMarker({lat: 38.430185, lng: -120.072122}, 'King Knave V6');
    addMarker({lat: 38.432812, lng: -120.012210}, 'Hive Mind V7');
    addMarker({lat: 38.429898, lng: -119.987395}, 'Between the Pines V3');
    

}

