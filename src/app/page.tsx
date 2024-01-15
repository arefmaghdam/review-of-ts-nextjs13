import NextProvider from "@/components/next-provider";
import TSProvider from "@/components/ts-provider";

import styles from "./page.module.css";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeItems}>
          <h1>Next.JS 13</h1>
          <NextProvider />
        </div>
        <div className={styles.homeItems}>
          <h1>Typescript</h1>
          <TSProvider />
        </div>
      </div>
    </>
  );
}
