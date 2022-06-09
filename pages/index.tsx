import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <header className="bg-cyan-300 px-4 py-2 flex items-center">
        <Link
          href="/login"
          className="font-black text-xl tracking-wide space-x-12"
        >
          Login
        </Link>
      </header>
      <p>Hello world</p>
    </div>
  );
};

export default Home;
