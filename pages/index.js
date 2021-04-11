import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const dtCurrent = Date.now();
    // 26.September 2021  8:00
    const dtWahl = new Date(2021, 8, 26, 8, 0);
    const msDiff = dtWahl - dtCurrent;
    const days = Math.round(msDiff / (1000 * 60 * 60 * 24))
    setCounter(days);
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Wahl Countdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.center}>
        <div>noch</div>
        <div className={styles.xl}>{counter}</div>
        <div>Tage</div>
        <p>bis zur Bundestagswahl am 26. September 2021</p>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
