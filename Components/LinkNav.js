import Link from 'next/link';

const LinkNav = () => {
  return (
    <nav className="w-full flex justify-evenly">
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
  );
};

export default LinkNav;
