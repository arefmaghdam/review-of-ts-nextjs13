import Link from "next/link";
import React, { FC } from "react";

const NextProvider: FC = () => {
  return (
    <div>
      <Link href="/components/nextjs/next.js13-review">next.js 13 review</Link>
      <Link href="/components/nextjs/install-next.js-app">install next.js app</Link>
    </div>
  );
};

export default NextProvider;
