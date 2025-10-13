"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="section-dark">
      <div className="container relative z-2">
        <div className="row gx-5">
          <div className="col-lg-4 col-sm-6">
            <Image
              src="/images/new-logo.png"
              className="logo-footer"
              alt="Voltcore Logo"
              width={300}
              height={80}
            />
            <div className="spacer-20"></div>
            <p>
              At Voltcore, we&apos;re committed to delivering reliable,
              efficient, and sustainable solar energy solutions. From
              residential installations to commercial systems, we help you
              harness the power of the sun and reduce your energy bills while
              protecting the planet.
            </p>

            <div className="social-icons mb-sm-30">
              <Link href="#">
                <i className="fa-brands fa-facebook-f"></i>
                <span className="visually-hidden">Facebook</span>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-x-twitter"></i>
                <span className="visually-hidden">Twitter</span>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-whatsapp"></i>
                <span className="visually-hidden">WhatsApp</span>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-instagram"></i>
                <span className="visually-hidden">Instagram</span>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-youtube"></i>
                <span className="visually-hidden">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="col-lg-5 col-sm-12 order-lg-1 order-sm-2">
            <div className="row">
              <div className="col-lg-7 col-sm-6">
                <div className="widget">
                  <h5>Our Services</h5>
                  <ul>
                    <li>
                      <Link href="/contactus">Solar Panel Installation</Link>
                    </li>
                    <li>
                      <Link href="/contactus">Solar Panel Maintenance</Link>
                    </li>
                    <li>
                      <Link href="/contactus">Custom System Design</Link>
                    </li>
                    <li>
                      <Link href="/contactus">Solar Battery Storage</Link>
                    </li>
                    <li>
                      <Link href="/contactus">
                        System Monitoring & Reporting
                      </Link>
                    </li>
                    <li>
                      <Link href="/contactus">Solar Panel Upgrades</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-5 col-sm-6">
                <div className="widget">
                  <h5>Company</h5>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/servicespage">Our Services</Link>
                    </li>
                    <li>
                      <Link href="/aboutus">About Us</Link>
                    </li>
                    <li>
                      {/* <Link href="/">Blog</Link>
                       */}
                      <Link href="/testimonials">Testimonials</Link>
                    </li>
                    <li>
                      <Link href="/contactus">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 order-lg-2 order-sm-1">
            <div className="widget">
              <h5>Contact Us</h5>

              <div className="fw-bold text-white d-flex align-items-center">
                <i
                  className="icofont-location-pin me-2 id-color"
                  style={{ color: "darkorange" }}
                ></i>
                <span>Head Office</span>
              </div>
              <div>F-18 Ram Path Shyam Nagar Jaipur. Near metro pillar 97</div>

              <div className="spacer-20"></div>

              <div className="fw-bold text-white d-flex align-items-center">
                <i
                  className="icofont-phone me-2 id-color"
                  style={{ color: "darkorange" }}
                ></i>
                <span>Call Us</span>
              </div>
              <div>9024537068</div>
              <div>9664214831</div>

              <div className="spacer-20"></div>

              <div className="fw-bold text-white d-flex align-items-center">
                <i
                  className="icofont-envelope me-2 id-color"
                  style={{ color: "darkorange" }}
                ></i>
                <span>Email Us</span>
              </div>
              <div>Voltcoreenergypvtltd@gmail.com</div>
            </div>
          </div>
        </div>
      </div>

      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex">
                <div className="de-flex-col">
                  &copy; 2025 - Voltcore
                </div>
                <ul className="menu-simple">
                  <li>
                    <Link href="#">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="abs w-50 end-0 bottom-0 op-3">
        <Image
          src="/images/misc/c1.webp"
          className="w-100 rtl-hide"
          alt="Decorative background"
          width={800}
          height={600}
        />
        <Image
          src="/images/misc/c1-flip.webp"
          className="w-100 rtl-show"
          alt="Decorative background flipped"
          width={800}
          height={600}
        />
      </div>
    </footer>
  );
};

export default Footer;
