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
      <Link href="/components/typescript/function-argument-type">
        function-argument-type
      </Link>
      <Link href="/components/typescript/functions-types">functions-types</Link>
      <Link href="/components/typescript/custom-types">custom-types</Link>
      <Link href="/components/typescript/interface-using">interface-using</Link>
      <Link href="/components/typescript/type-vs-interface">
        type-vs-interface
      </Link>
      <Link href="/components/typescript/type-fusion">type-fusion</Link>
      <Link href="/components/typescript/literal-types">literal-types</Link>
    </div>
  );
};

export default TSProvider;
