import React, { FC } from "react";
import Link from "next/link";

const TSProvider: FC = () => {
  return (
    <div>
      <Link href="/components/typescript/introduction">introduction</Link>
      <Link href="/components/typescript/typescript-using">
        typescript-using
      </Link>
    </div>
  );
};

export default TSProvider;
