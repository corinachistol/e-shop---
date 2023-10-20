import { Product } from "./Product.js"


export function getProducts() {

    const products = [
        {id:0, name:"IPhone", price: 1000},
        {id:1, name:"Samsung", price: 8000},
        {id:2, name:"MacOs", price: 1500},
        
    ]
    
    return products.map(product => {
        return new Product(product)
    })
}

