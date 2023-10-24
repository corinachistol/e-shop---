import { useEffect, useState } from "react"
import { getProducts } from "../product/api.js"
import { Product } from "../product/ui.js"

export function Catalog() {

    const [catalog, setCatalog] = useState([ ])
   

    useEffect( () => {

        //Varianta1
        // (async () => {
        //     const products = await getProducts()
        //     setCatalog(products)
        //     console.log(products)
        // })()

        //Varianta2
        const loadProducts = async() => {
            const products = await getProducts()
            setCatalog(products)
            console.log(products)
        }
        loadProducts()

    },[])

    return (
        <div>
            {catalog && catalog.map(product => 
                    <Product key={product.id} productObject={catalog} />
                    ) } 
          
        </div>
    )
}