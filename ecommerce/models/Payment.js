const ShoppingCart = require("./ShoppingCart")

class Payment {

    constructor(id, shoppingCart = ShoppingCart, paid = false, method = 'credit_card', installments = 1,  active = true) {
        this.id = id
        this.shoppingCart = shoppingCart
        this.paid = paid
        this.method = method
        this.installments = method !== 'credit_card' ? 1 : installments
        this.active = active
    }

    info() {
        console.log('********** PAYMENT ************')
        const payment = {
            id: this.id,
            shoppingCart: this.shoppingCart,
            paid: this.paid,
            method: this.method,
            installments: this.installments,
            active: this.active,
            valueWithoutDiscont: this.valueWithoutDiscont(),
            valueWithDiscount: this.valueWithDiscount(),
        }
        console.log(payment)
    }

    valueWithDiscount() {
        let arrayValues = []
        this.shoppingCart.item.map(item => {
            arrayValues.push(item.valueItem())
        })
        var total = arrayValues.reduce((acc, el) => {
            return acc += el;
        }, 0)
        return total - (total * this.shoppingCart.cupon.discount)
    }

    valueWithoutDiscont() {
        let arrayValues = []
        this.shoppingCart.item.map(item => {
            arrayValues.push(item.valueItem())
        })
        var total = arrayValues.reduce((acc, el) => {
            return acc += el;
        }, 0)
        return total
    }

    setPaid(paid) {
        this.paid = paid
        return this.paid
    }
}

module.exports = Payment