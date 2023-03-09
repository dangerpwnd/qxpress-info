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
      className="flex flex-col justify-evenly items-center h-96"
      role="main"
    >
      <h1 className="text-4xl">Qxpress Info</h1>
      <div className="w-1/2">
        <h3 className="text-3xl flex flex-col justify-evenly text-center">
          Search By
        </h3>
        <div className="my-8 mx-auto w-3/5 flex justify-evenly">
          <Link href="/jobtypes">
            <button className="text-2xl text-white border-2 border-white rounded-lg bg-mute-purp p-2 hover:bg-white focus:bg-white hover:border-mute-purp focus:border-mute-purp hover:text-mute-purp focus:text-mute-purp">
              Job Types
            </button>
          </Link>
          <Link href="/techs">
            <button className="text-2xl text-white border-2 border-white rounded-lg bg-mute-purp p-2 hover:bg-white focus:bg-white hover:border-mute-purp focus:border-mute-purp hover:text-mute-purp focus:text-mute-purp">
              Techs
            </button>
          </Link>
        </div>
      </div>
    </main>
  </>
);

export default Home;
