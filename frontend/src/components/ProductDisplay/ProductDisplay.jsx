import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    console.log(props);
    return (
        <>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-10 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.img} />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">{product.desc}</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                            <div class="flex mb-4">
                            </div>
                            <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            <div class="flex items-center py-3">
                                <span class="mr-3 font-semibold">Size</span>
                                <div class="relative">
                                    <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-baseline py-2">
                                <span class="title-font font-medium text-2xl text-gray-900 pr-3">₹ {product.new}</span>
                                <span className='line-through opacity-60'>{product.old}</span>
                            </div>
                            <div className="flex gap-4">
                                <button className='px-3 py-2 border border-green-700' onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDisplay