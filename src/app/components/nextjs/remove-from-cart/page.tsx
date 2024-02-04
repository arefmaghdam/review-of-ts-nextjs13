import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const RemoveFromCart: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to develop removeFromCart reducer function
    // the most important difference between removeFromCart and addToCart is a fillter operation for removeFromCart

    removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter((product) => product.id !== action.payload)
        state.itemsPrice = state.cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0)
        state.totalPrice = state.itemsPrice
    }
      `}
      />
    </div>
  );
};

export default RemoveFromCart;
