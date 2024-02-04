import { RootState } from "@/redux/store";
import Link from "next/link";
import { FC } from "react";
import { useSelector } from "react-redux";

const Navbar: FC = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  return (
    <header className="container m-auto p-4">
      <nav className="flex justify-between items-center h-12 border-b-2 border-slate-500">
        <Link href="/" className="text-lg">
          Digital Market
        </Link>
        <div>
          <span>
            {cartItems.reduce((acc: number, cur: any) => acc + cur.qty, 0)}
          </span>
          <Link href="/cart">سبد خرید</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
