"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="section-dark" style={{ padding: '50px 0 0 0' }}>
      <div className="container relative z-2">
        <div className="row gx-5">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5 mb-lg-0">
            <Image
              src="/images/new-logo.png"
              className="logo-footer mb-4"
              alt="Voltcore Logo"
              width={300}
              height={80}
            />
            <p className="mb-4" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              At Voltcore, we&apos;re committed to delivering reliable,
              efficient, and sustainable solar energy solutions. From
              residential installations to commercial systems, we help you
              harness the power of the sun and reduce your energy bills while
              protecting the planet.
            </p>

            <div className="social-icons mb-4">
              <Link href="#" className="me-3">
                <i className="fa-brands fa-facebook-f"></i>
                <span className="visually-hidden">Facebook</span>
              </Link>
              <Link href="#" className="me-3">
                <i className="fa-brands fa-x-twitter"></i>
                <span className="visually-hidden">Twitter</span>
              </Link>
              <Link href="#" className="me-3">
                <i className="fa-brands fa-whatsapp"></i>
                <span className="visually-hidden">WhatsApp</span>
              </Link>
              <Link href="#" className="me-3">
                <i className="fa-brands fa-instagram"></i>
                <span className="visually-hidden">Instagram</span>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-youtube"></i>
                <span className="visually-hidden">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 col-sm-12 mb-5 mb-lg-0">
            <div className="row">
              <div className="col-md-7 col-sm-12 mb-4 mb-md-0">
                <div className="widget">
                  <h5 className="mb-3">Our Services</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <Link href="/contactus">Rooftop & Ground Mounted</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/contactus">Robotic Cleaning System</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/contactus">Operation & Maintenance</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-5 col-sm-12">
                <div className="widget">
                  <h5 className="mb-3">Company</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <Link href="/servicespage">Our Services</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/aboutus">About Us</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/testimonials">Testimonials</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="widget">
              <h5 className="mb-3">Contact Us</h5>

              <div className="fw-bold text-white d-flex align-items-start mb-3">
                <i
                  className="icofont-location-pin me-2 id-color mt-1"
                  style={{ color: "darkorange" }}
                ></i>
                <div>
                  <div className="fw-bold mb-1">Head Office</div>
                  <div style={{ fontSize: '0.9rem' }}>F-18 Ram Path Shyam Nagar Jaipur. Near metro pillar 97</div>
                </div>
              </div>

              <div className="fw-bold text-white d-flex align-items-start mb-3">
                <i
                  className="icofont-phone me-2 id-color mt-1"
                  style={{ color: "darkorange" }}
                ></i>
                <div>
                  <div className="fw-bold mb-1">Call Us</div>
                  <div style={{ fontSize: '0.9rem' }}>9024537068</div>
                  <div style={{ fontSize: '0.9rem' }}>9664214831</div>
                </div>
              </div>

              <div className="fw-bold text-white d-flex align-items-start">
                <i
                  className="icofont-envelope me-2 id-color mt-1"
                  style={{ color: "darkorange" }}
                ></i>
                <div>
                  <div className="fw-bold mb-1">Email Us</div>
                  <div style={{ fontSize: '0.9rem' }}>Voltcoreenergypvtltd@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subfooter mt-4 py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="mb-3 mb-md-0">
                  &copy; 2025 - Voltcore
                </div>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-3">
                    <Link href="#">Terms &amp; Conditions</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="abs w-50 end-0 bottom-0 op-3 d-none d-lg-block">
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