"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        background: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        height: "80px",
      }}
    >
      <div className="container">

        {/* Brand */}
        <Link
          className="navbar-brand d-flex align-items-center gap-3"
          href="/"
        >
          <Image
            src="/images/core360itlogotransperancev2.webp"
            alt="Core360IT"
            width={44}
            height={44}
            priority
            style={{
              objectFit: "contain",
              filter: "drop-shadow(0 0 6px rgba(0,150,255,0.5))",
            }}
          />

          <span
            style={{
              fontWeight: "700",
              fontSize: "1.4rem",
              letterSpacing: "0.5px",
            }}
          >
            Core360IT
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </a>

              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item" href="/managed-it-services">
                    Managed IT Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/cybersecurity">
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/cloud-microsoft-365">
                    Cloud & Microsoft 365
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/web-development">
                    Web Development
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/#contact">Contact</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}
