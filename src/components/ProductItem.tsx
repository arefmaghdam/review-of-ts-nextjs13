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
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg">{product.title}</h2>
        </Link>
        <p className="mt-2 rtl text-slate-300">{product.price} تومان</p>
        <AddToCart product={product} />
      </div>
    </div>
  );
};

export default ProductItem;
