export const metadata = {
  title: "Advanced Cybersecurity Services",
  description:
    "Core360IT provides advanced cybersecurity services including threat detection, endpoint protection, network security, and ransomware prevention for global businesses.",
  keywords: [
    "Cybersecurity Services",
    "Business Cybersecurity",
    "Ransomware Protection",
    "Endpoint Security",
    "Network Security Solutions",
    "Cyber Threat Protection",
  ],
};

export default function CybersecurityPage() {
  return (
    <div className="container py-5" style={{ marginTop: "120px" }}>
      
      {/* HERO */}
      <div className="mb-5">
        <h1 className="fw-bold display-5 mb-3">
          Advanced Cybersecurity Solutions
        </h1>
        <p className="lead">
          Protect your business from evolving cyber threats with enterprise-grade
          security solutions, proactive monitoring, and rapid incident response.
        </p>
      </div>

      {/* SERVICES */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <h4 className="fw-bold">Threat Detection & Monitoring</h4>
          <p>
            Continuous monitoring and advanced analytics identify suspicious
            activities before they escalate into major security incidents.
          </p>
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">Endpoint Protection</h4>
          <p>
            Secure laptops, servers, and mobile devices with next-generation
            antivirus and behavioral threat detection.
          </p>
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">Network Security</h4>
          <p>
            Firewalls, intrusion detection systems, and secure configurations
            safeguard your internal and cloud networks.
          </p>
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">Ransomware Prevention</h4>
          <p>
            Layered protection strategies prevent ransomware attacks and ensure
            rapid recovery through secure backup solutions.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <section className="mb-5">
        <h2 className="fw-bold mb-4">Frequently Asked Questions</h2>

        <div className="mb-3">
          <h5 className="fw-bold">Why is cybersecurity important for businesses?</h5>
          <p>
            Cybersecurity protects sensitive data, prevents financial loss,
            and ensures business continuity in an increasingly digital world.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">How does ransomware affect companies?</h5>
          <p>
            Ransomware encrypts critical data, disrupts operations, and can
            cause significant financial and reputational damage.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">What is endpoint protection?</h5>
          <p>
            Endpoint protection secures devices such as laptops and servers
            against malware, phishing, and advanced persistent threats.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">Do you provide global cybersecurity support?</h5>
          <p>
            Yes. Core360IT delivers remote cybersecurity services and
            monitoring solutions worldwide.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-5">
        <h3 className="fw-bold mb-3">
          Strengthen Your Cyber Defense Today
        </h3>
        <p className="mb-4">
          Secure your infrastructure with enterprise-level cybersecurity
          solutions from Core360IT.
        </p>
        <a href="/#contact" className="btn btn-primary btn-lg">
          Request Security Assessment
        </a>
      </div>

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why is cybersecurity important for businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Cybersecurity protects sensitive data, prevents financial loss, and ensures business continuity.",
                },
              },
              {
                "@type": "Question",
                name: "How does ransomware affect companies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Ransomware encrypts critical data, disrupts operations, and can cause significant financial damage.",
                },
              },
              {
                "@type": "Question",
                name: "What is endpoint protection?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Endpoint protection secures laptops, servers, and devices against malware and cyber threats.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide global cybersecurity support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Core360IT delivers remote cybersecurity services and monitoring solutions globally.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
