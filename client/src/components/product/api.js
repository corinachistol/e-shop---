import { Product } from "./model.js"



export async function getProducts() {

   const response = await fetch('http://localhost:3000/')
   const products = await response.json()
//    console.log(products)
  
    
    return products.map(product => {
        return new Product(product)
    })
}


// const products = [
//     {id:0, name:"IPhone", image: "https://enter.online/images/product/2023/03/enter-apple-iphone-11-96316.webp", price:{id:1, amount:1000, currency:"USD"}},
//     {id:1, name:"Samsung", image: "https://enter.online/images/product/2023/08/enter-televizor-samsung-ue43au7170uxua-10536.webp", price: {id:2, amount:800, currency:"USD"}},
//     {id:2, name:"MacOs", image:"https://enter.online/images/product/2023/06/enter-apple-macbook-air-15-2023-257607.webp", price: {id:3, amount:1500, currency:"USD"}},
    
// ]

