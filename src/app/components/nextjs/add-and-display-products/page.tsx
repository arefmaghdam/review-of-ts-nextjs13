import React, { FC } from "react";
// import styles from "../../../styles/Home.module.css";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const AddAndDisplayProducts: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we should create a data/items.ts file for getting and saving products using node.js file system 
    // data/items.ts codes:
    export const items = {
        products: [
            {
                id: "1",
                title: "محصول",
                price: 99,
                image: "/images/product.jpg",
                count: 5
            },
            {
                id: "2",
                title: "محصول",
                price: 99,
                image: "/images/product.jpg",
                count: 5
            },
            {
                id: "3",
                title: "محصول",
                price: 99,
                image: "/images/product.jpg",
                count: 5
            },
            {
                id: "4",
                title: "محصول",
                price: 99,
                image: "/images/product.jpg",
                count: 5
            },
        ]
    }

    // now we should create an public/images folder that contains product.jpg
    // now in src/app/page.tsx, we should import data/items.ts into page.tsx:

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
      `}
      />
    </div>
  );
};

export default AddAndDisplayProducts;
