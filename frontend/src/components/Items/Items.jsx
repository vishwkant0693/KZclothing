import React from 'react'
import { Link } from 'react-router-dom'

const Items = (props) => {
    return (
        <>
            <div className="px-4">
                <Link to={`/product/${props.id}`} onClick={window.scrollTo(0,0)}>
                    <div className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={props.img} />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{props.desc}</h3>
                        <h2 className="text-gray-900 title-font text-md font-medium">{props.name}</h2>
                        <div className="flex mt-1 gap-3">
                            <p>₹ {props.new}</p>
                            <p className='line-through opacity-60'>{props.old}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Items