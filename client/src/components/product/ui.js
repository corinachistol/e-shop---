
export function Product(props){
    return(
        <div>
            <h2>{props.productObject.name}</h2>
            <p>{props.productObject.price}</p>
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