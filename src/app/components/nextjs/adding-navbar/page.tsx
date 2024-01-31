import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const AddingNavbar: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // in next step, we want to have a navbar, so we add a component named Navbar.tsx
    // Navbar.tsx codes are:

    const Navber = () => {
        return (
            <header className="container m-auto p-4">
                <nav className="flex justify-between items-center h-12 border-b-2 border-slate-500">
                    <Link href="/" className="text-lg">Digital Market</Link>                    
                    <div>
                        <Link href="/cart">سبد خرید</Link>
                    </div>
                </nav>
            </header>
        )
    }

    export default Navbar;
      `}
      />
    </div>
  );
};

export default AddingNavbar;
