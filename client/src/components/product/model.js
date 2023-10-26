import { Money } from "../money/model.js"

export class Product{
    constructor( {id,name, image, price} ) {
        this.id = id
        this.name = name
        this.image = image
        this.price = price

    }
}

// new Money({id, amount, currency})


