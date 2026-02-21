import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://core360it.com"),

  title: {
    default: "Core360IT | Managed IT Services & Cybersecurity",
    template: "%s | Core360IT",
  },

  description:
    "Core360IT delivers Managed IT Services, Advanced Cybersecurity, Cloud & Microsoft 365 solutions, and Professional Web Development for global businesses.",

  keywords: [
    "Core360IT",
    "Managed IT Services",
    "Cybersecurity Company",
    "Cloud Services",
    "Microsoft 365 Support",
    "Web Development",
    "IT Support",
  ],

  openGraph: {
    title: "Core360IT | IT & Cybersecurity Experts",
    description:
      "Professional Managed IT, Cybersecurity, Cloud & Web Development services for global businesses.",
    url: "https://core360it.com",
    siteName: "Core360IT",
    images: [
      {
        url: "/images/slide1.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Core360IT | IT & Cybersecurity Experts",
    description:
      "Managed IT Services, Cybersecurity, Cloud & Web Development.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        {/* Bootstrap Icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://core360it.com" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Core360IT",
              url: "https://core360it.com",
              logo:
                "https://core360it.com/images/core360itlogotransperancev2.webp",
              description:
                "Core360IT provides Managed IT Services, Advanced Cybersecurity, Cloud & Microsoft 365 solutions, and Web Development services globally.",
              sameAs: [
                "https://www.linkedin.com/company/core360it"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>

      <body style={{ margin: 0, padding: 0 }}>
        {children}

        {/* Bootstrap JS */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        ></script>
      </body>
    </html>
  );
}
