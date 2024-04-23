import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
        <div className="bg-slate-200 flex md:flex-col gap-5 py-10 justify-center md:h-screen items-center h-30 md:max-w-[250px] shadow-md w-full">
        <Link to={'/addproducts'} className=''>
            <div className="">
                <button>Add Prod</button>
            </div>
        </Link>
        <Link to={'/productlist'} className=''>
            <div className="">
                <button>Product List</button>
            </div>
        </Link>
        </div>
    </>
  )
}

export default Sidebar