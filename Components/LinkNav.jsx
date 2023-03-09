import React, { useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const LinkNav = (props) => {
  // States

  const [addrData, setAddrData] = useState('');

  // Animations

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { x: 50 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { x: 0 });
  };

  // Handlers

  const inputChangeHandler = (e) => {
    setAddrData(e.target.value);
  };

  return (
    <div className="grid grid-cols-3 items-stretch h-24 mb-4">
      <nav className="w-full flex flex-col justify-evenly">
        <div className="navlink" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <Link href="/jobtypes">
            <button className="text-white border-2 border-white bg-mute-purp p-2 hover:bg-white focus:bg-white hover:border-mute-purp focus:border-mute-purp hover:text-mute-purp focus:text-mute-purp">
              By Job Types
            </button>
          </Link>
        </div>
        <div className="navlink" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <Link href="/techs">
            <button className="text-white border-2 border-white bg-mute-purp p-2 hover:bg-white focus:bg-white hover:border-mute-purp focus:border-mute-purp hover:text-mute-purp focus:text-mute-purp">
              By Techs
            </button>
          </Link>
        </div>
      </nav>
      <div className="self-center">
        <h1 className="text-center text-3xl">{props.heading}</h1>
      </div>
      <div className="self-center">
        <h1 className="text-center text-xl pb-4">Enter Job Address:</h1>
        <div className="text-center">
          <input
            type="text"
            className="text-black"
            name="address"
            onChange={inputChangeHandler}
          />
          <Link href={`/address?addr=${encodeURIComponent(addrData)}`}>
            <button className="text-x1 text-white font-bold border-2 m-2 p-2 border-white rounded-lg bg-mute-purp hover:bg-white focus:bg-white hover:border-mute-purp focus:border-mute-purp hover:text-mute-purp focus:text-mute-purp">
              Find Address
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LinkNav;
