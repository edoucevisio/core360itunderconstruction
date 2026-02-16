import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Add spacing because navbar is fixed */}
      <div style={{ marginTop: "90px" }}>

        {/* HERO SECTION */}
        <section className="bg-dark text-light py-5 text-center">
          <div className="container py-5">
            <h1 className="display-4 fw-bold">
              Managed IT & Cybersecurity Solutions
            </h1>
            <p className="lead mt-3">
              Protect. Optimize. Scale your business with Core360IT.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg mt-4 px-4">
              Schedule Consultation
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="mb-4 fw-bold">About Core360IT</h2>
            <p className="lead">
              Core360IT delivers complete managed IT and cybersecurity
              solutions designed to protect, optimize, and scale your business.
              We act as your dedicated technology partner.
            </p>
          </div>
        </section>

        {/* SERVICES SECTION */}
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

        {/* CALL TO ACTION */}
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

        {/* CONTACT SECTION */}
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

      <Footer />
    </>
  );
}
