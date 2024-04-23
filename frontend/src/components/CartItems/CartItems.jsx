import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
    const { all_products, cartItem, removeFromCart ,getTotalAmount } = useContext(ShopContext);
    return (
        <>
            <table className="container mx-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className='text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope="col" class="px-6 py-3">Products</th>
                        <th scope="col" class="px-6 py-3">Title</th>
                        <th scope="col" class="px-6 py-3">Price</th>
                        <th scope="col" class="px-6 py-3">Quantity</th>
                        <th scope="col" class="px-6 py-3">Total</th>
                        <th scope="col" class="px-6 py-3">Remove</th>
                    </tr>
                </thead>
                {
                    all_products.map((e) => {
                        if (cartItem[e.id] > 0) {
                            return (
                                <tbody key={e.id}>
                                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                        <td className='px-6 py-4'><img src={e.img} alt="" width={60} /> </td>
                                        <td className='px-6 py-4'><p>{e.name}</p> </td>
                                        <td className='px-6 py-4'><p>₹ {e.new}</p> </td>
                                        <td className='px-6 py-4'><button>{cartItem[e.id]}</button> </td>
                                        <td className='px-6 py-4'><p>₹ {e.new * cartItem[e.id]}</p> </td>
                                        <td className='px-6 py-4'><button onClick={() => { removeFromCart(e.id) }}>X</button> </td>
                                    </tr>
                                </tbody>
                            );
                        }
                        return null;
                    })
                }

            </table>
            <div className="mx-10 py-10 w-2/5">
                <h1 className='text-xl font-bold'>Total Amount</h1>
                <div className="flex py-3 justify-between">
                    <h3>Subtotal</h3>
                    <p>₹ {getTotalAmount()}</p>
                </div>
                <div className="flex py-3 justify-between">
                    <h3>Shipping Fee</h3>
                    <p>Free</p>
                </div>
                <div className="flex py-3 justify-between">
                    <h3>Total</h3>
                    <p>₹ {getTotalAmount()}</p>
                </div>
                <button className='px-4 my-5 py-2 bg-amber-900'>Proceed To Checkout</button>
            </div>
        </>
    )
}

export default CartItems