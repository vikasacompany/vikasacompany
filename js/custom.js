// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

document.getElementById('searchButton').addEventListener('click', function () {
    const searchQuery = document.getElementById('searchInput').value.trim();
    
    if (searchQuery) {
        // Log untuk debugging
        console.log("Searching for: " + searchQuery);

        // Arahkan ke halaman pencarian
        window.location.href = `search.html?query=${encodeURIComponent(searchQuery)}`;
    } else {
        // Jika input kosong, beri pesan atau lakukan hal lain
        alert("Please enter a search term.");
    }
});

// Sample data untuk pencarian
const items = [
    "Smart Suitcase",
    "Travel Backpack",
    "Portable Charger",
    "Travel Pillow",
    "Bluetooth Headphones",
    "Camera"
  ];
  
  function searchFunction() {
    // Ambil nilai input dari search bar
    let input = document.getElementById('searchInput').value.toLowerCase(); 
    let results = document.getElementById('searchResults'); // Tempat hasil pencarian
    results.innerHTML = ''; // Bersihkan hasil sebelumnya
  
    // Jika input ada, lakukan pencarian
    if (input) {
      // Filter item berdasarkan input yang dimasukkan
      let filteredItems = items.filter(item => item.toLowerCase().includes(input));
  
      // Jika ada hasil pencarian
      if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
          let resultItem = document.createElement('div'); // Buat elemen div untuk setiap hasil
          resultItem.textContent = item; // Masukkan teks hasil pencarian
          results.appendChild(resultItem); // Masukkan hasil ke dalam container
        });
      } else {
        // Jika tidak ada hasil
        results.innerHTML = '<div>No results found.</div>';
      }
    }
  }  
