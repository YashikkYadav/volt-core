"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Helper function to check if jQuery and plugins are available
const isjQueryAvailable = () => {
  return typeof window !== 'undefined' && typeof window.jQuery !== 'undefined';
};

// Function to reinitialize global functionality
const reinitializeGlobalScripts = () => {
  if (typeof window === 'undefined') return;

  // Force reapplication of CSS classes and styles
  try {
    // Reapply body classes that might be lost during navigation
    document.body.classList.add('de_light', 'wow-animate');
    
    // Reapply header classes
    const header = document.querySelector('header');
    if (header) {
      header.classList.add('transparent');
    }
    
    // Reapply any other critical classes that might be needed
    const mainContainer = document.querySelector('.main-content') || document.querySelector('main');
    if (mainContainer) {
      mainContainer.classList.add('wow-animate');
    }
  } catch (error) {
    console.warn('Error reapplying CSS classes:', error);
  }

  // Reinitialize designesia.js functionality
  if (isjQueryAvailable() && window.jQuery) {
    const $ = window.jQuery;
    
    // Reinitialize various components
    try {
      // Reinitialize mobile menu arrows
      if (typeof window.menu_arrow === 'function') {
        window.menu_arrow();
      }
      
      // Reinitialize custom elements
      if (typeof window.custom_elements === 'function') {
        window.custom_elements();
      }
      
      // Reinitialize background elements
      if (typeof window.custom_bg === 'function') {
        window.custom_bg();
      }
      
      // Reinitialize video autosize
      if (typeof window.video_autosize === 'function') {
        window.video_autosize();
      }
      
      // Reinitialize owl carousels if available
      if ($.fn.owlCarousel) {
        // Destroy existing carousels to prevent duplication
        $('.owl-carousel').each(function() {
          if ($(this).data('owl.carousel')) {
            $(this).owlCarousel('destroy');
          }
        });
        
        // Reinitialize carousels
        if (typeof window.load_owl === 'function') {
          window.load_owl();
        }
      }
      
      // Reinitialize other functionality
      if (typeof window.init === 'function') {
        window.init();
      }
      
      if (typeof window.init_resize === 'function') {
        window.init_resize();
      }
      
      if (typeof window.de_progress === 'function') {
        window.de_progress();
      }
      
      // Reinitialize magnific popup
      if (typeof window.load_magnificPopup === 'function') {
        window.load_magnificPopup();
      }
      
      // Trigger window resize to recalculate layouts
      if (typeof window.centerY === 'function') {
        window.centerY();
      }
      
      // Reinitialize grid gallery
      if (typeof window.grid_gallery === 'function') {
        window.grid_gallery();
      }
      
      // Reinitialize WOW animations
      if (typeof WOW !== 'undefined') {
        new WOW().init();
      }
      
      // Trigger window resize event
      window.dispatchEvent(new Event('resize'));
      
    } catch (error) {
      console.warn('Error reinitializing global scripts:', error);
    }
  }
};

const useGlobalInit = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      reinitializeGlobalScripts();
      
      // Also reinitialize specific menu functionality
      if (typeof window !== 'undefined') {
        const menuBtn = document.getElementById('menu-btn');
        const header = document.querySelector('header');
        
        if (menuBtn && header) {
          // Remove any existing event listeners by cloning and replacing
          const newMenuBtn = menuBtn.cloneNode(true);
          menuBtn.parentNode.replaceChild(newMenuBtn, menuBtn);
          
          // Add event listener for mobile menu
          newMenuBtn.addEventListener('click', function() {
            if (header.classList.contains('menu-open')) {
              header.classList.remove('menu-open');
              header.style.height = 'auto';
              newMenuBtn.classList.remove('menu-open');
            } else {
              header.classList.add('menu-open');
              header.style.height = window.innerHeight + 'px';
              newMenuBtn.classList.add('menu-open');
            }
          });
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run when pathname changes

  return null;
};

export default useGlobalInit;