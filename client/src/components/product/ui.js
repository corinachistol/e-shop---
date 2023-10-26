import React from "react"
import { Money } from "../money/ui"
import { getMoney } from "../money/api"

export function Product({productObject:{name,image,price:{amount,currency}}}){
    console.log(name,amount,currency)

    // const getMoney = await getMoney()
    // const products = await getMoney.json()
    // console.log(products)
    
    return(
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} style={{width:"200px"}} />
            <p>{amount} {currency}</p>

            {/* { products.map( (product,index) => {
                const productPrice = product[index]
                console.log(productPrice)
                return <Money key={productPrice.id} price={productPrice.price}/>
            }) } */}
            
        </div>
    )

}

// export function Product({productObject:{name,price}}){
//     return(
//         <div>
//             <h2>{name}</h2>
//             <p>{price}</p>
//         </div>
//     )

// }