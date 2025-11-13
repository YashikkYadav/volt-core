"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  // Gallery images from the folder
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/WhatsApp Image 2025-10-13 at 13.12.36_9dd644cc.jpg",
      alt: "Solar Installation 1",
    },
    {
      id: 2,
      src: "/images/gallery/WhatsApp Image 2025-10-13 at 13.12.37_0a108826.jpg",
      alt: "Solar Installation 2",
    },
    {
      id: 3,
      src: "/images/gallery/WhatsApp Image 2025-10-13 at 13.12.37_42b107e9.jpg",
      alt: "Solar Installation 3",
    },
    {
      id: 4,
      src: "/images/gallery/WhatsApp Image 2025-10-13 at 13.12.37_78fbde11.jpg",
      alt: "Solar Installation 4",
    },
    {
      id: 5,
      src: "/images/gallery/WhatsApp Image 2025-10-13 at 13.12.38_76bcc4a8.jpg",
      alt: "Solar Installation 5",
    },
    {
      id: 6,
      src: "/images/gallery/WhatsApp Image 2025-10-13 at 13.12.38_843b9fe7.jpg",
      alt: "Solar Installation 6",
    },
  ];

  // Create infinite loop by duplicating images
  const duplicatedImages = [
    ...galleryImages,
    ...galleryImages,
    ...galleryImages,
  ];

  // Update slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Reset index for infinite loop effect
  useEffect(() => {
    if (currentIndex >= galleryImages.length) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 500); // Small delay to ensure smooth transition
    }
  }, [currentIndex, galleryImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return galleryImages.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Calculate how many slides we can actually show
  const visibleSlides = Math.min(slidesToShow, galleryImages.length);

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="wow fadeInUp">Our Projects Gallery</h2>
          <p className="wow fadeInUp" data-wow-delay=".2s">
            Explore our successful solar installations and projects
          </p>
        </div>

        {/* Custom Carousel */}
        <div className="position-relative">
          <div
            className="overflow-hidden rounded-3 shadow-sm"
            style={{ height: "300px" }}
          >
            <div
              className="d-flex h-100"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleSlides)
                }%)`,
                transition:
                  (currentIndex === 0 && "none") ||
                  "transform 0.5s ease-in-out",
                gap: "15px",
                padding: "0 15px",
              }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className="flex-shrink-0 position-relative"
                  style={{ width: `calc(${100 / visibleSlides}% - 15px)` }}
                  onClick={() => openModal(image)}
                >
                  <div className="h-100 w-100 position-relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-fit-cover rounded-3"
                      style={{ cursor: "pointer" }}
                    />
                    <div
                      className="gallery-overlay d-flex align-items-center justify-content-center"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <div className="text-white text-center p-3">
                        <i className="fa fa-search-plus fa-2x mb-2"></i>
                        <p className="mb-0">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className=" btn-primary position-absolute start-0 top-50 translate-middle-y ms-3"
            style={{ zIndex: 10 }}
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            className=" btn-primary position-absolute end-0 top-50 translate-middle-y me-3"
            style={{ zIndex: 10 }}
            onClick={nextSlide}
          >
            &gt;
          </button>

          {/* Pagination Dots */}
          <div className="d-flex justify-content-center mt-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`mx-1 rounded-circle border-0 ${
                  index === currentIndex % galleryImages.length
                    ? "bg-primary"
                    : "bg-secondary"
                }`}
                style={{ width: "12px", height: "12px" }}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: 1050 }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 bg-transparent">
              <div className="modal-body p-0">
                <div className="d-flex justify-content-end mb-2">
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={closeModal}
                    style={{ backgroundColor: "white" }}
                  ></button>
                </div>
                <div className="text-center">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={800}
                    height={600}
                    className="img-fluid rounded"
                  />
                  <p className="text-white mt-3">{selectedImage.alt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-overlay:hover {
          opacity: 1;
        }

        .object-fit-cover {
          object-fit: cover;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
