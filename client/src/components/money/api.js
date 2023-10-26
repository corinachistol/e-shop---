import { Money } from "./model.js";

export async function getMoney() {
    const response = await fetch('http://localhost:3000/')
    const products = await response.json()
    console.log(products)

    return products.map(product=>{
        const price = product.price
        console.log(price)
        return new Money(price)
    })
}