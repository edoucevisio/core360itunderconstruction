"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ================= HERO CAROUSEL ================= */}
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active position-relative">
            <img
              src="/images/slide1.webp"
              className="d-block w-100"
              alt="Managed IT"
              style={{ height: "100vh", objectFit: "cover" }}
            />

            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.2))",
              }}
            ></div>

            <div className="carousel-caption text-start">
              <h1 className="display-4 fw-bold">
                Managed IT Services
              </h1>
              <p className="lead">
                Proactive monitoring and full infrastructure management.
              </p>
              <a href="#contact" className="btn btn-primary btn-lg mt-3 px-4">
                Get Started
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item position-relative">
            <img
              src="/images/slide2.webp"
              className="d-block w-100"
              alt="Cybersecurity"
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.2))",
              }}
            ></div>
            <div className="carousel-caption text-start">
              <h1 className="display-4 fw-bold">
                Advanced Cybersecurity
              </h1>
              <p className="lead">
                Protect your business from modern cyber threats.
              </p>
              <a href="#services" className="btn btn-primary btn-lg mt-3 px-4">
                Explore Protection
              </a>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item position-relative">
            <img
              src="/images/slide3.webp"
              className="d-block w-100"
              alt="Cloud"
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.2))",
              }}
            ></div>
            <div className="carousel-caption text-start">
              <h1 className="display-4 fw-bold">
                Cloud & Microsoft 365
              </h1>
              <p className="lead">
                Secure cloud migration and productivity solutions.
              </p>
              <a href="#contact" className="btn btn-primary btn-lg mt-3 px-4">
                Move to Cloud
              </a>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="carousel-item position-relative">
            <img
              src="/images/slide4.webp"
              className="d-block w-100"
              alt="Web Development"
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.2))",
              }}
            ></div>
            <div className="carousel-caption text-start">
              <h1 className="display-4 fw-bold">
                Modern Web Development
