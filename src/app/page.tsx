import NextProvider from "./components/providers/next-provider"
import TSProvider from "./components/providers/ts-provider";

import styles from "./page.module.css";
import { ReactElement } from "react";

import { items } from "@/data/items";

export default function Home(): ReactElement {
  const {products} = items;

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeItems}>
          <p className="text-lg">پروژه سبد خرید</p>
          <div>
            {products.map((item) => (
              <div key={item.id}>{item.title}</div>
            ))}
          </div>
        </div>
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
