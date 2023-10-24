export class Product{
    constructor( {id,name, image, price} ) {
        this.id = id
        this.name = name
        this.image = image
        this.price = new Money(price.amount, price.currency)

    }
}

    // this.price = new Money(price.id, price.amount, price.currency)

class Money{
    constructor( amount, currency ) {
        this.amount = amount
        this.currency = currency
    }
}