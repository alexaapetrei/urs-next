import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import catego from "../data/catego.js";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          I can set titles right from inside the jsx. .. that is cool
        </title>
        <meta name="description" content="What a cool way to SEO" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <h1>What a creayz place</h1>
        <p>A cool paragtajp da {catego["a"][1].q}</p>

        <p>{catego["c"][4].q}</p>
      </div>
    </>
  );
};

export default Home;
