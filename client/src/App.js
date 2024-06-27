
import {React, useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from './components/products';
import Data from "./Data.json"

function App() {

  const[products , setproducts] = useState(Data)
  console.log(Data)
  return (
    <div className="App">
      <Header/>
      <div className='products_section'>
        <Products products = {products}/>
        <div className='filter_side'> filter_side </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
