import Link from 'next/link';
import { gsap } from 'gsap';

const hoverAnim1 = () => {
  gsap.to('.navlink1', {
    x: 50,
    yoyo: true,
    repeat: 1,
  });
};

const hoverAnim2 = () => {
  gsap.to('.navlink2', {
    x: 50,
    yoyo: true,
    repeat: 1,
  });
};

const LinkNav = (props) => {
  return (
    <div className="grid grid-cols-3 items-stretch h-24 mb-4">
      <nav className="w-full flex flex-col justify-evenly">
        <div className="navlink1">
          <Link href="/jobtypes">
            <a
              className="text-white border-2 border-white bg-mute-purp p-2"
              onMouseEnter={hoverAnim1}
            >
              By Job Types
            </a>
          </Link>
        </div>
        <div className="navlink2">
          <Link href="/techs">
            <a
              className="text-white border-2 border-white bg-mute-purp p-2"
              onMouseEnter={hoverAnim2}
            >
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
