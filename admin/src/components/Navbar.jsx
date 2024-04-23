import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className=" shadow-lg mb-2">
                <div className=" container mx-auto flex justify-between items-center py-2">
                    <div className="text-3xl">
                        <h1>Edeal - Admin</h1>
                    </div>
                    <div className="text-2xl">
                        <button className='btn'>Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar