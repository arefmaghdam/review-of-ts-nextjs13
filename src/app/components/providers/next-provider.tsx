import Link from "next/link";
import React, { FC } from "react";

const NextProvider: FC = () => {
  return (
    <div>
      <Link href="/components/nextjs/next.js13-review">next.js 13 review</Link>
      <Link href="/components/nextjs/install-next.js-app">
        install next.js app
      </Link>
      <Link href="/components/nextjs/using-next-fonts">using next fonts</Link>
      <Link href="/components/nextjs/add-and-display-products">
        add and display products
      </Link>
      <Link href="/components/nextjs/product-component">product component</Link>
      <Link href="/components/nextjs/adding-navbar">adding navbar</Link>
      <Link href="/components/nextjs/use-client">use client</Link>
      <Link href="/components/nextjs/install-redux-toolkit">
        install redux toolkit
      </Link>
      <Link href="/components/nextjs/create-slice">create slice</Link>
      <Link href="/components/nextjs/store-provider">store provider</Link>
      <Link href="/components/nextjs/add-to-cart">add to cart</Link>
      <Link href="/components/nextjs/remove-from-cart">remove from cart</Link>
    </div>
  );
};

export default NextProvider;
