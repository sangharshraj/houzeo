// owl carousel start

$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav:true,
    // autoplay:true
})


// google map 
function initMap() {
    // The location of the center point for the map
    const location = { lat: -34.397, lng: 150.644 };
    
    // Create a new map centered at the given location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: location,
    });
    
    // Add a marker at the location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}