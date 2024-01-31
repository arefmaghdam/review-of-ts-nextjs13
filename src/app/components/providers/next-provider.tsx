import Link from "next/link";
import React, { FC } from "react";

const NextProvider: FC = () => {
  return (
    <div>
      <Link href="/components/nextjs/next.js13-review">next.js 13 review</Link>
      <Link href="/components/nextjs/install-next.js-app">install next.js app</Link>
      <Link href="/components/nextjs/using-next-fonts">using next fonts</Link>
      <Link href="/components/nextjs/add-and-display-products">add and display products</Link>
      <Link href="/components/nextjs/product-component">product component</Link>
    </div>
  );
};

export default NextProvider;
