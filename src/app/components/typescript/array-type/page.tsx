import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const ArrayType: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to declare an array:

        let cartItems: Array<string>

        cartItems = ["Product 1", "Product 2", "Product 3"]
        cartItems = [1, 2, 3] // we have an error

    // another way to declare array type:

        let cartItems: string[]

        cartItems = ["Product 1", "Product 2", "Product 3"]
        cartItems = [1, 2, 3] // we have an error
        cartItems = ["Product 1", "Product 2", "Product 3", 2] // we have an error for 2

    // for solving this problem:

        let cartItems: (string | number)[]

        // or

        let cartItems: Array<string | number>

        cartItems = ["Product 1", "Product 2", "Product 3", 2, 3] // we dont have error
      `}
      />
    </div>
  );
};

export default ArrayType;
