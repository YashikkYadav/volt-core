import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import "./WhatsappIcon.css";

const WhatsappIcon = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  // Initialize position after component mounts on client side
  useEffect(() => {
    setIsClient(true);
    setPosition({
      x: window.innerWidth - 100,
      y: window.innerHeight,
      // y: window.innerHeight
    });
  }, []);

  // Handle window resize to keep icon within bounds
  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setPosition((prev) => ({
        x: Math.min(prev.x, window.innerWidth - 20),
        y: Math.min(prev.y, window.innerHeight - 80),
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !isClient) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !isClient) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleClick = (e) => {
    // Only redirect if not dragging
    if (!isDragging && isClient) {
      window.open("https://wa.me/9024537068", "_blank");
    }
  };

  // Add event listeners for dragging
  useEffect(() => {
    if (!isClient) return;

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, dragStart, isClient]);

  // Don't render on server side
  if (!isClient) {
    return null;
  }

  return (
    <div
      className="whatsapp-icon"
      style={{
        // left: `${position.x}px`,
        // top: `${position.y}px`,
        right: `20px`,
        top: `80vh`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      aria-label="Chat with us on WhatsApp"
      role="button"
    >
      {/* <FaWhatsapp size="70%" color="#25D366" /> */}
      <IoLogoWhatsapp size="100%" color="#25D366" />
    </div>
  );
};

export default WhatsappIcon;
