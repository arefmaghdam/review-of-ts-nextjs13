import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const TypeFusion: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to fusin the 2 different type:

        type CartItems = {
            products: string[]
        }

        type User = {
            userName: string
        }

        type UserProducts = User & CartItems

        let userProducts: UserProducts

        userProducts = {
            products: ["Book 1", "Book 2"],
            userName: "Aref",
        }

    // now we want to fusion or merge types using interface:

        interface CartItems {
            products: string[]
        }

        interface User {
            userName: string
        }

        interface UserProducts extends User, CartItems {}

        let userProducts: UserProducts

        userProducts = {
            products: ["Book 1", "Book 2"],
            userName: "Aref",
        }
      `}
      />
    </div>
  );
};

export default TypeFusion;
