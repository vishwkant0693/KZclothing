import React from 'react'
import data from '../Assets/data'
import Items from '../Items/Items'

const Popular = () => {
    return (
        <>
            <section className="">
                <div className="">
                <h1 className='text-5xl font-bold text-center py-8'>Trending</h1>
                <hr />
                    <div className="w-4/5 pt-4 mx-auto">
                        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 mx-auto">
                        {data.map((item, i) => {
                            return <Items key={i} id={item.id} name={item.name} desc={item.desc} img={item.img} new={item.new} old={item.old} />
                        })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Popular