import Head from "next/head";
import styles from "../styles/Home.module.css";
import EnterWish from "./public/components/enter-wish";
import WordCloud from "./public/components/word-cloud";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wahl Countdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.center}>
        <EnterWish />

        <WordCloud />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
