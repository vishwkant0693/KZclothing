import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Items from '../components/Items/Items';

const Category = (props) => {
  const { all_products } = useContext(ShopContext);
  console.log(props.category);
  return (
    <>
      <div className="category">
        <div className="text-5xl capitalize font-bold text-center py-8">{props.category}</div>
        <hr />
        <div className="w-4/5 pt-4 mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {
              all_products.map((item, i) => {
                if (props.category === item.category) {
                  return <Items key={i} id={item.id} name={item.name} desc={item.desc} img={item.img} new={item.new} old={item.old} />
                }
                else {
                  return null
                }
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Category