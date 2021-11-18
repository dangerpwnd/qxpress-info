import React from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const LinkNav = (props) => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { x: 50 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { x: 0 });
  };

  return (
    <div className="grid grid-cols-3 items-stretch h-24 mb-4">
      <nav className="w-full flex flex-col justify-evenly">
        <div className="navlink" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <Link href="/jobtypes">
            <a className="text-white border-2 border-white bg-mute-purp p-2 hover:bg-white focus:bg-white hover:border-mute-purp focus:border-mute-purp hover:text-mute-purp focus:text-mute-purp">
              By Job Types
            </a>
          </Link>
        </div>
        <div className="navlink" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <Link href="/techs">
            <a className="text-white border-2 border-white bg-mute-purp p-2 hover:bg-white focus:bg-white hover:border-mute-purp focus:border-mute-purp hover:text-mute-purp focus:text-mute-purp">
              By Techs
            </a>
          </Link>
        </div>
      </nav>
      <div className="self-center">
        <h1 className="text-center text-2xl">{props.heading}</h1>
      </div>
      <div className="self-center">
        <h1 className="text-center">What would you like here?</h1>
      </div>
    </div>
  );
};

export default LinkNav;
