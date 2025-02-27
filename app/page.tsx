'use client'

import InstallPrompt from "../components/InstallPrompt";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <InstallPrompt />
      <h1>Teste</h1>
    </div>
  );
}
