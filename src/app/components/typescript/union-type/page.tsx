import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const UnionType: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // spose that we have a productId and we want to get string or number value,
    // here we must combine two types and use a type named union type
    //union type example:
    
        let productId: number | string = 123
        productId = "abc" // not error
      `}
      />
    </div>
  );
};

export default UnionType;
