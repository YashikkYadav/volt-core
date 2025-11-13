"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsappIcon from "@/components/WhatsappIcon";
import Image from "next/image";

const Services = () => {
  return (
    <div className="no-bottom no-top" id="content">
      <Header />

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
          src="/images/background/w2.webp"
          className="jarallax-img"
          alt="Solar Energy Services in Jaipur | Voltcore Energy"
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
                Premium Solar Solutions for Residential & Commercial Properties
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
                Professional Solar Energy Services
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
                  Solar Energy Services
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

      <section className="pb-60">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-12 text-center">
              <h2>Our Comprehensive Solar Energy Services</h2>
              <p className="lead">
                End-to-end solar solutions for homes and businesses in Jaipur
                and across Rajasthan
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <div className="d-block hover">
                    <div className="relative overflow-hidden rounded-1">
                      <Image
                        src="/images/services/1.webp"
                        className="w-100 hover-scale-1-2"
                        alt="Rooftop and ground mounted solar projects"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="p-30 relative bg-white rounded-1 mx-4 mt-min-100">
                    <div className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px">
                      <div>
                        <Image
                          src="/images/misc/up-right-arrow.webp"
                          className="w-60px p-20"
                          alt="View rooftop and ground mounted solar projects"
                          width={60}
                          height={60}
                        />
                      </div>
                    </div>
                    <h4>Rooftop & Ground Mounted</h4>
                    <p className="mb-0">
                      Expert installation of both rooftop and ground-mounted
                      solar systems for residential and commercial properties
                      with optimal positioning for maximum energy generation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <div className="d-block hover">
                    <div className="relative overflow-hidden rounded-1">
                      <Image
                        src="/images/services/2.webp"
                        className="w-100 hover-scale-1-2"
                        alt="Robotic solar panel cleaning system"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="p-30 relative bg-white rounded-1 mx-4 mt-min-100">
                    <div className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px">
                      <div>
                        <Image
                          src="/images/misc/up-right-arrow.webp"
                          className="w-60px p-20"
                          alt="View robotic cleaning system details"
                          width={60}
                          height={60}
                        />
                      </div>
                    </div>
                    <h4>Robotic Cleaning System</h4>
                    <p className="mb-0">
                      Advanced robotic cleaning solutions for large-scale solar
                      installations to maintain peak efficiency with minimal
                      manual intervention and reduced maintenance costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <div className="d-block hover">
                    <div className="relative overflow-hidden rounded-1">
                      <Image
                        src="/images/services/3.webp"
                        className="w-100 hover-scale-1-2"
                        alt="Solar panel operation and maintenance services"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="p-30 relative bg-white rounded-1 mx-4 mt-min-100">
                    <div className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px">
                      <div>
                        <Image
                          src="/images/misc/up-right-arrow.webp"
                          className="w-60px p-20"
                          alt="View operation and maintenance service details"
                          width={60}
                          height={60}
                        />
                      </div>
                    </div>
                    <h4>Operation & Maintenance</h4>
                    <p className="mb-0">
                      Comprehensive O&M services including performance
                      monitoring, preventive maintenance, and 24/7 support to
                      ensure your solar system operates at peak efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                        <p>Call: +91 9664214831</p>
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
      <Footer />
    </div>
  );
};

export default Services;
