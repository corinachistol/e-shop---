import React from "react"
import { Money } from "../money/ui"


export function Product({productObject:{name,image, price}}){
    console.log(name, image, price)
   
    return(
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} style={{width:"200px"}} />

             <Money key={price.id}  productObject={price} />
    
            
        </div>
    )

}

