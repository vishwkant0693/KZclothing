import React from 'react'
import hero from './hero.png'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <section className="text-gray-600 bg-slate-300 body-font">
                <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p className=" sm:text-3xl text-2xl mb-4 font-medium text-gray-900">NEW ARRIVALS
                        </p>
                        <h1 className="mb-8  text-6xl font-bold">
                        new collections for everyone</h1>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Latest Collection</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={hero} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero