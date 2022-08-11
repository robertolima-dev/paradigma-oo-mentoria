const Item = require('./Item')
const Cupon = require('./Cupon')

class ShoppingCart {

    constructor(id, item = [Item], cupon = Cupon, active = true) {
        this.id = id
        this.item = item
        this.cupon = cupon
        this.active = active
    }

    info() {
        const shoppingCart = {
            id: this.id,
            item: this.item,
            cupon: this.cupon,
            active: this.active,
            discount: this.discount()
        }
        console.log(shoppingCart)
    }

    discount() {
        console.log(this.cupon)
        return `O seu desconto é de ${this.cupon.discount * 100}%`
    }
}

module.exports = ShoppingCart