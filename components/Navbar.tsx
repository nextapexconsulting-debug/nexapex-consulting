"use client";

import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(20px)",
        background: "rgba(255,255,255,.85)",
        borderBottom: "1px solid rgba(0,0,0,.05)",
      }}
    >
      <div
        className="container"
        style={{
          height: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />

        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
		<Link href="/training">Training</Link>
		<Link href="/blog">Insights & Articles</Link>
		<Link href="/youtube">Youtube</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
	  

          <a
            href="/contact"
            style={{
              background:
                "linear-gradient(135deg,#FF6A00,#FFB066)",
              color: "white",
              padding: "14px 22px",
              borderRadius: "14px",
              fontWeight: 700,
              boxShadow:
                "0 10px 30px rgba(255,106,0,.25)",
            }}
          >
            Schedule Consultation
          </a>
        </nav>

        <div className="mobile-nav">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}