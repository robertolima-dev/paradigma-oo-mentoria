const Product = require('./Product')

class Item {

    constructor(id, product = Product, UserId, amount) {
        this.id = id
        this.product = product
        this.UserId = UserId
        this.amount = amount
    }

    info() {
        const item = {
            id: this.id,
            product: this.product,
            UserId: this.UserId,
            amount: this.amount,           
        }
        console.log(item)
    }

    valueItem() {
        return this.amount * this.product.value
    }
}

module.exports = Item