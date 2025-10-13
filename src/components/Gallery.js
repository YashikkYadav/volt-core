"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Gallery images from the folder
  const galleryImages = [
    { id: 1, src: '/images/gallery/WhatsApp Image 2025-10-13 at 13.12.36_9dd644cc.jpg', alt: 'Solar Installation 1' },
    { id: 2, src: '/images/gallery/WhatsApp Image 2025-10-13 at 13.12.37_0a108826.jpg', alt: 'Solar Installation 2' },
    { id: 3, src: '/images/gallery/WhatsApp Image 2025-10-13 at 13.12.37_42b107e9.jpg', alt: 'Solar Installation 3' },
    { id: 4, src: '/images/gallery/WhatsApp Image 2025-10-13 at 13.12.37_78fbde11.jpg', alt: 'Solar Installation 4' },
    { id: 5, src: '/images/gallery/WhatsApp Image 2025-10-13 at 13.12.38_76bcc4a8.jpg', alt: 'Solar Installation 5' },
    { id: 6, src: '/images/gallery/WhatsApp Image 2025-10-13 at 13.12.38_843b9fe7.jpg', alt: 'Solar Installation 6' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="wow fadeInUp">Our Projects Gallery</h2>
          <p className="wow fadeInUp" data-wow-delay=".2s">
            Explore our successful solar installations and projects
          </p>
        </div>
        
        <div className="row g-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="col-lg-4 col-md-6 col-sm-12">
              <div 
                className="gallery-item overflow-hidden rounded-3 shadow-sm wow fadeInUp"
                data-wow-delay={`${image.id * 0.1}s`}
                onClick={() => openModal(image)}
                style={{ cursor: 'pointer', height: '250px' }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-100 h-100 object-fit-cover"
                  style={{ transition: 'transform 0.3s ease' }}
                />
                <div 
                  className="gallery-overlay d-flex align-items-center justify-content-center"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
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

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1050 }}
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
                    style={{ backgroundColor: 'white' }}
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
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        
        .object-fit-cover {
          object-fit: cover;
        }
      `}</style>
    </section>
  );
};

export default Gallery;