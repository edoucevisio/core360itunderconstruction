"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
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
              alt="Managed IT Services"
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.4))",
              }}
            />
            <div className="carousel-caption text-start">
              <h1 className="display-4 fw-bold">
                Enterprise IT & Cybersecurity Solutions
              </h1>
              <p className="lead">
                Secure. Scalable. Future-ready infrastructure.
              </p>
              <a href="#contact" className="btn btn-primary btn-lg mt-3 px-4">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= AUTHORITY STRIP ================= */}
      <section className="py-5 bg-dark text-light">
        <div className="container">
          <div className="row text-center g-4">

            {[
              {
                icon: "bi-award",
                title: "10+ Years Experience",
                text: "Delivering enterprise IT solutions worldwide.",
              },
              {
                icon: "bi-patch-check",
                title: "Certified IT Engineers",
                text: "Microsoft & cloud-certified professionals.",
              },
              {
                icon: "bi-graph-up-arrow",
                title: "99.9% Uptime SLA",
                text: "Reliable infrastructure with guaranteed performance.",
              },
              {
                icon: "bi-globe2",
                title: "Global Client Support",
                text: "Trusted by businesses across regions.",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-3">
                <div
                  className="p-4 h-100"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "14px",
                  }}
                >
                  <i className={`bi ${item.icon} fs-1 text-primary mb-3`}></i>
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="small text-secondary">{item.text}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">
            Our Core IT Solutions
          </h2>

          <div className="row g-4">

            {[
              {
                title: "Managed IT Services",
                text: "End-to-end monitoring and proactive infrastructure support.",
                link: "/managed-it-services",
              },
              {
                title: "Cybersecurity Solutions",
                text: "Advanced threat detection and enterprise security protection.",
                link: "/cybersecurity",
              },
              {
                title: "Cloud & Microsoft 365",
                text: "Secure migration, administration and productivity optimization.",
                link: "/cloud-microsoft-365",
              },
              {
                title: "Web Development",
                text: "High-performance websites and scalable digital platforms.",
                link: "/web-development",
              },
            ].map((service, index) => (
              <div key={index} className="col-md-3">
                <div
                  className="card h-100 border-0 p-4 text-center"
                  style={{
                    borderRadius: "16px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
                  }}
                >
                  <h5 className="fw-bold mb-3">{service.title}</h5>
                  <p className="text-muted">{service.text}</p>
                  <a
                    href={service.link}
                    className="btn btn-outline-primary btn-sm mt-3"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-5 bg-dark text-light text-center">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-3">
              <h2 className="fw-bold text-primary">50+</h2>
              <p>Projects Delivered</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-primary">99.9%</h2>
              <p>Infrastructure Uptime</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-primary">24/7</h2>
              <p>Monitoring & Support</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-primary">Global</h2>
              <p>Client Base</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PREMIUM TESTIMONIALS ================= */}
      <section
        className="py-5 text-light"
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-5">
            What Our Clients Say
          </h2>

          <div className="row g-4 justify-content-center">

            <div className="col-md-6">
              <div
                className="p-5 h-100"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "18px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <i className="bi bi-quote fs-1 text-primary mb-3"></i>

                <p className="fs-5 text-light">
                  “Core360IT transformed our IT infrastructure.
                  Professional, responsive and highly reliable.”
                </p>

                <div className="mt-4">
                  <h6 className="fw-bold mb-0">
                    CEO, Financial Firm
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="p-5 h-100"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "18px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <i className="bi bi-quote fs-1 text-primary mb-3"></i>

                <p className="fs-5 text-light">
                  “Outstanding cybersecurity protection and cloud
                  migration support.”
                </p>

                <div className="mt-4">
                  <h6 className="fw-bold mb-0">
                    Operations Director
                  </h6>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">
            Contact Our IT Experts
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <input className="form-control mb-3" placeholder="Name" required />
                <input type="email" className="form-control mb-3" placeholder="Email" required />
                <textarea className="form-control mb-3" rows="4" placeholder="Message" required></textarea>
                <button className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHATSAPP ================= */}
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
        <div
          style={{
            width: "65px",
            height: "65px",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          }}
        >
          <img
            src="/images/callwhatsapp.gif"
            alt="WhatsApp"
            style={{ width: "38px", height: "38px" }}
          />
        </div>
      </a>

      <Footer />
    </>
  );
}
