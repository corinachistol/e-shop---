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

    // asa nu functioneaza
    return <>
        {catalog.map( product =>{
            return <Product key={product.id} productObject={product}/>
        } )}
          </>

    // return (
    //     <ol>
    //         { catalog.map(product => (
    //             <li key ={product.id}>
    //             { <Product key={product.id} productObject={product} /> }
    //                 {product.name} {product.price.amount} {product.price.currency}
    //                 <img style={{width:"200px"}} src={product.image} alt={product.name} />
    //             </li>
    //         )) } 
    //     </ol>
    // )
}