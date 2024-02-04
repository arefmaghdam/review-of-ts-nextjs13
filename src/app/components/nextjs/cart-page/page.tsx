import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const CartPage: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // in this section, we want to develop cart page, so we should to create app/cart/page.tsx file and:

    "use client" 
    
    import React, { FC } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { removeFromCart } from "@/redux/slices/cartSlice";
    import { RootState } from "@/redux/store";

    const CartPage: FC = () => {
      const dispatch = useDispatch();
      const { totalPrice, cartItems } = useSelector(
        (state: RootState) => state.cart
      );
      function removeFromCartHandler(id: string) {
        dispatch(removeFromCart(id));
      }
      return (
        <div className="container m-auto p-6 w-1/2 rounded-lg">
          <h1 className="mb-4 text-lg text-center">سبد خرید</h1>
          <div className="flex justify-center bg-slate-900">
            <div className="my-10 mx-8">
              <div className="p-6 text-xl bg-slate-800 rounded-lg">
                مجموع قیمت: {totalPrice} تومان
              </div>
            </div>
            <div>
              <table className="min-w-full mx-4 rtl bg-slate-800 text-slate-300 rounded-lg">
                <tbody className="p-2">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="P-5">{item.title}</td>
                      <td className="P-5 text-right">{item.price} تومان</td>
                      <td className="P-5 text-center">
                        <button
                          className="border border-slate-500 px-2 py-1 rounded-lg bg-slate-900"
                          onClick={() => removeFromCartHandler(item.id)}
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    };

    export default CartPage;
    
      `}
      />
    </div>
  );
};

export default CartPage;
