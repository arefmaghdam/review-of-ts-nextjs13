import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const FunctionsTypes: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we know functions are objects in javascript and they can be as a function parameters and return values in functions
    // now we want to declare a function with a function argument:

        function createUser(
                id: number, 
                email: string, 
                role: (userId: number, isAdmin: boolean) => void
            ) {
                role(3, true)
            }
      `}
      />
    </div>
  );
};

export default FunctionsTypes;
