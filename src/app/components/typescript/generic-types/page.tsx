import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const GenericTypes: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // generic types are types in typescript that can work toghether coordinated and require 1 type argument at least
    // generic types are displayed with <> sign and T in <T> is genric argument, T can be everything but T is suggested and commenly
    // spose we have a array type but we dont know the array contains string or number or ...
    // here we can use generic types, we want to implement data array that be Data type and contains string or number or custom type where it is required in our app
    // for example:

        type Data<T> = {
            dataType: T[]   // T can be string or number or custom type or ...
        }

        let text: Data<string> = {
            dataType: ["Text 1", "Text 2"],
        }

    // now we want to have a custom type too:

        type Data<T> = {
            dataType: T[]   // T can be string or number or custom type or ...
        }

        type Product = {
            title: string
            price: number
        }

        const info: Data<Product> = {
            dataType: [
                {title: "Book 1", price: 99}
            ]
        }

        let text: Data<string> = {
            dataType: ["Text 1", "Text 2"],
        }
        
    // note that Array is a built-in generic type in typescript, for example: Array<T>
      `}
      />
    </div>
  );
};

export default GenericTypes;
