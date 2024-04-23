import React from 'react'

const Breadcrum = (props) => {
    const { product } = props;
    console.log(product);
    return (
        <>
            <div className="container mx-auto pl-10 pt-10">
                Home → Shop → <span>{product.category}</span> → <span>{product.name}</span>
            </div>
        </>
    )
}

export default Breadcrum