import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const FunctionArgumentType: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we can use all of the typescript types for functions arguments types, for example:

        function addProduct(title: string, price: string): void {
            const product = title + price
            console.log(product)
        }

    // when we use const for a variable, typescript detect that the type of that variable will noy change and we dont have error but we use let for that variable we will have error
    // if a function dont has a return value, we must use undefined or void(suggested) type for function
    // now we want to have a function that has a return value:

        function addProduct(title: string, price: string): string {
            const product = title + price
            return product
        }
      `}
      />
    </div>
  );
};

export default FunctionArgumentType;
