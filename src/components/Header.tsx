'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black">
      {/* Main container */}
      <div className="max-w-[1110px] mx-auto px-6">
        <div className="flex items-center justify-between py-6 border-b border-white/20 lg:border-b-0">
          {/* Left: Logo */}
          <Link href="/">
            <Image
              src="/assets/shared/logo.png"
              alt="Audiophile Logo"
              width={143}
              height={25}
            />
          </Link>

          {/* Middle: Navigation links (desktop only) */}
          <nav className="hidden md:flex gap-8 text-white text-sm uppercase tracking-widest">
            <Link className="hover:text-[#D87D4A] transition" href="/">Home</Link>
            <Link className="hover:text-[#D87D4A] transition" href="/headphones">Headphones</Link>
            <Link className="hover:text-[#D87D4A] transition" href="/speakers">Speakers</Link>
            <Link className="hover:text-[#D87D4A] transition" href="/earphones">Earphones</Link>
          </nav>

          {/* Right: Cart + Hamburger for small screens */}
          <div className="flex items-center gap-4">
            {/* Hamburger menu (mobile only) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="block md:hidden"
              aria-label="Toggle Menu"
            >
              <Image
                src="/assets/shared/icon-hamburger.svg"
                alt="Menu"
                width={16}
                height={15}
              />
            </button>

            {/* Cart icon */}
            <Link href="/cart">
              <Image
                src="/assets/shared/icon-cart.svg"
                alt="Cart"
                width={23}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Full-width border only on small screens */}
      <div className="block lg:hidden border-b border-white/20 w-full"></div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 text-sm uppercase tracking-widest">
          <Link className="block hover:text-[#D87D4A]" href="/">Home</Link>
          <Link className="block hover:text-[#D87D4A]" href="/headphones">Headphones</Link>
          <Link className="block hover:text-[#D87D4A]" href="/speakers">Speakers</Link>
          <Link className="block hover:text-[#D87D4A]" href="/earphones">Earphones</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
