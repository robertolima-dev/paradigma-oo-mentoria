const Item = require('./Item')
const Cupon = require('./Cupon')
const User = require('./User')

class ShoppingCart {

    constructor(id, item = [Item], customer = User, cupon = Cupon, active = true) {
        this.id = id
        this.item = item
        this.cupon = cupon
        this.customer = customer
        this.active = active
    }

    info() {
        const shoppingCart = {
            id: this.id,
            item: this.item,
            cupon: this.cupon,
            customer: this.customer,
            active: this.active,
            discount: this.discount()
        }
        console.log(shoppingCart)
    }

    discount() {
        return `O seu desconto é de ${this.cupon.discount * 100}%`
    }
}

module.exports = ShoppingCart