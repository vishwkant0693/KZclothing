import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Addproducts from '../../components/Addproducts'
import ProductList from '../../components/ProductList'

const Admin = () => {
  return (
    <>
        <div className="flex max-md:flex-col">
            <Sidebar />
            <Routes >
                <Route path='/addproducts' element={<Addproducts />} />
                <Route path='/productlist' element={<ProductList />} />
            </Routes>
        </div>
    </>
  )
}

export default Admin