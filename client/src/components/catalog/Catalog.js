import { useEffect, useState } from "react"
import { getProducts } from "../product/api.js"
import { Product } from "../product/ui.js"

export function Catalog() {

    const [data, setData] = useState([ ])
   

    useEffect( () => {
        const products = getProducts()
        console.log(products)
        setData(products)
    },[])

    return (
        <div>
            <h1>List of Products</h1>
            <ol>
                <li> {data && data.map(product => 
                    <Product key={product.id} productObject={product} />
                    ) }
                </li>
            </ol>
        </div>
    )

    

}