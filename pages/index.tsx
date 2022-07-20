import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/steps/name");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="habi-challenge" content="Habi Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>Habi.com</span>
        </h1>

        <p className={styles.description}>
          Get started by clicking{" "}
          <button onClick={handleClick} className={styles.code}>
            Add apartment
          </button>
        </p>
      </main>
    </div>
  );
};

export default Home;
