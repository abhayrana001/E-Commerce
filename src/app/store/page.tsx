import Container from '@/Components/Container';
import ProductBox from '@/Components/ProductBox';
import React from 'react'

type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
};

const page = async () => {
  let data: { products: Product[] } = { products: [] };

  try {
    const res = await fetch('https://fakestoreapi.in/api/products');
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
          Welcome to the Store 
        </h1>
        <div>
          <div>

          </div>

          <div className='my-4 grid grid-cols-5 gap-3'>
            {data?.products?.map((item: Product) => {
              return (
                <ProductBox key={item.id} product={item} />
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default page