"use client";

import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="mb-3">What Our Clients Say</h2>
            <p className="lead">
              Don&apos;t just take our word for it - hear from our satisfied customers
            </p>
          </div>

          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div className="col-md-4" key={num}>
              <div className="border-gray rounded-1 p-30 h-100">
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <Image
                      className="w-40px circle me-3"
                      alt={[
                        "Ethan Moore",
                        "Amanda Lee",
                        "Michael Chen",
                        "Lisa Nguyen",
                        "David Rodriguez",
                        "Sarah Thompson",
                      ][num - 1]}
                      src={`/images/testimonial/${num}.webp`}
                      width={40}
                      height={40}
                    />
                    <div className="mt-2">
                      <div className="text-dark fw-bold lh-1">
                        {
                          [
                            "Ethan Moore",
                            "Amanda Lee",
                            "Michael Chen",
                            "Lisa Nguyen",
                            "David Rodriguez",
                            "Sarah Thompson",
                          ][num - 1]
                        }
                      </div>
                      <small>
                        {
                          [
                            "8 May 2025",
                            "12 January 2025",
                            "5 February 2025",
                            "23 February 2025",
                            "11 March 2025",
                            "26 March 2025",
                          ][num - 1]
                        }
                      </small>
                    </div>
                  </div>
                  <Image
                    src="/images/misc/google-icon.svg"
                    className="w-30px"
                    alt="Google review icon"
                    width={30}
                    height={30}
                  />
                </div>

                <div className="de-rating-ext mb-2">
                  <span className="d-stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                  <span className="ms-2 text-white">5.0</span>
                </div>

                <p>
                  {
                    [
                      "Professional, efficient, and extremely helpful. They consistently deliver beyond our expectations with every request.",
                      "Fantastic service and reliable support every time. They really take the time to understand our needs and offer effective solutions.",
                      "We&apos;ve relied on their expertise for over a year and they never disappoint. Their team is fast, efficient, and friendly.",
                      "Super friendly team and quick to respond to any issue. They&apos;ve saved us time and stress more times than I can count.",
                      "Dependable and consistent. We always get a clear explanation of the problem and a fast resolution without hidden costs.",
                      "They always go the extra mile. It&apos;s rare to find a company that consistently delivers top-tier customer service like this.",
                    ][num - 1]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
