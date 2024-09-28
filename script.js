// Booking form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    alert(`Booking from ${checkin} to ${checkout} for ${guests} guests.`);
});

// Google Maps integration
function initMap() {
    var location = { lat: 32.7555, lng: -117.2513 }; // Example coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    const offset = -currentSlide * 100; // Adjust based on slide width
    document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}
