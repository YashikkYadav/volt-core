'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import LogoMarquee from '../components/LogoMarquee';
import Gallery from '../components/Gallery';
// import { Calculator } from '@/components/Calculator';

export default function Home() {
  useEffect(() => {
    // Initialize any required scripts after component mounts
    const initScripts = () => {
      // This would normally initialize swiper and other plugins
      // For now, we'll just ensure the page loads properly
      console.log('Page scripts initialized');
    };
    
    initScripts();
  }, []);

  return (
    <div id="wrapper">
      <a href="#" id="back-to-top"></a>

    

      {/* header begin */}
      <Header />
      {/* header end */}

      {/* content begin */}
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        
        <Hero />
        {/* <Calculator/> */}
         {/* Logo Marquee Section */}
        <LogoMarquee />

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <h5 className="wow fadeInRight">About VOltcore</h5>
              </div>
              <div className="col-lg-9">
                <h3 className="wow fadeInRight" data-wow-delay=".2s">
                  Switch to Solar Energy and Save Money While Saving the Planet
                  <span className="op-3">
                  Go Green, Reduce Your Electricity Bills, and Achieve Energy Independence with Our Expert Solar Solutions
                  </span>
                </h3>

                <div className="spacer-single"></div>

                <div className="row g-4 gx-5">
                  <div className="col-md-3 col-sm-6">
                    <div
                      className="de_count lh-1-6 wow fadeInRight"
                      data-wow-delay=".2s"
                    >
                      <h3 className="fs-40 mb-0">
                        <span className="timer" data-to="200" data-speed="3000">
                          0
                        </span>
                        +
                      </h3>
                      Happy Clients
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div
                      className="de_count lh-1-6 wow fadeInRight"
                      data-wow-delay=".4s"
                    >
                      <h3 className="fs-40 mb-0">
                        <span className="timer" data-to="5" data-speed="3000">
                          0
                        </span>
                        +
                      </h3>
                     Years of Experience
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div
                      className="de_count lh-1-6 wow fadeInRight"
                      data-wow-delay=".6s"
                    >
                      <h3 className="fs-40 mb-0">
                        <span className="timer" data-to="3000" data-speed="3000">
                          0
                        </span>
                        +KW
                      </h3>
                      Solar Installed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-top">
          <div className="container">
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="relative">
                  <div
                    className="relative overflow-hidden z-2 mb-5 rounded-1  w-60 soft-shadow wow zoomIn"
                  >
                    <Image
                      src="/images/misc/p1.webp"
                      className="w-100 wow scaleIn"
                      data-wow-duration="1s"
                      alt="Professional solar panel installation services"
                      width={600}
                      height={400}
                    />
                  </div>

                  <div
                    className="abs overflow-hidden top-0 end-0 mt-5 rounded-1 mb-4 w-60 wow zoomIn"
                    data-wow-delay=".2s"
                  >
                    <Image
                      src="/images/misc/p2.webp"
                      className="w-100 wow scaleIn"
                      data-wow-duration="1s"
                      alt="Residential and commercial solar energy systems"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className="subtitle id-color wow fadeInUp"
                  data-wow-delay=".0s"
                >
                  Solar Power for a Sustainable Future
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Clean, Reliable Solar Energy Made
                  <span className="op-3">Simple and Affordable</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Discover the power of the sun with our comprehensive solar energy solutions. Whether you&#39;re looking to reduce your electricity bills, increase your property value, or lower your carbon footprint, our expert team makes it easy to transition to clean, renewable solar power.
                </p>

                <div className="border-bottom mb-4"></div>

                <ul
                  className="ul-check fw-600 mb-4 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <li>Save up to 70% on your electricity bills with solar power</li>
                  <li>Reduce your carbon footprint and protect the environment</li>
                  <li>Increase your home&#39;s resale value with solar installation</li>
                  <li>Achieve energy independence from rising utility costs</li>
                </ul>

                <div
                  className="btn-main fx-slide wow fadeInUp"
                  data-wow-delay=".9s"
                  
                >
                  <span>Get a Free Quote</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      

        <section className="bg-light">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle wow fadeInUp mb-3">
                  Comprehensive Solar Energy Services
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Reliable, Renewable, and
                  <span className="op-3">Cost-Effective Solar Solutions</span>
                </h2>
                <p className="lead mb-0 wow fadeInUp">
                  Switch to solar and enjoy significantly lower electricity bills, clean energy, and expert service designed for homes, businesses, and industrial applications across India.
                </p>
                <div className="spacer-single"></div>
                <div className="spacer-half"></div>
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
                    <div
                      className="p-30 relative bg-white rounded-1 mx-4 mt-min-100"
                    >
                      <div
                        className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px"
                      >
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
                        Expert installation of both rooftop and ground-mounted solar systems for residential and commercial properties with optimal positioning for maximum energy generation.
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
                    <div
                      className="p-30 relative bg-white rounded-1 mx-4 mt-min-100"
                    >
                      <div
                        className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px"
                      >
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
                        Advanced robotic cleaning solutions for large-scale solar installations to maintain peak efficiency with minimal manual intervention and reduced maintenance costs.
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
                          src="/images/misc/s2.webp"
                          className="w-100 hover-scale-1-2"
                          alt="Solar panel operation and maintenance services"
                          width={400}
                          height={300}
                        />
                      </div>
                    </div>
                    <div
                      className="p-30 relative bg-white rounded-1 mx-4 mt-min-100"
                    >
                      <div
                        className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px"
                      >
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
                        Comprehensive O&M services including performance monitoring, preventive maintenance, and 24/7 support to ensure your solar system operates at peak efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="btn-main fx-slide">
                  <span>View All Services</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-dark text-light">
          <div className="container relative z-1">
            <div className="row g-4 gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="relative">
                  <div
                    className="bg-blur text-light text-center rounded-1 abs w-200px p-4 m-4 bottom-0 z-3 overflow-hidden wow zoomIn"
                  >
                    <h2 className="mb-0">325%</h2>
                    <p className="lh-1-5">Average ROI on Solar Investment</p>
                  </div>
                  <div className="rounded-1 w-90 overflow-hidden wow zoomIn">
                    <Image
                      src="/images/misc/s4.webp"
                      className="w-100 wow scaleIn"
                      alt="High efficiency solar panels for maximum energy production"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div
                    className="rounded-1 w-50 abs mb-min-50 end-0 bottom-0 z-2 overflow-hidden shadow-soft wow zoomIn"
                    data-wow-delay=".2s"
                  >
                    <Image
                      src="/images/misc/s1.webp"
                      className="w-100 wow scaleIn"
                      data-wow-delay=".2s"
                      alt="Professional solar installation team in Rajasthan"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="subtitle id-color wow fadeInUp">
                  Trusted & Affordable Solar Solutions
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Why Choose VOltcore for Your Solar Energy Needs?
                </h2>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="h-100 rounded-1">
                      <div className="relative wow fadeInUp" data-wow-delay=".0s">
                        <h4>Certified Professionals</h4>
                        <p className="mb-0">
                          Licensed solar technicians with 5+ years of experience in residential and commercial solar installations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="h-100 rounded-1">
                      <div className="relative wow fadeInUp" data-wow-delay=".2s">
                        <h4>Customized Solar Solutions</h4>
                        <p className="mb-0">
                          Tailored solar systems designed to maximize your energy savings based on your property and usage patterns.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="h-100 rounded-1">
                      <div className="relative wow fadeInUp" data-wow-delay=".4s">
                        <h4>Affordable Financing Options</h4>
                        <p className="mb-0">
                          Flexible payment plans and guidance on government incentives to make solar energy accessible to everyone.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="h-100 rounded-1">
                      <div className="relative wow fadeInUp" data-wow-delay=".6s">
                        <h4>Comprehensive Support</h4>
                        <p className="mb-0">
                          End-to-end service from initial consultation to installation, maintenance, and system monitoring.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="h-100 rounded-1">
                      <div className="relative wow fadeInUp" data-wow-delay=".8s">
                        <h4>Premium Quality Equipment</h4>
                        <p className="mb-0">
                          High-efficiency solar panels and inverters from trusted manufacturers with industry-leading warranties.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="h-100 rounded-1">
                      <div className="relative wow fadeInUp" data-wow-delay="1s">
                        <h4>Timely Installation</h4>
                        <p className="mb-0">
                          Efficient project completion within 30-45 days without compromising on safety standards or quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer-double"></div>
        </section>

        <section>
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle wow fadeInUp mb-3">Our Solar Projects</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Powering a Brighter Future
                  <span className="op-3">with Clean Solar Energy</span>
                </h2>
                <p className="lead mb-0 wow fadeInUp">
                  Explore our latest solar installations—from residential rooftops to commercial facilities—each designed for maximum efficiency, sustainability, and long-term energy savings.
                </p>
                <div className="spacer-single"></div>
                <div className="spacer-half"></div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-12 wow fadeInUp">
                <div className="overflow-hidden rounded-1">
                  <div className="relative wow fadeIn">
                    <div
                      className="owl-custom-nav menu-float"
                      data-target="#project-single-carousel"
                    >
                      <a className="btn-next"></a>
                      <a className="btn-prev"></a>

                      <div
                        id="project-single-carousel"
                        className="owl-3-cols owl-carousel owl-theme"
                      >
                        <div className="item">
                         
                            <div
                              className="hover rounded-1 relative overflow-hidden text-light"
                            >
                              <div className="abs p-40 top-0 z-3">
                                <Image
                                  src="/images/misc/up-right-arrow-white.webp"
                                  className="w-10 mb-3 wow scaleIn"
                                  alt="View residential solar project details"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="abs p-40 bottom-0 z-3">
                                <h3>BrightHome Energy</h3>
                                <p className="mb-0 hover-mh-60">
                                  Residential Solar Installation
                                </p>
                              </div>
                              <div
                                className="hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"
                              ></div>
                              <Image
                                src="/images/projects/1.webp"
                                className="w-100 hover-scale-1-2"
                                alt="Residential rooftop solar panel installation in Jaipur"
                                width={400}
                                height={300}
                              />
                              <div className="gradient-edge-bottom h-50"></div>
                            </div>
                         
                        </div>

                        <div className="item">
                          <div>
                            <div
                              className="hover rounded-1 relative overflow-hidden text-light"
                            >
                              <div className="abs p-40 top-0 z-3">
                                <Image
                                  src="/images/misc/up-right-arrow-white.webp"
                                  className="w-10 mb-3 wow scaleIn"
                                  alt="View commercial solar project details"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="abs p-40 bottom-0 z-3">
                                <h3>GreenMart Supermarket</h3>
                                <p className="mb-0 hover-mh-60">
                                  Commercial Solar Panel Upgrade
                                </p>
                              </div>
                              <div
                                className="hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"
                              ></div>
                              <Image
                                src="/images/projects/2.webp"
                                className="w-100 hover-scale-1-2"
                                alt="Commercial solar panel system for supermarket in Rajasthan"
                                width={400}
                                height={300}
                              />
                              <div className="gradient-edge-bottom h-50"></div>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <div>
                            <div
                              className="hover rounded-1 relative overflow-hidden text-light"
                            >
                              <div className="abs p-40 top-0 z-3">
                                <Image
                                  src="/images/misc/up-right-arrow-white.webp"
                                  className="w-10 mb-3 wow scaleIn"
                                  alt="View educational institution solar project"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="abs p-40 bottom-0 z-3">
                                <h3>EcoSchool Initiative</h3>
                                <p className="mb-0 hover-mh-60">
                                  Custom Solar System Design
                                </p>
                              </div>
                              <div
                                className="hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"
                              ></div>
                              <Image
                                src="/images/projects/3.webp"
                                className="w-100 hover-scale-1-2"
                                alt="Solar energy system for educational institution in India"
                                width={400}
                                height={300}
                              />
                              <div className="gradient-edge-bottom h-50"></div>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <div >
                            <div
                              className="hover rounded-1 relative overflow-hidden text-light"
                            >
                              <div className="abs p-40 top-0 z-3">
                                <Image
                                  src="/images/misc/up-right-arrow-white.webp"
                                  className="w-10 mb-3 wow scaleIn"
                                  alt="View solar monitoring system project"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="abs p-40 bottom-0 z-3">
                                <h3>UrbanSolar 360</h3>
                                <p className="mb-0 hover-mh-60">
                                  Solar System Monitoring & Reporting
                                </p>
                              </div>
                              <div
                                className="hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"
                              ></div>
                              <Image
                                src="/images/projects/4.webp"
                                className="w-100 hover-scale-1-2"
                                alt="Advanced solar monitoring and reporting system for businesses"
                                width={400}
                                height={300}
                              />
                              <div className="gradient-edge-bottom h-50"></div>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <div >
                            <div
                                className="hover rounded-1 relative overflow-hidden text-light"
                            >
                              <div className="abs p-40 top-0 z-3">
                                <Image
                                  src="/images/misc/up-right-arrow-white.webp"
                                  className="w-10 mb-3 wow scaleIn"
                                  alt="View community solar project"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="abs p-40 bottom-0 z-3">
                                <h3>VOltcore Cares</h3>
                                <p className="mb-0 hover-mh-60">
                                  Community Solar Project
                                </p>
                              </div>
                              <div
                                className="hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"
                              ></div>
                              <Image
                                src="/images/projects/5.webp"
                                className="w-100 hover-scale-1-2"
                                alt="Community solar energy initiative for underprivileged areas"
                                width={400}
                                height={300}
                              />
                              <div className="gradient-edge-bottom h-50"></div>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <div >
                            <div
                              className="hover rounded-1 relative overflow-hidden text-light"
                            >
                              <div className="abs p-40 top-0 z-3">
                                <Image
                                  src="/images/misc/up-right-arrow-white.webp"
                                  className="w-10 mb-3 wow scaleIn"
                                  alt="View solar battery storage project"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="abs p-40 bottom-0 z-3">
                                <h3>SunSmart Office</h3>
                                <p className="mb-0 hover-mh-60">
                                  Solar Battery Storage System
                                </p>
                              </div>
                              <div
                                className="hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"
                              ></div>
                              <Image
                                src="/images/projects/6.webp"
                                className="w-100 hover-scale-1-2"
                                alt="Solar battery storage system for office buildings in Rajasthan"
                                width={400}
                                 height={300}
                              />
                              <div className="gradient-edge-bottom h-50"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       
        

  
        {/* Gallery Section */}
        <Gallery />

        {/* faq */}
        <section>
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-5">
                <div
                  className="subtitle id-color wow fadeInUp"
                  data-wow-delay=".0s"
                >
                  Everything You Need to Know About Solar Energy
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Frequently Asked Questions About Solar Power
                </h2>
              </div>

              <div className="col-lg-7">
                <div className="accordion s2 wow fadeInUp">
                  <div className="accordion-section">
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a1"
                    >
                      How does solar energy work?
                    </div>
                    <div className="accordion-section-content" id="accordion-a1">
                      Solar panels absorb sunlight using photovoltaic (PV) cells, which convert solar radiation into direct current (DC) electricity. An inverter then transforms that into alternating current (AC), which powers your home or business. Excess energy can be stored in batteries or fed back into the grid for credits.
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a2"
                    >
                      Will solar panels reduce my energy bills in India?
                    </div>
                    <div className="accordion-section-content" id="accordion-a2">
                      Yes, absolutely. By generating your own electricity, you can significantly reduce or even eliminate your monthly utility bills. Most homeowners save 50-90% on their electricity costs after installing solar panels. In Rajasthan, where we&#39;re based, the abundant sunshine makes solar systems particularly effective.
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a3"
                    >
                      Is my home suitable for solar panels in Rajasthan?
                    </div>
                    <div className="accordion-section-content" id="accordion-a3">
                      Most homes are suitable for solar installations. Ideally, you&#39;ll need a roof with good sun exposure (minimal shade), enough space for the panels, and a structure in good condition. We provide a free site assessment to confirm suitability and design the optimal system for your property.
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a4"
                    >
                      What&#39;s the lifespan and maintenance of a solar system?
                    </div>
                    <div className="accordion-section-content" id="accordion-a4">
                      Solar panels typically last 25-30 years or more with minimal maintenance. Most manufacturers offer 20-25 year performance warranties. Inverters may need replacement after 10-15 years, and batteries (if included) typically last 5-15 years. Regular cleaning and annual inspections ensure optimal performance.
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a5"
                    >
                      Do solar panels work effectively in cloudy or monsoon weather?
                    </div>
                    <div className="accordion-section-content" id="accordion-a5">
                      Yes, solar panels still generate electricity in cloudy conditions—just at a lower output. Efficiency may drop by 10-25% on overcast days, but you&#39;ll still be producing power. Modern panels are designed to work efficiently even in diffused light. During monsoon season, rain actually helps clean the panels, improving performance.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* youtube video  */}
        <section aria-label="section" className="p-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <a
                  className="d-block hover popup-youtube"
                  href="https://www.youtube.com/watch?v=C6rf51uHWJg"
                >
                  <div className="relative overflow-hidden">
                    <div
                      className="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2"
                    >
                      <div className="player circle wow scaleIn"><span></span></div>
                    </div>
                    <div
                      className="absolute w-100 h-100 top-0 bg-dark hover-op-05"
                    ></div>
                    <Image
                      src="/images/background/w1.webp"
                      className="w-100 hover-scale-1-1"
                      alt="Watch our solar energy video"
                      width={1920}
                      height={1080}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* yellow bottom section */}
        <section className="bg-color py-5 pb-4">
          <div className="container relative z-1">
            <div className="row g-4 gx-5 align-items-center">
              <div className="col-lg-12">
                <div className="relative">
                  <div className="row g-4 grid-divider sm-hide">
                    <div
                      className="col-lg-4 col-md-6 mb-sm-30 wow fadeIn fadeInRight"
                      data-wow-delay=".2s"
                    >
                      <div className="d-flex justify-content-center">
                        <i className="fs-60 text-dark icon_phone"></i>
                        <div className="ms-3">
                          <h4 className="mb-0">Talk to Our Solar Experts</h4>
                          <p className="text-dark">Call: +91 9024537068</p>
                          <p className="text-dark">Call: +91 9664214831</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-lg-4 col-md-6 mb-sm-30 wow fadeIn fadeInRight"
                      data-wow-delay=".4s"
                    >
                      <div className="d-flex justify-content-center">
                        <i className="fs-60 text-dark icon_clock"></i>
                        <div className="ms-3">
                          <h4 className="mb-0">Customer Support Hours</h4>
                          <p className="text-dark">Mon to Sat 08:00 - 17:00</p>
                          <p className="text-dark">Emergency Support Available</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-lg-4 col-md-6 mb-sm-30 wow fadeIn fadeInRight"
                      data-wow-delay=".6s"
                    >
                      <div className="d-flex justify-content-center">
                        <i className="fs-60 text-dark icon_mail"></i>
                        <div className="ms-3">
                          <h4 className="mb-0">Get a Free Quote</h4>
                          <p className="text-dark">Voltcoreenergypvtltd@gmail.com</p>
                          <p className="text-dark">Request Callback Service</p>
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
      {/* content end */}

      {/* footer begin */}
      <Footer />
      {/* footer end */}
    </div>
  );
}