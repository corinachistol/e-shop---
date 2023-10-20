
export function Product(props){
    return(
        <div>
            <h2>{props.productObject.name}</h2>
            <p>{props.productObject.price}</p>
        </div>
    )

}