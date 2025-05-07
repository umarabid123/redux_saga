import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addCart, emptyCart, removeCart } from "./redux/action";
import { productAction } from "./redux/productAction";

function App() {
  const  dispatch = useDispatch()

  const results = useSelector((state) => state.cartData)
  console.log('results: ', results);
  const product ={
    name:'Umar',
    lastName:"Abid"
  }
  return (
    <div className="App">
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8f8f8', borderBottom: '1px solid #ddd' }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Shopping Cart:{results.length}</h1>
        <button onClick={() => dispatch(addCart(product))} style={{ padding: '0.5rem 1rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add to Cart
        </button>
        <button onClick={() => dispatch(removeCart(product.name))} style={{ padding: '0.5rem 1rem', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Remove to Cart
        </button>
        <button onClick={() => dispatch(emptyCart())} style={{ padding: '0.5rem 1rem', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Remove to Cart
        </button>

        <button onClick={() => dispatch(productAction())} style={{ padding: '0.5rem 1rem', backgroundColor: 'cyan', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Product List
        </button>
      </header>
    </div>
  );
}

export default App;
