import { getProducts } from "./shop/components/product/api.js";
import { Product } from "./shop/components/product/ui.js";

 function App() {
  const products = getProducts()
  console.log(products)

  return (
    <div className="App">
      <h1>E-shop-front</h1>

      { products.map(product => 
      <Product key={product.id} productObject={product} />
      ) }

    </div>
  );
}

export default App;
