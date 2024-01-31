import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const ProductItem: FC<any> = ({ product }: any) => {
  return (
    <div className="rounded-lg bg-slate-900 m-5">
      <Image
        src={product.image}
        alt="عکس محصول"
        width={150}
        height={150}
        className="rounded-t-lg object-cover w-full"
      />
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg">{product.title}</h2>
        </Link>
        <p className="mt-2 rtl text-slate-300">{product.price} تومان</p>
        <button className="border border-slate-300 text-slate-300 rounded-lg px-3 py-2 mt-3 hover:bg-slate-800">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
