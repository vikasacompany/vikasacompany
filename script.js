// Fungsi untuk toggle menu
function toggleMenu() {
    const menu = document.getElementById('menu');  // Mendapatkan elemen menu berdasarkan ID
    menu.classList.toggle('show');  // Menambahkan atau menghapus kelas 'show' untuk menampilkan atau menyembunyikan menu
}

// Fungsi Scroll to Top
window.onscroll = function() {scrollFunction()};  // Mengaktifkan fungsi scrollFunction setiap kali halaman di-scroll

// Fungsi untuk menampilkan atau menyembunyikan tombol "Scroll to Top" berdasarkan posisi scroll
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // Jika posisi scroll lebih dari 100px, tambahkan kelas 'show' untuk menampilkan tombol scrollToTop
        document.getElementById("scrollToTopBtn").classList.add("show");
    } else {
        // Jika tidak, hapus kelas 'show' untuk menyembunyikan tombol scrollToTop
        document.getElementById("scrollToTopBtn").classList.remove("show");
    }
}

// Fungsi untuk mengembalikan scroll ke atas saat tombol "Scroll to Top" diklik
function topFunction() {
    // Gunakan window.scrollTo() untuk scroll ke atas dengan animasi halus
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'  // Menambahkan animasi smooth scroll
    });
}
