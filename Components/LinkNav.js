import Link from 'next/link';

const LinkNav = (props) => {
  return (
    <div className="grid grid-cols-3 h-36 items-center">
      <nav className="w-full flex flex-col justify-evenly">
        <Link href="/jobtypes">
          <a className="p-4 text-white bg-blue-500 active:bg-blue-700">
            By Job Types
          </a>
        </Link>
        <Link href="/techs">
          <a className="p-4 text-white bg-blue-500 active:bg-blue-700">
            By Techs
          </a>
        </Link>
      </nav>
      <div>
        <h1 className="text-center text-2xl">{props.heading}</h1>
      </div>
      <div>
        <h1 className="text-center">What would you like here?</h1>
      </div>
    </div>
  );
};

export default LinkNav;
