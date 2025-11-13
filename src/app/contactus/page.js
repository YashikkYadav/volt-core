"use client";
import Footer from "@/components/Footer";

import Header from "@/components/Header";
import WhatsappIcon from "@/components/WhatsappIcon";
import Image from "next/image";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the message for WhatsApp
    const whatsappNumber = "919024537068"; // +91 9024537068
    const message = `New Contact Form Submission from Voltcore Energy Website:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Show success message
    setSubmitStatus("success");
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div>
      <Header />
      <WhatsappIcon />
      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <section
            id="subheader"
            className="bg-dark text-light relative jarallax"
            style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "#1a1a1a",
              color: "#ffffff",
              minHeight: "400px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/background/6.webp"
              className="jarallax-img"
              alt="Contact Voltcore Energy - Solar Panel Installation in Jaipur"
              width={1920}
              height={1080}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
              }}
            />
            <div
              className="container relative z-2"
              style={{ position: "relative", zIndex: 2 }}
            >
              <div className="row gy-4 gx-5 align-items-center">
                <div className="col-lg-12">
                  <div className="spacer-double sm-hide"></div>
                  <h5
                    className="wow fadeInUp"
                    style={{
                      animationDelay: "0.1s",
                      opacity: 0,
                      animation: "fadeInUp 1s forwards",
                    }}
                  >
                    Get in Touch with Rajasthan&#39;s Leading Solar Energy
                    Experts
                  </h5>
                  <h1
                    className="mb-3 wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{
                      animationDelay: "0.2s",
                      opacity: 0,
                      animation: "fadeInUp 1s forwards",
                      fontSize: "3rem",
                      fontWeight: "bold",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    Contact Voltcore Energy - Solar Solutions in Jaipur
                  </h1>
                  <div
                    className="border-bottom mb-3"
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                      marginBottom: "1rem",
                    }}
                  ></div>
                  <ul
                    className="crumb wow fadeInUp"
                    style={{
                      animationDelay: "0.3s",
                      opacity: 0,
                      animation: "fadeInUp 1s forwards",
                      listStyle: "none",
                      padding: 0,
                      display: "flex",
                    }}
                  >
                    <li style={{ marginRight: "10px" }}>
                      <div
                        style={{
                          color: "rgba(255, 255, 255, 0.7)",
                          textDecoration: "none",
                        }}
                      >
                        Home
                      </div>
                    </li>
                    <li className="active" style={{ color: "#ffffff" }}>
                      Contact Solar Experts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="gradient-edge-bottom h-50"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "50%",
                background:
                  "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                zIndex: 1,
              }}
            ></div>
            <div
              className="sw-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                zIndex: 1,
              }}
            ></div>

            <style jsx>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              .wow {
                opacity: 0;
              }

              .wow.animated {
                opacity: 1;
              }
            `}</style>
          </section>

          <section>
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="subtitle">Connect With Our Solar Experts</div>
                  <h2 className="wow fadeInUp">
                    Contact Our Solar Energy Consultants in Jaipur for Free
                    Consultation
                  </h2>

                  <p>
                    Ready to make the switch to clean, renewable solar energy?
                    Our team of certified solar experts in Jaipur is here to
                    answer all your questions about residential and commercial
                    solar panel installations. Whether you&#39;re interested in
                    reducing your electricity bills, increasing your property
                    value, or contributing to a sustainable future, we&#39;re
                    ready to provide you with a customized solar solution.
                  </p>

                  <div className="row g-4 gx-5">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center fw-bold text-dark">
                        <i className="icofont-clock-time me-2 id-color"></i>
                        <span>Business Hours</span>
                      </div>
                      Monday - Saturday: 08:00 AM - 06:00 PM
                    </div>

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center fw-bold text-dark">
                        <i className="icofont-location-pin me-2 id-color"></i>
                        <span>Our Office</span>
                      </div>
                      F-18 Ram Path, Shyam Nagar, Jaipur. Near Metro Pillar 97
                    </div>

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center fw-bold text-dark">
                        <i className="icofont-phone me-2 id-color"></i>
                        <span>Call Our Solar Experts</span>
                      </div>
                      <div>+91 9024537068</div>
                      <div>+91 9664214831</div>
                    </div>

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center fw-bold text-dark">
                        <i className="icofont-envelope me-2 id-color"></i>
                        <span>Email Us</span>
                      </div>
                      Voltcoreenergypvtltd@gmail.com
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4>
                      Why Choose Voltcore Energy for Your Solar Installation?
                    </h4>
                    <p>
                      As one of Jaipur&#39;s most trusted solar energy
                      companies, we offer free site assessments, competitive
                      pricing, and expert installation services. Our certified
                      technicians ensure your solar system is designed and
                      installed to maximize energy production and long-term
                      savings.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="p-40 bg-light rounded-1">
                    <h3>Request Free Solar Consultation</h3>
                    <form
                      name="contactForm"
                      id="contact_form"
                      className="relative z1000"
                      onSubmit={handleSubmit}
                    >
                      <div className="field-set">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Your Full Name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="field-set">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Your Email Address"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="field-set">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          className="form-control"
                          placeholder="Your Phone Number"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="field-set">
                        <select
                          name="service"
                          id="service"
                          className="form-control"
                          required
                          value={formData.service}
                          onChange={handleChange}
                        >
                          <option value="">Select Service</option>
                          <option value="residential">
                            Residential Solar Installation
                          </option>
                          <option value="commercial">
                            Commercial Solar Installation
                          </option>
                          <option value="maintenance">
                            Solar Panel Maintenance
                          </option>
                          <option value="battery">Solar Battery Storage</option>
                          <option value="consultation">
                            Free Solar Consultation
                          </option>
                        </select>
                      </div>

                      <div className="field-set mb20">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          placeholder="Tell us about your solar energy needs"
                          required
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      <div id="submit" className="mt20">
                        <input
                          type="submit"
                          id="send_message"
                          value={
                            isSubmitting
                              ? "Sending..."
                              : "Send Consultation Request"
                          }
                          className="btn-main"
                          disabled={isSubmitting}
                        />
                      </div>

                      {submitStatus === "success" && (
                        <div id="success_message" className="success">
                          Thank you for contacting Voltcore Energy. Our solar
                          experts will contact you within 24 hours to schedule
                          your free consultation. WhatsApp window should have
                          opened with your message.
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div id="error_message" className="error">
                          Sorry, there was an error sending your consultation
                          request. Please call us directly at +91 9024537068.
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
