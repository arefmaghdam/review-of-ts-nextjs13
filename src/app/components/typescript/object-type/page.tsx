import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const ObjectType: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we can use object type for javascript objects, for example:

        let product: object

        product= {
            id: "p1", // 1
            title: "Book", 
            price: 99,
            exist: true
        }
    
    // but there is a problem that when we declare a {}, we dont have error, because we want to have error when we declare {}
    // for solve this problem:

        let product: {
            id: string | number
            title: string
            price: number
            exist: boolean
        }

        product= {
            id: "p1", // 1
            title: "Book", 
            price: 99,
            exist: true
        }

        product= {} // we have error
      `}
      />
    </div>
  );
};

export default ObjectType;
