import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Offset for fixed navbar */}
      <div style={{ marginTop: "90px" }}>

        {/* ===================== */}
        {/* HERO CAROUSEL */}
        {/* ===================== */}
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img
                src="/images/slide1.webp"
                className="d-block w-100"
                alt="Managed IT"
                style={{ height: "75vh", objectFit: "cover" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src="/images/slide2.webp"
                className="d-block w-100"
                alt="Cybersecurity"
                style={{ height: "75vh", objectFit: "cover" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src="/images/slide3.webp"
                className="d-block w-100"
                alt="Cloud & Microsoft"
                style={{ height: "75vh", objectFit: "cover" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src="/images/slide4.webp"
                className="d-block w-100"
                alt="Web Development"
                style={{ height: "75vh", objectFit: "cover" }}
              />
            </div>

          </div>

          {/* Controls */}
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

        {/* ===================== */}
        {/* SERVICES */}
        {/* ===================== */}
        <section id="services" className="py-5">
          <div className="container">
            <h2 className="text-center mb-5 fw-bold">Our Services</h2>

            <div className="row g-4">

              <div className="col-md-3">
                <div className="card h-100 shadow-lg border-0 p-4 text-center">
                  <h5 className="fw-bold mb-3">Managed IT</h5>
                  <p>
                    24/7 monitoring, infrastructure management,
                    and proactive maintenance.
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card h-100 shadow-lg border-0 p-4 text-center">
                  <h5 className="fw-bold mb-3">Cybersecurity</h5>
                  <p>
                    Endpoint protection, firewall management,
                    and advanced threat detection.
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card h-100 shadow-lg border-0 p-4 text-center">
                  <h5 className="fw-bold mb-3">Cloud & Microsoft 365</h5>
                  <p>
                    Secure cloud migration, Microsoft 365 management,
                    and remote workforce enablement.
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card h-100 shadow-lg border-0 p-4 text-center">
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

        {/* ===================== */}
        {/* CALL TO ACTION */}
        {/* ===================== */}
        <section className="bg-primary text-light py-5 text-center">
          <div className="container">
            <h2 className="fw-bold">Ready to Secure Your Business?</h2>
            <p className="lead mt-3">
              Schedule a free consultation with our experts today.
            </p>
            <a href="#contact" className="btn btn-light btn-lg mt-3 px-4">
              Get Started
            </a>
          </div>
        </section>

        {/* ===================== */}
        {/* CONTACT */}
        {/* ===================== */}
        <section id="contact" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form>
                  <input
                    className="form-control mb-3"
                    placeholder="Name"
                  />
                  <input
                    className="form-control mb-3"
                    placeholder="Email"
                  />
                  <textarea
                    className="form-control mb-3"
                    rows="4"
                    placeholder="Message"
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
          {/* WHATSAPP FLOAT BUTTON */}
          {/* ===================== */}
          <a
            href="https://wa.me/+23052519002"
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
