import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div style={{ marginTop: "90px" }}>

        {/* ================= HERO CAROUSEL ================= */}
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">

            <div className="carousel-item active position-relative">
              <img
                src="/images/slide1.webp"
                className="d-block w-100"
                alt="Managed IT"
                style={{ height: "85vh", objectFit: "cover" }}
              />

              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                }}
              ></div>

              <div className="carousel-caption text-start">
                <h1 className="display-4 fw-bold">
                  Modern IT Solutions
                </h1>
                <p className="lead">
                  Scalable. Secure. Future-ready infrastructure.
                </p>
                <a
                  href="#contact"
                  className="btn btn-primary btn-lg mt-3 px-4"
                >
                  Get Started
                </a>
              </div>
            </div>

            <div className="carousel-item position-relative">
              <img
                src="/images/slide2.webp"
                className="d-block w-100"
                alt="Cybersecurity"
                style={{ height: "85vh", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                }}
              ></div>
            </div>

            <div className="carousel-item position-relative">
              <img
                src="/images/slide3.webp"
                className="d-block w-100"
                alt="Cloud"
                style={{ height: "85vh", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                }}
              ></div>
            </div>

            <div className="carousel-item position-relative">
              <img
                src="/images/slide4.webp"
                className="d-block w-100"
                alt="Web Development"
                style={{ height: "85vh", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                }}
              ></div>
            </div>

          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* ================= SERVICES ================= */}
        <section id="services" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5 fw-bold">
              Our Services
            </h2>

            <div className="row g-4">

              <div className="col-md-3">
                <div className="card h-100 shadow-sm border-0 p-4 text-center">
                  <h5 className="fw-bold mb-3">Managed IT</h5>
                  <p>
                    24/7 monitoring, infrastructure management,
                    and proactive maintenance.
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card h-100 shadow-sm border-0 p-4 text-center">
                  <h5 className="fw-bold mb-3">Cybersecurity</h5>
                  <p>
                    Endpoint protection, firewall management,
                    and advanced threat detection.
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card h-100 shadow-sm border-0 p-4 text-center">
                  <h5 className="fw-bold mb-3">Cloud & Microsoft 365</h5>
                  <p>
                    Secure cloud migration, Microsoft 365 management,
                    and remote workforce enablement.
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card h-100 shadow-sm border-0 p-4 text-center">
                  <h5 className="fw-bold mb-3">Web Development</h5>
                  <p>
                    Modern, secure, and scalable websites
                    built for performance and growth.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-5 text-center bg-dark text-light">
          <div className="container">
            <h2 className="fw-bold">
              Ready to Secure Your Business?
            </h2>
            <p className="lead mt-3">
              Let’s build your technology foundation for growth.
            </p>
            <a
              href="#contact"
              className="btn btn-primary btn-lg mt-3 px-4"
            >
              Schedule Consultation
            </a>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4 fw-bold">
              Contact Us
            </h2>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form>
                  <input
                    className="form-control mb-3"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    required
                  />
                  <textarea
                    className="form-control mb-3"
                    rows="4"
                    placeholder="Message"
                    required
                  ></textarea>
                  <button className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ================= WHATSAPP FLOAT ================= */}
      <a
        href="https://wa.me/23052519002"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
        }}
      >
        <img
          src="/images/callwhatsapp.gif"
          alt="WhatsApp"
          style={{
            width: "60px",
            height: "60px",
            cursor: "pointer",
          }}
        />
      </a>

      <Footer />
    </>
  );
}
