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

///////////////////////////////////////////////////////////
// Opsional: Kontrol animasi galeri
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.gallery-slider');
    const slides = document.querySelectorAll('.gallery-slide');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    setInterval(nextSlide, 5000); // Ubah 5000 untuk mengatur kecepatan slide (dalam milidetik)
});