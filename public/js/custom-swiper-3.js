// Store swiper instance globally
window.customSwiper3 = null;

// Function to initialize swiper
function initSwiper() {
  // Destroy existing instance if it exists
  if (window.customSwiper3) {
    window.customSwiper3.destroy(true, true);
    window.customSwiper3 = null;
  }

  // Check if Swiper is defined before initializing
  if (typeof Swiper !== 'undefined') {
    window.customSwiper3 = new Swiper('.swiper', {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      // Optional parameters
      effect: "cube", // cards, coverflow, cube, fade, flip, slide 
      slidesPerView: 1,
      loop: true,
      speed: 1200,
      mousewheel: false,
      watchSlidesProgress: true,
      parallax: true,
      spaceBetween: -1,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      watchSlidesProgress: true
    });
  }
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSwiper);
} else {
  initSwiper();
}

// Also initialize on window load for safety
window.addEventListener('load', initSwiper);

// Make function available globally for reinitialization
window.initCustomSwiper3 = initSwiper;