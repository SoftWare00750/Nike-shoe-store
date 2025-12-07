import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data: { attributes: p, id } }) => {
  const discount = getDiscountedPricePercentage(p.original_price, p.price);
  
  return (
    <Link
      className="product-card transform overflow-hidden bg-white duration-200 cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl group"
      href={`/product/${p.slug}`}
    >
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 aspect-square overflow-hidden">
        <Image
          width={500}
          height={500}
          src={p?.thumbnail.data.attributes.url}
          alt={p.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            {discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-5 space-y-3">
        <h2 className="text-lg font-bold text-black/[0.9] group-hover:text-red-500 transition-colors">
          {p.name}
        </h2>
        <p className="text-sm text-gray-600">{p.subtitle}</p>
        
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold text-black/[0.9]">
            &#8377; {p.price}
          </p>
          {p.original_price && (
            <>
              <p className="text-base font-medium line-through text-gray-500">
                &#8377; {p.original_price}
              </p>
            </>
          )}
        </div>

        <div className="pt-2">
          <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-full font-semibold uppercase text-sm hover:from-red-600 hover:to-pink-600 transition-all transform hover:scale-105 active:scale-95 shadow-md">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;