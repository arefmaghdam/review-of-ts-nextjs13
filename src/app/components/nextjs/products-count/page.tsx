import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const ProductsCount: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // in this section we want to display products count and use the datas that saved in redux store
    // Navbar.tsx codes:

    import Link from "next/link";
    import { FC } from "react";
    import { useSelector } from "react-redux"

    const Navbar: FC = () => {
        const {cartItems} = useSelector((state) => state.cart)

      return (
        <header className="container m-auto p-4">
          <nav className="flex justify-between items-center h-12 border-b-2 border-slate-500">
            <Link href="/" className="text-lg">
              Digital Market
            </Link>
            <div>
                <span>{cartItems.reduce((acc, cur) => acc + cur.qty, 0)}</span>
              <Link href="/cart">سبد خرید</Link>
            </div>
          </nav>
        </header>
      );
    };

    export default Navbar;


      `}
      />
    </div>
  );
};

export default ProductsCount;
