import React, { FC } from "react";
import Link from "next/link";

const TSProvider: FC = () => {
  return (
    <div>
      <Link href="/components/typescript/introduction">introduction</Link>
      <Link href="/components/typescript/typescript-using">
        typescript-using
      </Link>
      <Link href="/components/typescript/union-type">union-type</Link>
      <Link href="/components/typescript/object-type">object-type</Link>
      <Link href="/components/typescript/array-type">array-type</Link>
    </div>
  );
};

export default TSProvider;
