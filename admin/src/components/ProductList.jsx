import React, { useEffect, useState } from 'react'

const ProductList = () => {

  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchProducts();
  },[])

  const removeProduct = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchProducts();
  }

  return (
    <>
      <table className="w-full max-md:container mx-auto text-sm text-left rtl:text-right m-5">
        <thead className='text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope="col" class="px-6 py-3">Products</th>
            <th scope="col" class="px-6 py-3">Title</th>
            <th scope="col" class="px-6 py-3">Old Price</th>
            <th scope="col" class="px-6 py-3">New Price</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Remove</th>
          </tr>
        </thead>
        {
          allProducts.map((product, index) => {
            
              return (
                <tbody key={index} >
                  <tr className='border-b '>
                    <td className='px-8'><img src={product.image} alt="" width={60} /> </td>
                    <td className='px-8'><p>{product.name}</p> </td>
                    <td className='px-8'><p>₹ {product.old}</p> </td>
                    <td className='px-8'><p>₹ {product.new}</p> </td>
                    <td className='px-8'><p>{product.category}</p> </td>
                    <td className='px-8'><button onClick={() => { removeProduct(product.id) }}>X</button> </td>
                  </tr>
                </tbody>
              );
          })
        }
      </table>
    </>
  )
}

export default ProductList