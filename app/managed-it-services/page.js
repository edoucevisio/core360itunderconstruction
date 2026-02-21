export const metadata = {
  title: "Managed IT Services",
  description:
    "Core360IT provides professional Managed IT Services including proactive monitoring, infrastructure management, cybersecurity integration, and global IT support.",
  keywords: [
    "Managed IT Services",
    "IT Support Company",
    "IT Infrastructure Management",
    "Business IT Services",
    "Remote IT Support",
  ],
};

export default function ManagedITServices() {
  return (
    <div className="container py-5" style={{ marginTop: "120px" }}>
      
      {/* HERO */}
      <div className="mb-5">
        <h1 className="fw-bold display-5 mb-3">
          Managed IT Services for Modern Businesses
        </h1>
        <p className="lead">
          Core360IT delivers proactive IT management, 24/7 monitoring,
          cybersecurity integration, and scalable infrastructure solutions
          designed for growing businesses worldwide.
        </p>
      </div>

      {/* SERVICES SECTION */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <h4 className="fw-bold">Proactive Monitoring</h4>
          <p>
            Continuous monitoring ensures system stability, detects
            vulnerabilities early, and prevents downtime before it impacts
            your operations.
          </p>
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">Infrastructure Management</h4>
          <p>
            We manage servers, networks, cloud environments, and endpoint
            devices to maintain optimal performance and security.
          </p>
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">Cybersecurity Integration</h4>
          <p>
            Managed IT combined with advanced cybersecurity protects your
            business from ransomware, phishing, and modern cyber threats.
          </p>
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">Global Remote Support</h4>
          <p>
            Our expert engineers provide fast, secure remote support
            wherever your business operates.
          </p>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-5">
        <h2 className="fw-bold mb-4">Frequently Asked Questions</h2>

        <div className="mb-3">
          <h5 className="fw-bold">What are Managed IT Services?</h5>
          <p>
            Managed IT Services involve outsourcing IT operations to a
            dedicated provider that proactively monitors, maintains, and
            secures your technology infrastructure.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">How can Managed IT reduce downtime?</h5>
          <p>
            Continuous monitoring and preventive maintenance detect issues
            early, reducing unexpected system failures and business disruption.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">Is Managed IT suitable for small businesses?</h5>
          <p>
            Yes. Managed IT provides enterprise-level support and protection
            without the high cost of maintaining an in-house IT department.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">Do you provide global IT support?</h5>
          <p>
            Core360IT offers remote IT management and cybersecurity solutions
            to businesses worldwide.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-5">
        <h3 className="fw-bold mb-3">
          Ready to Strengthen Your IT Infrastructure?
        </h3>
        <p className="mb-4">
          Partner with Core360IT for reliable, secure, and scalable
          Managed IT Services.
        </p>
        <a href="/#contact" className="btn btn-primary btn-lg">
          Request Consultation
        </a>
      </div>

      {/* FAQ STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are Managed IT Services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Managed IT Services involve outsourcing IT operations to a provider that proactively monitors and maintains your technology infrastructure.",
                },
              },
              {
                "@type": "Question",
                name: "How can Managed IT reduce downtime?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Continuous monitoring and preventive maintenance prevent issues before they cause system failures.",
                },
              },
              {
                "@type": "Question",
                name: "Is Managed IT suitable for small businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Managed IT Services provide enterprise-level support and security without the cost of an internal IT team.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide global IT support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Core360IT provides remote IT management and cybersecurity services to global businesses.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
