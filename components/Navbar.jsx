import React from 'react';
import Link from 'next/link';
import { BuyMeACoffeeButton } from '.';

const Navbar = () => {
  return (
    <nav className="px-32 flex h-[60px] justify-between items-center bg-white text-slate-700">
      <span>
        <span className="text-[28px] font-semibold">Aman</span>.
        <span className="text-[14px] font-medium">Blog</span>
      </span>
      <ul className="flex items-center gap-8 text-[14px] font-semibold text-slate-600">
        <li className="hover:text-zinc-900">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-zinc-900">
          <Link href="/category">Category</Link>
        </li>
        <li className="hover:text-zinc-900">
          <Link href="/about-me">About Me</Link>
        </li>
        <li>
          <BuyMeACoffeeButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
