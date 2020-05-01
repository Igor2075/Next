import React from "react";
import Link from "next/link";

export default function Navbar() {
  const styles = {
    display: "flex",
    background: "steelblue",
    justifyContent: "space-between",
    padding: "1rem",
  };
  return (
    <div style={styles}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Link href="/contact">
        <a>Contact Page</a>
      </Link>
    </div>
  );
}
