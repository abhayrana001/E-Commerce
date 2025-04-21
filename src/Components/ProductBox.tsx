import Image from 'next/image'
import React from 'react'
import styles from '@/styles/product.module.css'


const ProductBox = ({ product }: {
  product: {
    id: number;
    image: string;
    title: string;
    price: number;
  }
}) => {
  return (
    <div className={`${styles.card} bg-white p-4 rounded-lg shadow-lg`}>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={150}
          className={`${styles.productImage} w-full h-48 object-contain rounded-md`}
        />
      <div className="mt-4">
        <h3 className="text-sm min-h-[70px] font-semibold text-blue-800">
          {product.title}
        </h3>
        <p className="text-gray-900 font-semibold mt-2">
          ${product.price}
        </p>
        <button className="mt-4 bg-fuchsia-500 text-white px-4 py-2 rounded hover:bg-fuchsia-600 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default ProductBox