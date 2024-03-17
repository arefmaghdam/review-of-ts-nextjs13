import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const InterfaceUsing: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we can use type keyword for object type:

        type Product = {
            id: number
            title: string
            price: number
            exist: boolean
        }

        let product: Product = {
            id: 1, 
            title: "Book",
            price: 99,
            exist: true
        }

    // there is another way to object custom type declaration and that is interface keyword:

        interface Product {
            id: number
            title: string
            price: number
            exist: boolean
        }

        let product: Product = {
            id: 1, 
            title: "Book",
            price: 99,
            exist: true
        }

    we use interface keyword for object custom types often, and this is suggested way fo developers
      `}
      />
    </div>
  );
};

export default InterfaceUsing;
