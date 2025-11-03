'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';



const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'HEADPHONES', href: '/headphones' },
  { label: 'SPEAKERS', href: '/speakers' },
  { label: 'EARPHONES', href: '/earphones' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-black text-white w-full z-50 relative">
      <div className="max-w-[1110px] mx-auto px-6 md:px-10">
        {/* Top header section */}
        <div className="flex items-center justify-between py-6 md:py-8 relative">
          <div className="flex items-center gap-6">
            {/* Hamburger Icon (Mobile Only) */}
            <button
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Image src = "/public/assets/shared/icon-hamburger.svg" alt="Menu" width={16} height={15} />
            </button>

            {/* Logo */}
            <Link href="/" onClick={closeMenu}>
              <Image src="/public/assets/shared/logo.png" alt="Audiophile Logo" width={143} height={25} />
            </Link>
          </div>

          {/* Navigation (Desktop Only) */}
          <nav className="hidden md:flex gap-8 text-xs font-bold tracking-[2px] uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#D87D4A] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart */}
          <button aria-label="Cart">
            <Image src="/public/assets/shared/icon-cart.svg" alt="Cart Icon" width={23} height={20} />
          </button>
        </div>

        {/* Divider line (desktop only visible from logo to cart) */}
        <div className="border-b border-white/10 w-full md:max-w-full" />
      </div>

      {/* Dropdown Navigation (Mobile Only) */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white text-black z-40 shadow-md">
          <ul className="flex flex-col py-6 space-y-4 px-6 uppercase font-bold text-sm tracking-[1.5px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block hover:text-[#D87D4A] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
