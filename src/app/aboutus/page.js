"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import WhatsappIcon from "@/components/WhatsappIcon";

const AboutUs = () => {
  return (
    <div>
      <Header />
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
          <WhatsappIcon />
          <Image
            src="/images/background/2.webp"
            className="jarallax-img"
            alt="Solar Energy Company in Jaipur | Voltcore Energy Solutions"
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
                  Leading Solar Energy Solutions Provider in Rajasthan
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
                  About Voltcore Energy - Solar Power Experts in Jaipur
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
                    About Voltcore Solar
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
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="relative">
                  <div className="bg-dark text-light text-center rounded-1 abs w-200px p-4 m-4 bottom-0 z-3 overflow-hidden wow zoomIn">
                    <h2 className="mb-0">325%</h2>
                    <p className="lh-1-5">Average ROI on Solar Investment</p>
                  </div>
                  <div className="rounded-1 w-90 overflow-hidden wow zoomIn">
                    <Image
                      src="/images/misc/4.webp"
                      className="w-100 wow scaleIn"
                      alt="Professional Solar Installation Team in Jaipur"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div
                    className="rounded-1 w-50 abs mb-min-50 end-0 bottom-0 z-2 overflow-hidden shadow-soft wow zoomIn"
                    data-wow-delay=".2s"
                  >
                    <Image
                      src="/images/misc/2.webp"
                      className="w-100 wow scaleIn"
                      data-wow-delay=".2s"
                      alt="High-Efficiency Solar Panel Installation"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="subtitle s2 mb-3 wow fadeInUp"
                  data-wow-delay=".0s"
                >
                  About Voltcore Energy
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Trusted Solar Energy Solutions for Homes & Businesses in
                  Rajasthan
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  At Voltcore Energy, we are passionate about harnessing the
                  abundant solar energy potential of Rajasthan to create a
                  cleaner, more sustainable future. As a leading solar energy
                  company in Jaipur, we&#39;ve been committed to making solar
                  power accessible, affordable, and efficient for homeowners and
                  businesses across the region since our founding.
                </p>

                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Our team of certified solar experts specializes in designing
                  and installing high-efficiency solar systems tailored to each
                  customer&#39;s unique energy needs. We help residential and
                  commercial clients in Jaipur, Udaipur, Jodhpur, and across
                  Rajasthan significantly reduce electricity bills while
                  lowering their carbon footprint. With over 5 years of industry
                  experience, we&#39;ve successfully installed solar systems for
                  more than 500 satisfied customers.
                </p>

                <p className="wow fadeInUp" data-wow-delay=".5s">
                  We believe that switching to solar shouldn&#39;t be
                  complicated. That&#39;s why we offer comprehensive end-to-end
                  solar solutions, from initial consultation and energy audit to
                  system design, financing options, professional installation,
                  and ongoing maintenance support. With a focus on quality,
                  transparency, and customer satisfaction, Voltcore Energy is
                  more than just a solar provider – we&#39;re your long-term
                  energy partner, dedicated to powering your world with
                  confidence and care.
                </p>
              </div>
            </div>
          </div>

          <div className="spacer-double"></div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        <section className="relative jarallax overflow-hidden">
          {/* <Image
            src="/images/background/gradient-2.webp"
            className="jarallax-img"
            alt="Solar energy gradient background"
            width={1920}
            height={1080}
          /> */}
          <div className="container">
            <div className="row g-4 gx-5">
              <div className="col-lg-6">
                <h4 className="mb-4 wow fadeInRight">Our Vision</h4>
                <p className="fs-24 fw-600 lh-1-4 wow fadeInUp">
                  To empower communities, homes, and businesses across Rajasthan
                  by delivering clean, affordable, and reliable solar energy
                  solutions that reduce environmental impact, promote energy
                  independence, and enhance long-term economic resilience. We
                  envision a world where every individual and business in our
                  region has access to sustainable power, enabling a healthier
                  planet and a brighter future for generations to come.
                </p>
              </div>

              <div className="col-lg-6">
                <h4 className="mb-4 wow fadeInRight">Our Mission</h4>
                <ol className="ol-style-1">
                  <li className="wow fadeInUp" data-wow-delay=".2s">
                    <span className="fw-bold text-dark">
                      Clean Energy Access:
                    </span>{" "}
                    We aim to make solar power accessible and affordable for all
                    residents and businesses in Rajasthan, reducing dependence
                    on fossil fuels and promoting energy independence through
                    innovative financing options and customized solar solutions.
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".4s">
                    <span className="fw-bold text-dark">
                      Sustainability Leadership:
                    </span>{" "}
                    Our focus is on driving environmental sustainability through
                    cutting-edge solar technologies that significantly reduce
                    carbon footprints and promote green living practices across
                    residential and commercial sectors in Rajasthan.
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".6s">
                    <span className="fw-bold text-dark">
                      Excellence & Reliability:
                    </span>{" "}
                    We are committed to delivering top-quality Tier-1 solar
                    systems backed by exceptional customer service, ensuring
                    long-term performance, maximum energy production, and
                    complete customer satisfaction throughout the lifecycle of
                    every installation.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* <Image
            src="/images/misc/flowers-crop-4.webp"
            className="w-20 absolute start-0 bottom-0 sw-anim"
            alt="Decorative flowers"
            width={200}
            height={150}
          /> */}
        </section>

        <section className="bg-dark text-light pt-60 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="relative">
                  <div className="row g-4 grid-divider sm-hide">
                    <div className="col-lg-4 col-md-6 mb-sm-30">
                      <div className="d-flex justify-content-center">
                        <i className="fs-60 id-color icon_phone"></i>
                        <div className="ms-3">
                          <h4 className="mb-0">Need Our Solar Services?</h4>
                          <p>Call: +91 9024537068</p>
                          <p>Call:+91 9664214831</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-sm-30">
                      <div className="d-flex justify-content-center">
                        <i className="fs-60 id-color icon_clock"></i>
                        <div className="ms-3">
                          <h4 className="mb-0">Work Hours</h4>
                          <p>Mon to Sat 08:00 - 17:00</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-sm-30">
                      <div className="d-flex justify-content-center">
                        <i className="fs-60 id-color icon_mail"></i>
                        <div className="ms-3">
                          <h4 className="mb-0">Email Us</h4>
                          <p>Voltcoreenergypvtltd@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
