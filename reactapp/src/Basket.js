import React from 'react'
import BasketItem from './BasketItem'

const Basket = ({basket,products,total,resetBasket}) => {
    return (
       <>
       {
           basket.map(item =>(
              <BasketItem product={products.find(p=>p.id === item.id)} item={item}/>
           ))
       }
       <div>
           Toplam:${total}
       </div>
       <button onClick={resetBasket}>Sepeti Sıfırla</button>
       </>
    )
}

export default Basket
