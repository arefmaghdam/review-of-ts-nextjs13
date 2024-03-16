import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const Introduction: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // typescript made by microsoft team
    // we can use typescript in both of frontend and backend and even fullstack platforms, for example react, vue and angular in frontend and express in backend
    // and nextjs in fullstack platforms, this means where we can use javascript we can use typescript too.
    // typescript is a coding and programming language based on javascript and typescript compiled to javascript finally by typescript compiler, because we want to show in browser, and all of the syntaxes and logics in 
    // javascript is in typescript too exactly, typescript add type safety or type checking to javascript, for example:

    // javascript code:

        function addProduct(title, price) {
            return title + price
        }

        addProduct("Product 1", "99")   // Product 1  99

    // typescript codes:

        function addProduct(title: string, price: number) {
            return title + price
        }

        addProduct("Product 1", "99")   // error because price is not a number and is a string
    
    // so when we develop an app using typescript, we have less error and we have an optimize code
      `}
      />
    </div>
  );
};

export default Introduction;
