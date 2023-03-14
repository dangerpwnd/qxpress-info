import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => (
  <>
    <Head>
      <title>Qxpress Info - Home</title>
      <link rel="icon" href="/CP.ico" />
    </Head>
    <main
      className="flex flex-col justify-center items-center h-screen lg:justify-start lg:p-4"
      role="main"
    >
      <h1 className="lg:text-4xl text-5xl my-4">Qxpress Info</h1>
      <div className="lg:w-1/2 w-3/4">
        <h3 className="lg:text-3xl text-4xl text-center">Search By</h3>
        <div className="my-8 mx-auto w-3/5 flex lg:flex-row flex-col justify-evenly items-center">
          <Link href="/jobtypes">
            <button className="lg:text-2xl text-3xl text-white border-2 border-white rounded-lg  bg-mute-purp p-4 lg:w-40 w-48  hover:bg-white focus:bg-white hover:border-mute-purp focus:border-mute-purp hover:text-mute-purp focus:text-mute-purp">
              Job Types
            </button>
          </Link>
          <Link href="/techs">
            <button className="lg:text-2xl text-3xl text-white border-2 border-white rounded-lg bg-mute-purp my-4 p-4 lg:w-40 w-48 lg:m-0  hover:bg-white focus:bg-white hover:border-mute-purp focus:border-mute-purp hover:text-mute-purp focus:text-mute-purp">
              Techs
            </button>
          </Link>
          <Link href="/address">
            <button className="lg:text-2xl text-3xl text-white border-2 border-white rounded-lg bg-mute-purp p-4 lg:w-40 w-48  hover:bg-white focus:bg-white hover:border-mute-purp focus:border-mute-purp hover:text-mute-purp focus:text-mute-purp">
              Address
            </button>
          </Link>
        </div>
      </div>
    </main>
  </>
);

export default Home;
