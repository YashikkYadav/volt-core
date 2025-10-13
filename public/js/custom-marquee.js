// Store marquee instances globally
window.marqueeInstances = [];

// Function to initialize marquee
function initMarquee() {
  // Destroy existing instances if they exist
  if (window.marqueeInstances.length > 0) {
    window.marqueeInstances.forEach(instance => {
      if (instance.destroy) {
        instance.destroy();
      }
    });
    window.marqueeInstances = [];
  }

  // Check if jQuery and marquee plugin are available
  if (typeof jQuery !== 'undefined' && jQuery().marquee) {
    const $ = jQuery;
    
    // Initialize marquees
    $('.de-marquee-list').each(function() {
      const instance = $(this).marquee({
        direction: 'left',
        duration: 60000,
        gap: 0,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
      });
      window.marqueeInstances.push(instance);
    });

    $('.de-marquee-list-2').each(function() {
      const instance = $(this).marquee({
        direction: 'right',
        duration: 60000,
        gap: 0,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
      });
      window.marqueeInstances.push(instance);
    });

    $('.wm-carousel').each(function() {
      const instance = $(this).marquee({
        direction: 'left',
        duration: 20000,
        gap: 100,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: false
      });
      window.marqueeInstances.push(instance);
    });
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMarquee);
} else {
  initMarquee();
}

// Also initialize on window load for safety
window.addEventListener('load', initMarquee);

// Make function available globally for reinitialization
window.initCustomMarquee = initMarquee;