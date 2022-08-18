class Cupon {

    constructor(id, cupon, discount = 0.1, active = true) {
        this.id = id
        this.cupon = cupon
        this.discount = discount
        this.active = active
    }

    info() {
        const cupon = {
            id: this.id,
            cupon: this.cupon,
            discount: this.discount,
            active: this.active
        }
        console.log(cupon)
    }
}

module.exports = Cupon