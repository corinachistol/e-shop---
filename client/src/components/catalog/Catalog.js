import { useEffect, useState } from "react"
import { getProducts } from "../product/api.js"
import { Product } from "../product/ui.js"

export function Catalog() {

    const [catalog, setCatalog] = useState([ ])
   

    useEffect( () => {

        const products = getProducts()
        console.log(products)
        setCatalog(products)
    },[])

    return (
        <div>
            <h1>List of Products</h1>
            <ol>
                <li> 
                    {products && products.map(product => 
                    <Product key={product.id} productObject={product} />
                    ) } 
                 </li>
            </ol>
        </div>
    )

    

}