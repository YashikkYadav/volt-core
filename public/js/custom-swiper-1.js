// Store swiper instance globally
window.customSwiper1 = null;

// Function to initialize swiper
function initSwiper() {
  // Destroy existing instance if it exists
  if (window.customSwiper1) {
    window.customSwiper1.destroy(true, true);
    window.customSwiper1 = null;
  }

  // Check if Swiper is defined before initializing
  if (typeof Swiper !== 'undefined') {
    window.customSwiper1 = new Swiper('.swiper', {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: false,
        clickable: false,
      },
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
window.initCustomSwiper1 = initSwiper;