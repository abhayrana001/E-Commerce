import React from 'react'
import Container from '../Container'
import ProductBox from '../ProductBox'

type Product = {
    id: number;
    image: string;
    title: string;
    price: number;
  };

const FeaturedProducts = async () => {
    let data;

    try {
        const res = await fetch('https://fakestoreapi.in/api/products?limit=5');
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        data = await res.json();
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    return (
        <div className='p-3'>
            <Container>
                <h1 className='text-center font-bold text-3xl'>
                    Featured Products
                </h1>
                <div className='my-4 grid grid-cols-5 gap-3'>
                    {data?.products?.map((item: Product) => {
                        return (
                            <ProductBox key={item.id} product={item} />
                        )
                    })}

                </div>
            </Container>
        </div>
    )
}

export default FeaturedProducts