import styles from "./Home.module.css";
import EnterWish from "./enter-wish";
import WordCloud from "./word-cloud";

export default function Home() {
  return (
    <main className={styles.center}>
      <EnterWish />

      <WordCloud />
    </main>
  );
}
