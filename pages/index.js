import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [wish, setWish] = useState("abc");

  useEffect(() => {
    const dtCurrent = Date.now();
    // 26.September 2021  8:00
    const dtWahl = new Date(2021, 8, 26, 8, 0);
    const msDiff = dtWahl - dtCurrent;
    const days = Math.round(msDiff / (1000 * 60 * 60 * 24));
    setCounter(days);
  }, []);

  const onClickSend = async () => {
    try {
      const url = "/api/wish";
      const payload = { wish: wish };
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log(response.statusText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Wahl Countdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.center}>
        <div>noch</div>
        <div className={styles.xxl}>{counter}</div>
        <div>Tage</div>
        <p className={styles.cen}>
          bis zur Bundestagswahl am 26. September 2021
        </p>

        <div className={styles.cen}>
          <div className={styles.wish}>Mein Wunsch an die neue Regierung:</div>
          <input
            className={styles.input}
            value={wish}
            onChange={(ev) => setWish(ev.target.value)}
          ></input>
          <button className={styles.btn} onClick={onClickSend}>
            Senden
          </button>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
