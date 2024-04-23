import React from 'react'
import ph from './4.png'

const Offers = () => {
    return (
        <>
            <section className="text-gray-600 bg-gray-300 body-font my-20">
                <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900">Exclusive Offers for You</h1>
                        <p className="mb-8 leading-relaxed">ONLY ON BEST SELLERS PRODUCTS</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Check Now</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={ph} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offers