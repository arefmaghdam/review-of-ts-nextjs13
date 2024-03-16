import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const TypescriptUsing: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we can use typescript documentation using typescript website, it has 2 important section:
    // 1 handbook for deep learning of typescript 2 docs that has 2 part: 
    // 1 online and in your browser that dont need to install for training environment 2 on your computer that install using npm
    // npm => node package manager
    // npx => node package execute that dont install just for using
    // installation => npm install typescript --save-dev
    // we created a main.ts file and write codes
    // execution of typescript for main.ts by compiling to a javascript file and not install typescript package
    // npx tsc main.ts 
    // when we execute above command, main.ts compile and created a file named main.js
    // example codes: 

        let title: string = "Book"
        let price: number = 99

        title = 100 // error

    // typescript types category for javascript developers:
    // 1 static 2 generics 3 decorators
    // static types: a built-in or primitive: number-string-boolean-void-null-undefined-any b user-defined: array-touple-enum-functions-class-interface
      `}
      />
    </div>
  );
};

export default TypescriptUsing;
