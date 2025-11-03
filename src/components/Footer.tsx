'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white px-6 md:px-10 lg:px-[165px] pt-14 pb-10">
      <div className="max-w-[1110px] mx-auto flex flex-col items-center lg:items-start gap-10">
        {/* Logo and Nav */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* Logo */}
          <Link href="/">
            <Image src="/assets/shared/desktop/logo.png" alt="Audiophile logo" width={143} height={25} />
          </Link>

          {/* Navigation */}
          <nav className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-sm uppercase tracking-wider font-bold text-white">
            <Link href="/" className="hover:text-[#D87D4A] transition">Home</Link>
            <Link href="/headphones" className="hover:text-[#D87D4A] transition">Headphones</Link>
            <Link href="/speakers" className="hover:text-[#D87D4A] transition">Speakers</Link>
            <Link href="/earphones" className="hover:text-[#D87D4A] transition">Earphones</Link>
          </nav>
        </div>

        {/* Description */}
        <div className="text-center lg:text-left text-white/75 text-sm leading-6 max-w-2xl">
          Audiophile is an all-in-one stop to fulfill your audio needs. We’re a small team of music lovers and
          sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </div>

        {/* Bottom bar */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 mt-8">
          <p className="text-white/50 text-sm text-center lg:text-left">
            © {new Date().getFullYear()} Audiophile. All Rights Reserved
          </p>

          {/* Socials */}
          <div className="flex gap-4">
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/shared/desktop/icon-facebook.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/shared/desktop/icon-twitter.svg" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/shared/desktop/icon-instagram.svg" alt="Instagram" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
