
export const metadata = {
  title: "About Core360IT",
  description:
    "Learn about Core360IT, a global IT services provider specializing in Managed IT, Cybersecurity, Cloud Solutions, and Professional Web Development.",
};

export default function AboutPage() {
  return (
    <div className="container py-5" style={{ marginTop: "120px" }}>

      {/* HERO */}
      <div className="mb-5">
        <h1 className="fw-bold display-5 mb-3">
          About Core360IT
        </h1>
        <p className="lead">
          Core360IT is a global technology services provider delivering
          secure, scalable, and performance-driven IT solutions for modern businesses.
        </p>
      </div>

      {/* WHO WE ARE */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Who We Are</h2>
        <p>
          Core360IT was founded with a mission to provide businesses
          with enterprise-grade IT support, advanced cybersecurity,
          and modern cloud infrastructure without complexity.
        </p>
        <p>
          We combine technical expertise, proactive monitoring,
          and strategic IT consulting to help organizations
          operate securely and efficiently in a digital-first world.
        </p>
      </section>

      {/* OUR MISSION */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Our Mission</h2>
        <p>
          Our mission is to deliver reliable, secure, and scalable
          technology solutions that empower businesses to grow
          confidently and sustainably.
        </p>
      </section>

      {/* EXPERTISE */}
      <section className="mb-5">
        <h2 className="fw-bold mb-4">Our Core Expertise</h2>

        <div className="row g-4">

          <div className="col-md-6">
            <div className="card p-4 shadow-sm h-100">
              <h5 className="fw-bold">Managed IT Services</h5>
              <p>
                Proactive infrastructure management and continuous monitoring
                to ensure business continuity.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4 shadow-sm h-100">
              <h5 className="fw-bold">Advanced Cybersecurity</h5>
              <p>
                Comprehensive threat protection and risk mitigation
                for modern digital environments.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4 shadow-sm h-100">
              <h5 className="fw-bold">Cloud & Microsoft 365</h5>
              <p>
                Secure cloud migration and business productivity solutions.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4 shadow-sm h-100">
              <h5 className="fw-bold">Web Development</h5>
              <p>
                Modern, secure, and SEO-optimized web platforms
                built for growth.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Why Choose Core360IT</h2>
        <p>
          We prioritize security, performance, and long-term scalability.
          Our structured service approach ensures transparency,
          measurable results, and continuous improvement.
        </p>
        <p>
          Businesses worldwide trust Core360IT to manage and secure
          their critical IT infrastructure.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center mt-5">
        <h3 className="fw-bold mb-3">
          Partner with Core360IT
        </h3>
        <p className="mb-4">
          Let us help you strengthen your IT foundation
          and accelerate digital transformation.
        </p>
        <a href="/#contact" className="btn btn-primary btn-lg">
          Contact Us
        </a>
      </div>

    </div>
  );
}
