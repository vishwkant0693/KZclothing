import React from 'react'
import Items from '../Items/Items'
import new_data from '../Assets/NewCollection'

const NewCollection = () => {
  return (
    <>
        <section className="">
                <div className="">
                <h1 className='text-5xl font-bold text-center py-8'>New Collections</h1>
                <hr />
                    <div className="pt-4 w-4/5 mx-auto">
                        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 mx-auto">
                        {new_data.map((item, i) => {
                            return <Items key={i} id={item.id} name={item.name} desc={item.desc} img={item.img} new={item.new} old={item.old} />
                        })}
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default NewCollection