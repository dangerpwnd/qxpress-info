import Link from 'next/link'

const Home = () => (
    <div role="main">
      <nav class="w-full flex justify-evenly">
        <Link href="/jobtypes"><a class="p-4 text-white bg-blue-500 active:bg-blue-700">By Job Types</a></Link>
        <Link href="/techs"><a class="p-4 text-white bg-blue-500 active:bg-blue-700">By Techs</a></Link>
      </nav>
      <div>
        <h1>Qxpress Info</h1>
      </div>
    </div>
  );

  export default Home;