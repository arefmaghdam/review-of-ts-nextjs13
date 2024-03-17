import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const CustomTypes: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // when our app is being very big and complex, we must to have custom and dynamic types that we must use type keyword:

        type FnType = (userId: number, isAdmin: boolean) => void

        function createUser(id: number, email: string, role: FnType) {
            role(3, true)
        }

    // now FnType is a custom type or dynamic type
      `}
      />
    </div>
  );
};

export default CustomTypes;
