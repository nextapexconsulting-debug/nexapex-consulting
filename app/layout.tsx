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
  title: "NexApex Consulting",
  description:
    "Enterprise application development, automation and digital transformation consulting. ORACLE APEX, Oracle Application Express. SQL/PLSQ"
};