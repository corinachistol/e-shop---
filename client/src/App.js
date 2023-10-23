import { Catalog } from "./components/catalog/Catalog.js";
import { getProducts } from "./components/product/api.js";
import { Product } from "./components/product/ui.js";

 function App() {
  const products = getProducts()
  console.log(products)

  return (
    <div className="App">
      <h1>E-shop-front</h1>
      <Catalog />

      {/* { products.map(product => 
      <Product key={product.id} productObject={product} />
      ) } */}

    </div>
  );
}

export default App;
