"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* PAGE ENTRANCE ANIMATION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* HERO */}
        <section
          className="d-flex align-items-center text-light"
          style={{
            height: "100vh",
            background:
              "linear-gradient(135deg, #0f172a, #1e293b)",
          }}
        >
          <div className="container text-center">
            <h1 className="display-4 fw-bold">
              Enterprise IT & Cybersecurity Solutions
            </h1>
            <p className="lead mt-3">
              Secure. Scalable. Future-ready infrastructure.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg mt-4">
              Schedule Consultation
            </a>
          </div>
        </section>

        {/* AUTHORITY */}
        <section className="py-5 bg-dark text-light">
          <div className="container">
            <div className="row text-center g-4">

              {[
                { icon: "bi-award", title: "15+ Years Experience" },
                { icon: "bi-patch-check", title: "Certified Engineers" },
                { icon: "bi-graph-up-arrow", title: "99.9% SLA" },
                { icon: "bi-globe2", title: "Global Clients" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="col-md-3"
                >
                  <div
                    className="p-4 h-100"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "14px",
                    }}
                  >
                    <i className={`bi ${item.icon} fs-1 text-primary mb-3`}></i>
                    <h6 className="fw-bold">{item.title}</h6>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="fw-bold mb-5">Our Core IT Solutions</h2>
            <div className="row g-4">

              {[
                "Managed IT Services",
                "Cybersecurity",
                "Cloud & Microsoft 365",
                "Web Development",
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="col-md-3"
                  whileHover={{ y: -8 }}
                >
                  <div
                    className="card border-0 p-4 h-100"
                    style={{
                      borderRadius: "16px",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    }}
                  >
                    <h5 className="fw-bold">{service}</h5>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* ANIMATED COUNTERS */}
        <section className="py-5 bg-dark text-light text-center">
          <div className="container">
            <div className="row g-4">

              {[
                { value: "200+", label: "Projects Delivered" },
                { value: "99.9%", label: "Infrastructure Uptime" },
                { value: "24/7", label: "Monitoring" },
                { value: "Global", label: "Client Base" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="col-md-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="fw-bold text-primary">
                    {stat.value}
                  </h2>
                  <p>{stat.label}</p>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="fw-bold mb-4">
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

      </motion.div>

      {/* WHATSAPP */}
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