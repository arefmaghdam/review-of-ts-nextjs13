"use client";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { FC, useState } from "react";
import { RootState } from "@/redux/store";

const AddToCart: FC<{ product: any }> = ({ product }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  function addToCartHandler() {
    let newQty = qty;
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      if (existingItem.qty + 1 <= product.count) {
        newQty = existingItem.qty + 1;
      } else {
        return alert("محصول وجود ندارد");
      }
    }
    dispatch(addToCart({ ...product, qty: newQty }));
  }
  return (
    <>
      <div>
        <button
          onClick={addToCartHandler}
          className="border border-slate-300 text-slate-300 rounded-lg px-3 py-2 mt-3 hover:bg-slate-800"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </>
  );
};

export default AddToCart;
