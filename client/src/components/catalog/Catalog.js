import { useEffect, useState } from "react"
import { getProducts } from "../product/api"
import { Product } from "../product/ui"

export function Catalog() {

    const [data, setData] = useState([ ])
    console.log(data)

    useEffect( () => {
        const products = getProducts()
        setData(products)
    },[])

    return (
        <div>
            <h1>List of Products</h1>
            <ol>
                <li> { data.map(product => 
                    <Product key={product.id} productObject={product} />
                    ) }
                </li>
            </ol>
        </div>
    )

    

}