import {useState, useEffect} from "react"
import Header from "./Header"
import products from "./products.json"
import Product from "./Product"
import Basket from "./Basket"
import './style.css'
function App() {
  const [money, setMoney] = useState(1000000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
 const resetBasket =() =>{
   setBasket([])
 }
 useEffect(() =>{
   setTotal( basket.reduce((acc, item)=>{
    return acc + (item.amount * (products.find(product => product.id === item.id).price))
   },0))
 }, [basket])
 
  return (
    <div className="App">
      <Header money={money}
              setMoney={setMoney}
              total={total}
      />
      {products.map(product =>(
        <Product product={product}
                  basket={basket}
                  setBasket={setBasket}
                  key={product.id}
                  total={total}
                  money={money}/>
                
      ))}
      
     {total > 0 && (
        <Basket resetBasket={resetBasket} total={total} products={products} basket={basket}/>
     )}
    </div>
  );
}

export default App;
