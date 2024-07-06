import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BuyMeACoffeeButton } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const [showCrossIcon, setShowCrossIcon] = useState(false);

  const handleMenuIconClick = () => {
    setShowMenu(!showMenu);
    setShowMenuIcon(!showMenuIcon);
    setShowCrossIcon(!showCrossIcon);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setShowMenu(true);
      setShowMenuIcon(false);
    } else {
      setShowMenu(false);
      setShowMenuIcon(true);
      setShowCrossIcon(false);
    }
  }, [windowWidth]);

  return (
    <nav className="px-32 lg:py-0 py-2 flex min-h-[60px] justify-between items-center bg-white text-slate-700 sticky top-0 z-50 lg:flex-row flex-col md:gap-0 gap-2">
      <span
        className="absolute top-5 left-5 width-5 md:hidden"
        onClick={handleMenuIconClick}
      >
        <FontAwesomeIcon icon={showCrossIcon ? faXmark : faBars} size="lg" />
      </span>
      <span>
        <span className="text-[28px] font-medium">Aman</span>.
        <span className="text-[14px] font-semibold text-violet-600">Blog</span>
      </span>

      <ul
        className={`flex absolute top-12 md:static md:p-0 ${
          showMenu ? 'max-h-500 p-2' : 'max-h-0 p-0 overflow-hidden'
        } transition-all ease-in-out duration-700 bg-white items-center lg:gap-8 md:gap-12 gap-3 text-[14px] font-semibold text-slate-600 md:flex-row flex-col md:w-auto w-screen`}
      >
        <li className="hover:text-zinc-900">
          <Link href="/home">Home</Link>
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
