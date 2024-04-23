import React from 'react'
import data from '../Assets/data'
import Items from '../Items/Items'

const RelatedProducts = () => {
    return (
        <>
            <div className="container mx-auto">
                <h1 className='px-4 py-3 text-xl font-semibold'>Related Products</h1>
                <div className="flex">
                    {data.map((item,i)=> {
                        return <Items key={i} id={item.id} name={item.name} desc={item.desc} img={item.img} new={item.new} old={item.old} />
                    })}
                </div>
            </div>
        </>
    )
}

export default RelatedProducts