"use client";

import React from "react";
import Image from "next/image";

const LogoMarquee = () => {
  // List of image paths from the voltcoreimages folder
  const logos = [
    "/images/voltcoreimages/1.png",
    "/images/voltcoreimages/2.png",
    "/images/voltcoreimages/3.png",
    "/images/voltcoreimages/4.png",
    "/images/voltcoreimages/5.png",
    "/images/voltcoreimages/6.png",
    "/images/voltcoreimages/7.png",
    "/images/voltcoreimages/8.png",
    "/images/voltcoreimages/9.png",
  ];

  return (
    <section className="logo-marquee-section">
      <h2 className="marquee-title">Our Partners</h2>
      <div className="marquee-container">
        {/* Styled Title */}
        

        <div className="marquee-content">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div className="marquee-item" key={`first-${index}`}>
              <Image
                src={logo}
                alt={`Client Logo ${index + 1}`}
                width={150}
                height={80}
                className="marquee-logo"
              />
            </div>
          ))}

          {/* Duplicate set of logos for seamless looping */}
          {logos.map((logo, index) => (
            <div className="marquee-item" key={`second-${index}`}>
              <Image
                src={logo}
                alt={`Client Logo ${index + 1}`}
                width={150}
                height={80}
                className="marquee-logo"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .logo-marquee-section {
          padding: 60px 0;
          background-color: #f8f9fa;
          overflow: hidden;
        }

        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        /* --- Styled Title --- */
        .marquee-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 700;
          background: linear-gradient(90deg, #0a6bff, #00c3ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 40px;
          position: relative;
          letter-spacing: 0.5px;
        }

        .marquee-title::after {
          content: "";
          display: block;
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #0a6bff, #00c3ff);
          margin: 12px auto 0;
          border-radius: 2px;
        }

        .marquee-content {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          flex: 0 0 auto;
          margin: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .marquee-logo {
          max-width: 150px;
          height: 80px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .marquee-logo:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.1);
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .marquee-title {
            font-size: 1.7rem;
            margin-bottom: 30px;
          }

          .marquee-item {
            margin: 0 15px;
          }

          .marquee-logo {
            max-width: 120px;
            height: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;
