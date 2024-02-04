import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const AddToCartComponent: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // in this section we want to implement add to cart button, but this button should be client component because of browser APIs
    // we have two selection here, 1 we can transfer product component to client component and lose nextjs optimization
    // 2 we can transfer add to cart button to a client component that is better 
    // so we create a component/AddToCart.tsx and codes are below:

    "use client"

    import { useDispatch, useSelector } from "react-redux"
    import { addToCart } from "../redux/slices/cartSlice"
    import { useState } from "react"

    import React from 'react'
    
    const AddToCart = ({product}) => {
        const [qty, setQty] = useState(1)
        const dispatch = useDispatch()
      const {cartItems} = useSelector((state) => state.cart)
      function addToCartHandler() {
        let newQty = qty
        const existingItem = cartItems.find((item) => item.id === product.id)
        if(existingItem) {
            if(existingItem.qty + 1 <= product.count) {
                newQty = existingItem.qty + 1
            } else {
                return alert("محصول وجود ندارد")
            }
        }
        dispatch(addToCart({...product, qty: newQty }))
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
    }
    
    export default AddToCart

    // ProductItems.tsx codes:

    import Image from "next/image";
    import Link from "next/link";
    import React, { FC } from "react";
    import AddToCart from "./AddToCart";
    
    type ProductItemProps = {
      product: any;
    };
    
    const ProductItem: FC<ProductItemProps> = ({ product }) => {
      return (
        <div className="rounded-lg bg-slate-900 m-5">
          <Image
            src={product.image}
            alt="عکس محصول"
            width={150}
            height={150}
            className="rounded-t-lg object-cover w-full"
          />
          <div className="flex flex-col items-center justify-center p-5 rtl">
            <Link href={/product/{product.id}}>
              <h2 className="text-lg">{product.title}</h2>
            </Link>
            <p className="mt-2 rtl text-slate-300">{product.price} تومان</p>
            <AddToCart product={product} />
          </div>
        </div>
      );
    };
    
    export default ProductItem;

    
      `}
      />
    </div>
  );
};

export default AddToCartComponent;
