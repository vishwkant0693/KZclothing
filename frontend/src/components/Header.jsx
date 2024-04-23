import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState('shop')
  return (
    <>
      <header className=" body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl font-semibold">Edeals</span>
          </a>
          <nav className=" md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-medium">
            <a className="mr-5 hover:text-gray-900" onClick={()=>{setMenu("shop")}}><Link to={"/"}>Shop</Link>{menu === 'shop'?<hr/>:<></>}</a>
            <a className="mr-5 hover:text-gray-900" onClick={()=>{setMenu("Mens")}}><Link to={"/mens"}>Mens</Link>{menu === 'Mens'?<hr/>:<></>}</a>
            <a className="mr-5 hover:text-gray-900" onClick={()=>{setMenu("Womens")}}><Link to={"/womens"}>Womens</Link>{menu === 'Womens'?<hr/>:<></>}</a>
            <a className="mr-5 hover:text-gray-900" onClick={()=>{setMenu("Kids")}}><Link to={"/kids"}>Kids</Link> {menu === 'Kids'?<hr/>:<></>}</a>
          </nav>
          <div className="flex gap-2">
          <button className="inline-flex items-center bg-gray-400 border-0 py-1 px-3 hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to={"/cart"}>Cart</Link></button>
          <button className="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to={"/login"}>Log In</Link></button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;