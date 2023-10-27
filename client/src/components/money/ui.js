import React from "react";

export function Money({productObject : {amount, currency} } ) {
    return <p> {amount} {currency}</p>
}