// Animasi fade-in
document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua elemen yang ingin dianimasikan
    const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-up');

    // Buat IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Tambahkan class 'visible' saat elemen terlihat
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi dijalankan
            }
        });
    }, {
        threshold: 0.5 // Animasi akan dijalankan saat 10% elemen terlihat
    });

    // Observasi setiap elemen
    elementsToAnimate.forEach((element) => {
        observer.observe(element);
    });
});

/////////////////////////////////////////////////////////////
// Toggle Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});