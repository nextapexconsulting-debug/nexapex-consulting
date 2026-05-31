"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
  onClick={() => setOpen(!open)}
  style={{
    background: "#FFF4EC",
    border: "1px solid #FFE0C2",
    borderRadius: "12px",
    width: "46px",
    height: "46px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}
>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "90px",
            left: 0,
            right: 0,
            background: "white",
            padding: "30px",
            borderBottom: "1px solid #eee",
            boxShadow: "0 20px 40px rgba(0,0,0,.08)"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}