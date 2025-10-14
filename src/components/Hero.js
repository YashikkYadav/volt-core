"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const swiperRef = useRef(null);
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    // Function to initialize Swiper
    const initSwiper = () => {
      // Destroy existing instance if it exists
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
      }

      // Check if Swiper is available and container exists
      if (typeof window !== 'undefined' && window.Swiper && swiperContainerRef.current) {
        // Initialize Swiper
        swiperRef.current = new window.Swiper(swiperContainerRef.current, {
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          spaceBetween: 30,
          effect: "fade",
          loop: true,
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
    };

    // Initialize Swiper
    initSwiper();

    // Re-initialize on window resize
    const handleResize = () => {
      setTimeout(initSwiper, 100);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
      }
    };
  }, []);

  return (
    <section
      id="section-intro"
      className="text-light relative overflow-hidden mh-700"
    >
      <div className="relative z-4">
        <div className="container z-2">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="spacer-double"></div>
              <h1>Brightening Tomorrow with Clean Solar Power.</h1>
              <p>
                At Voltcore, we&apos;re committed to delivering reliable,
                efficient, and sustainable solar energy solutions. From
                residential installations to commercial systems, we help you
                harness the power of the sun and reduce your energy bills while
                protecting the planet.
              </p>
              <Link className="btn-main fx-slide" href="/contactus">
                <span>Get Started</span>
              </Link>
              <Link
                style={{ backgroundColor: "orange" }}
                className="btn-main fx-slide ml-2 "
                href="/costcalculate"
              >
                <span>Cost Calculator</span>
              </Link>
            </div>
          </div>

          <div className="spacer-double sm-hide"></div>
          <div className="spacer-double"></div>

          <div className="row g-4 justify-content-between">
            <div className="col-md-6">
              <div className="p-4 bg-blur rounded-1 h-100">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <Image
                      src="/images/misc/cst-1.webp"
                      className="w-100 rounded-1"
                      alt="Solar panel installation example"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="col-lg-6">
                    <h3>When Sustainability Meets Style</h3>
                    <p>
                      Clean energy solutions designed to look great and perform
                      efficiently that fits your lifestyle perfectly.
                    </p>
                    <a className="btn-main btn-line fx-slide" href="#">
                      <span>View Services</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="p-4 h-100 bg-blur rounded-1">
                    <div>
                      <div className="relative">
                        <Image
                          src="/images/icons-dark/1.png"
                          className="bg-color w-30 p-2 rounded-1 mb-3"
                          alt="Clean energy icon"
                          width={120}
                          height={120}
                        />
                        <h4>Clean Energy for a Future</h4>
                        <p className="mb-0">
                          Choosing solar is a step toward a future powered by
                          clean, renewable, and reliable energy for generations
                          to come.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="bg-color text-dark rounded-1 h-100 w-100 p-4 py-5 z-3 overflow-hidden">
                    <div className="text-end">
                      <Image
                        src="/images/icons-dark/solar-panel.png"
                        className="w-80px mb-3"
                        alt="Solar panel icon"
                        width={80}
                        height={80}
                      />
                    </div>
                    <h5 className="mb-0">100K+</h5>
                    <h2 className="mb-0 fs-32">home installed solar panel</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper" ref={swiperContainerRef}>
        {/* Additional required wrapper */}
        <div className="swiper-wrapper">
          {/* Slides */}
          <div className="swiper-slide">
            <div
              className="swiper-inner"
              style={{
                backgroundImage: "url(/images/misc/solarpanel3.jpg)",
                backgroundPosition: "center",
              }}
            >
              <div className="sw-overlay op-3"></div>
              <div className="gradient-edge-top op-8"></div>
            </div>
          </div>
          {/* Slides */}

          {/* Slides */}
          <div className="swiper-slide">
            <div
              className="swiper-inner"
              style={{
                backgroundImage: "url(/images/misc/solarpannel2.jpg)",
                backgroundPosition: "center",
              }}
            >
              <div className="sw-overlay op-3"></div>
              <div className="gradient-edge-top op-8"></div>
            </div>
          </div>
          {/* Slides */}
        </div>
      </div>
    </section>
  );
};

export default Hero;