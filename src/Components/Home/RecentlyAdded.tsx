"use client"
import React, { useEffect, useState } from 'react'
import Container from '../Container'
import ProductBox from '../ProductBox'
import axios from 'axios'

type Product = {
    id: number;
    image: string;
    title: string;
    price: number;
  };

const RecentlyAdded = () => {
    const [productData, setproductData] = useState<Product[]>([])

    const fetchdata = async () => {
        const result = await axios.get("https://fakestoreapi.in/api/products?limit=5")
        setproductData(result?.data?.products)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <div className='bg-gray-100 p-3'>
            <Container>
                <h1 className='text-center font-bold text-3xl'>
                    Recently Added Products
                </h1>
                <div className='my-4 grid grid-cols-5 gap-3'>
                    {productData?.map((item, index) => {
                        return (
                            <ProductBox key={item.id} product={item} />
                        )
                    })}

                </div>
            </Container>
        </div>
    )
}

export default RecentlyAdded