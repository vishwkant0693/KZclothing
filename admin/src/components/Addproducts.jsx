import React, { useState } from 'react'

const Addproducts = () => {

  const [image, setImage] = useState(false);
  const [productDetails, steProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new: "",
    old: "",
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  const changeHandler = (e) => {
    steProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product = async () => {
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);

    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json'
      },
      body:formData,
    }).then((res)=>res.json()).then((data)=>{responseData=data});

    if(responseData.success)
    {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          "Content-Type":"application/json",
        },
        body:JSON.stringify(product),
      }).then((res)=>res.json()).then((data)=>{
        data.success?alert("Product Added Successfully !!"):alert("Failed !!")
      })
    }

  }

  return (
    <>
      <div className='w-full md:overflow-y-auto p-10 h-screen'>
        <div className="space-y-12">
          <h2 className="text-base font-semibold leading-7 text-gray-700">Add Product</h2>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-700">
                Product Title
              </label>
              <div className="mt-2">
                <input
                  value={productDetails.name}
                  onChange={changeHandler}
                  type="text"
                  name="name"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="old" className="block text-sm font-medium leading-6 text-gray-700">
                Product Price
              </label>
              <div className="mt-2">
                <input
                  value={productDetails.old}
                  onChange={changeHandler}
                  type="text"
                  name="old"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="new" className="block text-sm font-medium leading-6 text-gray-700">
                Offer Price
              </label>
              <div className="mt-2">
                <input
                  value={productDetails.new}
                  onChange={changeHandler}
                  name="new"
                  type="text"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-700">
                Category
              </label>
              <div className="mt-2">
                <select
                  value={productDetails.category}
                  onChange={changeHandler}
                  id="category"
                  name="category"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="Mens">Mens</option>
                  <option value="Womens">Womens</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <div className="border-b border-gray-700/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-700">
                      Cover photo
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-700/25 px-6 py-10">
                      <div className="text-center">
                        <div className="mt-4 flex text-sm leading-6 text-black">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-400 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <img src={image ? URL.createObjectURL(image) : ""} alt="Upload" />

                          </label>
                          <input value={productDetails.image}
                            id="file-upload" onChange={imageHandler} name="image" type="file" className="sr-only" hidden />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full mb-10">
              <button onClick={()=>{Add_Product()}} className='px-3 py-2 bg-slate-800 text-white'>Add Product</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Addproducts