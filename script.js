// Fungsi untuk toggle menu
function toggleMenu() {
    const menu = document.querySelector("nav");
    const toggleButton = document.querySelector(".menu-toggle");

    // Menambahkan atau menghapus kelas 'show' pada menu dan 'toggle' pada tombol hamburger
    menu.classList.toggle("show");
    toggleButton.classList.toggle("toggle");
}

// Menutup menu ketika item diklik
function closeMenu(event) {
    event.preventDefault();  // Mencegah link untuk langsung membuka halaman saat menu ditutup

    const menu = document.querySelector("nav");
    const toggleButton = document.querySelector(".menu-toggle");

    // Menutup menu dan tombol hamburger
    menu.classList.remove("show");
    toggleButton.classList.remove("toggle");

    // Memberikan sedikit waktu untuk menutup menu sebelum berpindah halaman
    setTimeout(function() {
        if (event.target && event.target.href) {
            window.location = event.target.href; // Pindah ke halaman tujuan setelah animasi selesai
        }
    }, 300); // Sesuaikan dengan waktu animasi menu
}

// Scroll to top function
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Menampilkan tombol dengan animasi fade-in saat scroll lebih dari 20px
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}

// Fungsi untuk scroll ke atas dengan animasi perlahan
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // Menambahkan efek scroll perlahan
    });
}
