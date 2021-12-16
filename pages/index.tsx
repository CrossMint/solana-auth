import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sign in with Solana</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <button className="signin-btn">Solana Sign In</button>
      </body>
    </div>
  );
};

export default Home;
