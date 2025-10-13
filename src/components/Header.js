"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const menuBtnRef = useRef(null);
  const handlerRef = useRef(null);

  useEffect(() => {
    // Clean up previous event listeners
    if (menuBtnRef.current && handlerRef.current) {
      menuBtnRef.current.removeEventListener('click', handlerRef.current);
    }

    // Reinitialize header functionality when pathname changes
    const initHeader = () => {
      if (typeof window !== 'undefined') {
        // Initialize mobile menu functionality
        const menuBtn = document.getElementById('menu-btn');
        const header = document.querySelector('header');
        
        if (menuBtn && header) {
          // Store reference to menu button
          menuBtnRef.current = menuBtn;
          
          // Define the event handler
          const menuHandler = function() {
            if (header.classList.contains('menu-open')) {
              header.classList.remove('menu-open');
              header.style.height = 'auto';
              menuBtn.classList.remove('menu-open');
            } else {
              header.classList.add('menu-open');
              header.style.height = window.innerHeight + 'px';
              menuBtn.classList.add('menu-open');
            }
          };
          
          // Store reference to handler for cleanup
          handlerRef.current = menuHandler;
          
          // Add event listener
          menuBtn.addEventListener('click', menuHandler);
        }

        // Initialize dropdown functionality
        const hasChildren = document.querySelectorAll('#mainmenu li:has(ul)');
        hasChildren.forEach(item => {
          item.classList.add('has-child');
        });

        // Initialize other header functionality from designesia.js
        if (typeof jQuery !== 'undefined' && jQuery().owlCarousel) {
          // Reinitialize any owl carousel in header if needed
        }
      }
    };

    // Call initialization
    initHeader();

    // Cleanup function
    return () => {
      // Clean up event listeners
      if (menuBtnRef.current && handlerRef.current) {
        menuBtnRef.current.removeEventListener('click', handlerRef.current);
      }
    };
  }, [pathname]); // Re-run when pathname changes

  return (
    <header className="transparent" style={{ backgroundColor: 'white', color: 'black' }}>
      <div id="topbar" style={{ color: 'black' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between xs-hide">
                <div className="d-flex">
                  <div className="topbar-widget me-5 ">
                    <Link href="#" style={{ color: 'black' }}>
                      <i
                        style={{ color: "darkorange" }}
                        className="icofont-location-pin "
                      ></i>
                      F-18 Ram Path Shyam Nagar Jaipur. Near metro pillar 97
                    </Link>
                  </div>
                  <div className="topbar-widget me-5">
                    <Link href="#" style={{ color: 'black' }}>
                      <i
                        className="icofont-phone"
                        style={{ color: "darkorange" }}
                      ></i>
                      9664214831
                    </Link>
                    <Link href="#" style={{ color: 'black' }}>
                      <i
                        className="icofont-phone"
                        style={{ color: "darkorange" }}
                      ></i>
                      9024537068
                    </Link>
                  </div>
                  <div className="topbar-widget me-5">
                    <Link href="#" style={{ color: 'black' }}>
                      <i
                        className="icofont-envelope"
                        style={{ color: "darkorange" }}
                      ></i>
                      Voltcoreenergypvtltd@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="social-icons">
                    <Link href="#" style={{ color: 'black' }}>
                      <i className="fa-brands fa-facebook fa-lg" style={{ color: 'black ' }}></i>
                      <span className="visually-hidden">Facebook</span>
                    </Link>
                    <Link href="#" style={{ color: 'black' }}>
                      <i className="fa-brands fa-x-twitter fa-lg" style={{ color: 'black ' }}></i>
                      <span className="visually-hidden">Twitter</span>
                    </Link>
                    <Link href="#" style={{ color: 'black' }}>
                      <i className="fa-brands fa-youtube fa-lg" style={{ color: 'black ' }}></i>
                      <span className="visually-hidden">YouTube</span>
                    </Link>
                    <Link href="#" style={{ color: 'black' }}>
                      <i className="fa-brands fa-pinterest fa-lg" style={{ color: 'black ' }}></i>
                      <span className="visually-hidden">Pinterest</span>
                    </Link>
                    <Link href="#" style={{ color: 'black' }}>
                      <i className="fa-brands fa-instagram fa-lg" style={{ color: 'black ' }}></i>
                      <span className="visually-hidden">Instagram</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                {/* logo begin */}
                <div id="">
                  <Link href="/">
                    <Image
                      className="logo-main"
                      src="/images/new-logo.png"
                      alt="Voltcore Logo"
                      width={200}
                      height={80}
                    />
                    <Image
                      className="logo-mobile"
                      src="/images/new-logo.png"
                      alt="Voltcore Logo"
                      width={150}
                      height={65}
                    />
                  </Link>
                </div>
                {/* logo end */}
              </div>
              <div className="de-flex-col header-col-mid">
                {/* mainemenu begin */}
                <ul id="mainmenu">
                  <li>
                    <Link className="menu-item" href="/" style={{ color: 'black' }}>
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link className="menu-item" href="/servicespage" style={{ color: 'black' }}>
                      Services
                    </Link>
                    <ul>
                      <li>
                        <Link href="/servicespage" style={{ color: 'black' }}>Solar Panel</Link>
                      </li>
                      <li>
                        <Link href="/costcalculate" style={{ color: 'black' }}>Cost Calulator</Link>
                      </li>
                      {/* <li>
                        <Link href="/" style={{ color: 'black' }}>Service Single</Link>
                      </li>
                      <li>
                        <Link href="/" style={{ color: 'black' }}>Industries We Serve</Link>
                      </li>
                      <li>
                        <Link href="/" style={{ color: 'black' }}>Service Area</Link>
                      </li>
                      <li>
                        <Link href="/" style={{ color: 'black' }}>How It Works</Link>
                      </li>
                      <li>
                        <Link href="/" style={{ color: 'black' }}>FAQ</Link>
                      </li> */}
                    </ul>
                  </li>
                  {/* <li>
                    <Link className="menu-item" href="/" style={{ color: 'black' }}>
                      Projects
                    </Link>
                    <ul>
                      <li>
                        <Link href="/" style={{ color: 'black' }}>Projects Default</Link>
                      </li>
                      <li>
                        <Link href="/" style={{ color: 'black' }}>Projects Slider</Link>
                      </li>
                      <li>
                        <Link href="/" style={{ color: 'black' }}>Projects Carousel</Link>
                      </li>
                      <li>
                        <Link href="/" style={{ color: 'black' }}>Project Details</Link>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Link className="menu-item" href="/aboutus" style={{ color: 'black' }}>
                      About Us
                    </Link>
                    {/* <ul>
                      <li>
                        <Link href="/aboutus" style={{ color: 'black' }}>About Us</Link>
                      </li>
                      <li>
                        <Link href="/" style={{ color: 'black' }}>Our Team</Link>
                      </li>
                      <li>
                        <Link href="/" style={{ color: 'black' }}>Careers</Link>
                      </li>
                      <li>
                        <Link href="/testimonials" style={{ color: 'black' }}>Testimonials</Link>
                      </li>
                    </ul> */}
                  </li>
                  {/* <li>
                    <Link className="menu-item" href="/" style={{ color: 'black' }}>
                      Blog
                    </Link>
                  </li> */}
                  <li>
                    <Link className="menu-item" href="/contactus" style={{ color: 'black' }}>
                      Contact
                    </Link>
                  </li>
                </ul>
                {/* mainmenu end */}
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <Link
                    href="/contactus"
                    className="btn-main btn-line fx-slide hover-white"
                    style={{ color: 'black', borderColor: 'black' }}
                  >
                    <span style={{ color: 'black' }}>Get Link Quote</span>
                  </Link>
                  <span id="menu-btn" style={{ color: 'black ' }}>
                    
                  </span>
                </div>

                {/* <div id="btn-extra">
                  <span></span>
                  <span></span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;