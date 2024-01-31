import React, { FC } from "react";
// import styles from "../../../styles/Home.module.css";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const ProductComponent: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to have a product component and cantins product details and we use this component in main page and display 
    // products list, for this task we create a folder named components into src folder and create a component named ProductItem.tsx
    // ProductItem.tsx codes:

    import Image fron "next/image"
    import Link from "next/link"

    const ProductItem = ({product}) => {
        return (
            <div className="rounded-lg bg-slate-900 m-5">
                <Image 
                    src={product.image}
                    width={400}
                    height={400}
                    className="rounded-t-lg object-cover w-full"
                />
                <div className="flex flex-col items-center justify-center p-5">
                    <Link href={'/product/' + {product.id}}>
                        <h2 className="text-lg">{product.title}</h2>
                    </Link>
                    <p className="mt-2 rtl text-slate-300">{product.price} تومان</p>
                    <button className="border border-slate-300 text-slate-300 rounded-lg px-3 py-2 mt-3 hover:bg-slate-800">افزودن به سبد خرید</button>
                </div>
            </div>
        )
    }

    export default ProductItem

    // app/page.tsx codes:

    import NextProvider from "./components/providers/next-provider"
    import TSProvider from "./components/providers/ts-provider";

    import styles from "./page.module.css";
    import { ReactElement } from "react";

    import { items } from "@/data/items";

    import ProductItem from "@/components/ProductItem"

    export default function Home(): ReactElement {
      const {products} = items;

      return (
        <>
          <div className={styles.homeContainer}>
            <div className={styles.homeItems}>
              <p className="text-lg">پروژه سبد خرید</p>
              <div className="container grid grid-cols-4 m-auto pt-6">
                {products.map((item) => (
                  <ProductItem key={item.id} product={item} />
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

    // we want to use rtl in app, for this task we create a new simple className
    // so we write below codes into global.css:

    @layer utilities {
        .rtl {
            direction: rtl;
        }
    }

    then we use rtl className in ProductItem.tsx and in price section in <p> tag as top

    <p className="mt-2 rtl text-slate-300">{product.price} تومان</p>
      `}
      />
    </div>
  );
};

export default ProductComponent;
