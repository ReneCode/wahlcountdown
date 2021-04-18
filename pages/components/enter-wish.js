import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "./enter-wish.module.css";

export default function EnterWish() {
  const [counter, setCounter] = useState(0);
  const [wish, setWish] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const dtCurrent = Date.now();
    // 26.September 2021  8:00
    const dtWahl = new Date(2021, 8, 26, 8, 0);
    const msDiff = dtWahl - dtCurrent;
    const days = Math.round(msDiff / (1000 * 60 * 60 * 24));
    setCounter(days);
  }, []);

  useEffect(() => {
    // load userId from local storage
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
      if (response.ok) {
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <div>noch</div>
      <div className={styles.xxl}>{counter}</div>
      <div>Tage</div>
      <p className={styles.cen}>bis zur Bundestagswahl am 26. September 2021</p>

      <div className={styles.cen}>
        <div className={styles.wish}>Meine Wünsche an die neue Regierung:</div>
        <input
          className={styles.input}
          value={wish}
          onChange={(ev) => setWish(ev.target.value)}
        ></input>
        <button className={styles.btn} onClick={onClickSend}>
          Senden
        </button>
      </div>
    </React.Fragment>
  );
}
