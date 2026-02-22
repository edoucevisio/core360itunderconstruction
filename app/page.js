"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setToast({ type: "success", message: "Message sent successfully!" });
        e.target.reset();
      } else {
        setToast({ type: "error", message: "Something went wrong." });
      }
    } catch (err) {
      setToast({ type: "error", message: "Network error. Please try again." });
    }

    setLoading(false);

    setTimeout(() => setToast(null), 3500);
  };

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

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">
            Contact Our IT Experts
          </h2>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  className="form-control mb-3"
                  placeholder="Name"
                  required
                />
                <input
                  name="email"
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  required
                />
                <textarea
                  name="message"
                  className="form-control mb-3"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="btn btn-primary w-100 d-flex justify-content-center align-items-center"
                  disabled={loading}
                  style={{ height: "48px" }}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Toast Notification */}
        {toast && (
          <div className={`custom-toast ${toast.type}`}>
            <div className="toast-content">
              <i
                className={`bi ${
                  toast.type === "success"
                    ? "bi-check-circle-fill"
                    : "bi-x-circle-fill"
                }`}
              ></i>
              <span>{toast.message}</span>
            </div>
          </div>
        )}
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