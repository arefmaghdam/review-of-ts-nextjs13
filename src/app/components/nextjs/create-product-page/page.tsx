import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const CreateProductPage: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // in this step, we want to develop product page, so we create app/product/[id]/page.tsx file and:

    import {items} from "@/data/items"
    import React, { FC } from "react";
    import Link from "next/link"
    import Image from "next/image"
    import AddToCart from "@/components/AddToCart"
    
    const ProductPage: FC = ({params: {id}}) => {
      const product = items.products.find((product) => product.id === id)
      return (
        <div className="w-3/5 m-auto py-8 px-16 rounded-lg bg-slate-900">
            <div className="mb-6 text-center">
                <Link href="/">بازگشت به فروشگاه</Link>
            </div>
            <div className="grid md:grid-cols-2">
                <Image 
                    src={product.image}
                    width={400}
                    height={400}
                    className="rounded-lg"
                />
                <div className="p-5 text-right">
                    <div>
                        <div>
                            <h1 className="text-lg">{product.title}</h1>
                        </div>
                        <div>
                            <h2 className="text-lg my-4 rtl">{product.price + " "}تومان</h2>
                        </div>
                    </div>
                    <AddToCart product={product} />
                </div>
            </div>
        </div>
      )
    }
    
    export default ProductPage
    
      `}
      />
    </div>
  );
};

export default CreateProductPage;
