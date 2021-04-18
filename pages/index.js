import Head from "next/head";
import styles from "../styles/App.module.css";

import Home from "./components/Home";

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wahl Countdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      <footer className={styles.footer}></footer>
    </div>
  );
}
