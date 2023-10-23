import { useEffect, useState } from "react"
import { getProducts } from "../product/api"
import { Product } from "../product/ui"

export function Catalog() {

    const [productObject, setProduct] = useState(null)

    //render the products

    //getInitialData

    useEffect( () => {
        setProduct(productObject)

    },[productObject])

    

}