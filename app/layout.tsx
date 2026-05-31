import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}

 export const metadata = {
  title: {
    default: "NexApex Consulting",
    template: "%s | NexApex Consulting",
  },

  description:
    "NexApex Consulting provides Oracle APEX development, PL/SQL programming, SQL optimization, Oracle Database solutions, REST API integration, ORDS implementation, workflow automation and enterprise application consulting.",

  keywords: [
    "Oracle APEX",
    "PLSQL",
    "PL/SQL",
    "Oracle Database",
    "SQL",
    "ORDS",
    "REST API",
	"AI",
 	"Generative AI",
"tutorial",
"SSO",
"cloud",
    "Enterprise Applications",
    "Workflow Automation",
    "Digital Transformation",
    "Dashboard Development",
    "Oracle Consulting"
  ]
};