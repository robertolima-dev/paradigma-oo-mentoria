const Product = require('./Product')
const User = require('./User')

class Item {

    constructor(id, product = Product, user = User, amount) {
        this.id = id
        this.product = product
        this.user = user
        this.amount = amount
    }

    info() {
        const item = {
            id: this.id,
            product: this.product,
            user: this.user,
            amount: this.amount,           
        }
        console.log(item)
    }
}

module.exports = Item