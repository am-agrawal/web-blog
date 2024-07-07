import React from 'react';
import HeroVecotor from '../assets/images/hero.svg';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Intro = () => {
  return (
    <div className="w-screen h-[calc(100vh-4rem)] bg-[#EFF0F3] dotted-grid p-10">
      <div className="flex justify-center items-center md:mt-32 mt-4">
        <div className="flex flex-col gap-4">
          <div className="md:text-5xl text-3xl font-semibold leading-snug">
            <div>Hi, I&apos;m Aman</div>
            <div>Full Stack Dev</div>
          </div>
          <div className="text-md font-medium text-slate-500 border-l-2 border-slate-900 pl-2">
            <div>
              On this blog I share tips and tricks, frameworks, projects,
              tutorials, etc
            </div>
            <div>Make sure you subscribe to get the latest updates</div>
          </div>
          <div className="flex md:flex-row flex-col gap-4 mt-4 items-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="h-12 w-80 px-6 rounded-md "
            />
            <button className="bg-violet-700 text-white px-4 py-2 h-12 font-semibold rounded-md w-32">
              Subscribe
            </button>
          </div>
        </div>
        <HeroVecotor className="lg:block hidden" />
      </div>
      <Link href="#categories">
        <FontAwesomeIcon
          icon={faAngleDown}
          size="lg"
          className="absolute bottom-10 left-[50%] cursor-pointer text-gray-500 hover:text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1"
        />
      </Link>
    </div>
  );
};

export default Intro;
