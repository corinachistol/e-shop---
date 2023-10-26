import React from "react"

export function Money({productObject:{ price :{ amount,currency} } }) {
    console.log(amount,currency)
    return <p> {amount} {currency}</p>
}