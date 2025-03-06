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

/////////////////////////////////////////////////////////// yang di pakai sekarang
// JavaScript untuk galeri looping seamless
const images = [
    './Assets/image/albums/photo1.jpg',
    './Assets/image/albums/photo2.jpg',
    './Assets/image/albums/photo3.jpg',
    './Assets/image/albums/photo4.jpg',
    './Assets/image/albums/photo5.jpg'
];

const galleryTrack = document.getElementById('galleryTrack');

// Fungsi untuk mengisi gambar dan kloning untuk efek seamless
function setupGallery() {
    // Tambah gambar asli
    images.forEach((src) => {
        const slide = createSlide(src);
        galleryTrack.appendChild(slide);
    });

    // Kloning gambar di awal dan akhir untuk looping
    images.forEach((src) => {
        const slide = createSlide(src);
        galleryTrack.appendChild(slide);
    });
}

// Fungsi untuk membuat elemen slide
function createSlide(src) {
    const slide = document.createElement('div');
    slide.className = 'gallery-slide';
    slide.innerHTML = `<img src="${src}" alt="Gallery Image">`;
    return slide;
}

setupGallery();


//////////////////////////////////////////////////////////// cadangan 1
// // Opsional: Kontrol animasi galeri
// const galleryTrack = document.querySelector('.gallery-track');

// // galleryTrack.addEventListener('mouseenter', () => {
// //     galleryTrack.style.animationPlayState = 'paused'; // Pause animasi saat hover
// // });

// galleryTrack.addEventListener('mouseleave', () => {
//     galleryTrack.style.animationPlayState = 'running'; // Lanjutkan animasi saat tidak hover
// });


//////////////////////////////////////////////////////////// cadangan 2

// // Opsional: Kontrol animasi galeri
// const galleryTrack = document.querySelector('.gallery-track');
// const galleryItems = document.querySelectorAll('.gallery-item');

// // Clone the first and last items
// const firstClone = galleryItems[0].cloneNode(true);
// const lastClone = galleryItems[galleryItems.length - 1].cloneNode(true);

// // Append and prepend the clones
// galleryTrack.appendChild(firstClone);
// galleryTrack.insertBefore(lastClone, galleryItems[0]);

// // Adjust the animation to create a seamless loop
// galleryTrack.addEventListener('animationiteration', () => {
//     galleryTrack.appendChild(galleryTrack.firstElementChild); // Move the first item to the end
//     galleryTrack.style.animation = 'none'; // Pause the animation
//     galleryTrack.offsetHeight; // Trigger reflow
//     galleryTrack.style.animation = ''; // Restart the animation
// });

// galleryTrack.addEventListener('mouseleave', () => {
//     galleryTrack.style.animationPlayState = 'running'; // Lanjutkan animasi saat tidak hover
// });
