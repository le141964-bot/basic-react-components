"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Task Tracker</h2>
      <div>
        <Link href="/">Home</Link>
        <Link href="/tasks">Tasks</Link>
        <Link href="/theme">Theme</Link>
      </div>
    </nav>
  );
}
