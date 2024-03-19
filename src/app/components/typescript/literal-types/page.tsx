import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const LiteralTypes: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // when we use literal types we say to typescript that the variable must has a special type and value:

        let product: "Book 1"    // : but not =

        product = "Book 1"
        product = "Book 2"  // error because product variable has string type but its value is not "Book 1"

    // we can do a work that error is ignore:

        let product: "Book 1" | "Book 2" 

        product = "Book 1"
        product = "Book 2"    // not error
      `}
      />
    </div>
  );
};

export default LiteralTypes;
