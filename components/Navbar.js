"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        background: "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        height: "80px",
      }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-3" href="/">
          <Image
            src="/images/core360itlogotransperancev2.webp"
            alt="Core360IT"
            width={42}
            height={42}
          />
          <span className="fw-bold fs-5">Core360IT</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#services">Services</Link>
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