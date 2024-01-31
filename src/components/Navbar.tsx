import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <header className="container m-auto p-4">
      <nav className="flex justify-between items-center h-12 border-b-2 border-slate-500">
        <Link href="/" className="text-lg">
          Digital Market
        </Link>
        <div>
          <Link href="/cart">سبد خرید</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
