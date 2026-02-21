export const metadata = {
  title: "Cloud & Microsoft 365 Services",
  description:
    "Core360IT provides Cloud Solutions and Microsoft 365 services including migration, administration, security, and business cloud optimization for global organizations.",
  keywords: [
    "Microsoft 365 Support",
    "Office 365 Management",
    "Cloud Migration Services",
    "Business Cloud Solutions",
    "Microsoft 365 Security",
    "Cloud Infrastructure Services",
  ],
};

export default function CloudMicrosoftPage() {
  return (
    <div className="container py-5" style={{ marginTop: "120px" }}>
      
      {/* HERO */}
      <div className="mb-5">
        <h1 className="fw-bold display-5 mb-3">
          Cloud & Microsoft 365 Solutions
        </h1>
        <p className="lead">
          Empower your business with secure cloud infrastructure,
          seamless Microsoft 365 management, and scalable cloud migration services.
        </p>
      </div>

      {/* SERVICES */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <h4 className="fw-bold">Cloud Migration</h4>
          <p>
            We migrate your business systems, data, and applications
            securely to the cloud with minimal downtime.
          </p>
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">Microsoft 365 Administration</h4>
          <p>
            Professional setup, licensing management, security hardening,
            and ongoing Microsoft 365 support.
          </p>
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">Cloud Security</h4>
          <p>
            Protect cloud environments with advanced identity management,
            access control, and data loss prevention strategies.
          </p>
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">Business Continuity</h4>
          <p>
            Ensure uptime and resilience with cloud backup, disaster recovery,
            and high-availability solutions.
          </p>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-5">
        <h2 className="fw-bold mb-4">Frequently Asked Questions</h2>

        <div className="mb-3">
          <h5 className="fw-bold">What is Microsoft 365 used for?</h5>
          <p>
            Microsoft 365 provides cloud-based productivity tools including
            email, collaboration, document management, and secure communication.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">How long does cloud migration take?</h5>
          <p>
            Migration timelines depend on infrastructure size and complexity,
            but most small-to-medium businesses complete migration within weeks.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">Is cloud computing secure?</h5>
          <p>
            Yes. When properly configured, cloud environments provide advanced
            security features including encryption, multi-factor authentication,
            and compliance controls.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">Do you provide global cloud support?</h5>
          <p>
            Core360IT offers remote cloud management and Microsoft 365 support
            for businesses worldwide.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-5">
        <h3 className="fw-bold mb-3">
          Ready to Move to the Cloud?
        </h3>
        <p className="mb-4">
          Modernize your infrastructure with secure, scalable cloud solutions
          powered by Core360IT.
        </p>
        <a href="/#contact" className="btn btn-primary btn-lg">
          Request Cloud Consultation
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
                name: "What is Microsoft 365 used for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Microsoft 365 provides cloud-based productivity tools including email, collaboration, and document management.",
                },
              },
              {
                "@type": "Question",
                name: "How long does cloud migration take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Migration timelines vary based on infrastructure complexity but are typically completed within weeks for small businesses.",
                },
              },
              {
                "@type": "Question",
                name: "Is cloud computing secure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Cloud environments offer advanced security features such as encryption, MFA, and compliance controls when properly configured.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide global cloud support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Core360IT provides remote cloud management and Microsoft 365 support globally.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
