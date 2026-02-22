export const metadata = {
  title: "Professional Web Development Services",
  description:
    "Core360IT delivers professional web development services including corporate websites, SEO-optimized architecture, secure development, and scalable digital solutions for global businesses.",
  keywords: [
    "Web Development Services",
    "Business Website Development",
    "Corporate Website Design",
    "SEO Optimized Websites",
    "Professional Web Developers",
  ],
};

export default function WebDevelopmentPage() {
  return (
    <div className="container py-5" style={{ marginTop: "120px" }}>
      
      {/* HERO */}
      <div className="mb-5">
        <h1 className="fw-bold display-5 mb-3">
          Professional Web Development Services
        </h1>
        <p className="lead">
          Build a powerful digital presence with secure, scalable,
          and performance-optimized websites designed for global businesses.
        </p>
      </div>

      {/* SERVICES */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <h4 className="fw-bold">Corporate & Business Websites</h4>
          <p>
            Professionally designed websites tailored to represent
            your brand and convert visitors into clients.
          </p>
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">SEO-Optimized Architecture</h4>
          <p>
            Built with clean code and search engine best practices
            to improve visibility and ranking.
          </p>
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">Secure Development</h4>
          <p>
            Security-first development approach protects your
            website against vulnerabilities and attacks.
          </p>
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">Scalable Digital Solutions</h4>
          <p>
            Future-ready websites that grow with your business
            and integrate with modern cloud infrastructure.
          </p>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-5">
        <h2 className="fw-bold mb-4">Frequently Asked Questions</h2>

        <div className="mb-3">
          <h5 className="fw-bold">Why is professional web development important?</h5>
          <p>
            A professionally developed website improves credibility,
            enhances user experience, and increases business conversions.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">How long does it take to build a website?</h5>
          <p>
            Project timelines vary depending on complexity, but most
            business websites are completed within several weeks.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">Are your websites SEO optimized?</h5>
          <p>
            Yes. We follow search engine optimization best practices
            to ensure fast loading speeds and proper structure.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">Do you provide global web development services?</h5>
          <p>
            Core360IT provides professional website development
            services to clients worldwide.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-5">
        <h3 className="fw-bold mb-3">
          Ready to Build Your Digital Presence?
        </h3>
        <p className="mb-4">
          Partner with Core360IT to develop a secure,
          modern, and growth-ready website.
        </p>
        <a href="/#contact" className="btn btn-primary btn-lg">
          Start Your Web Project
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
                name: "Why is professional web development important?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Professional web development improves credibility, enhances user experience, and increases conversions.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to build a website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Website timelines depend on complexity but are typically completed within several weeks.",
                },
              },
              {
                "@type": "Question",
                name: "Are your websites SEO optimized?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Our websites follow SEO best practices including optimized structure and performance.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide global web development services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Core360IT provides professional web development services worldwide.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}