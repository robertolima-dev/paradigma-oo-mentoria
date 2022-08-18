class Address {

    constructor(id, street, number, zipcode, city, state, country, active = true) {
        this.id = id
        this.street = street
        this.number = number
        this.zipcode = zipcode
        this.city = city
        this.state = state
        this.country = country
    }

    info() {
        const address = {
            id: this.id,
            street: this.street,
            number: this.number,
            zipcode: this.zipcode,
            city: this.city,
            state: this.state,
            country: this.country,
        }
        console.log(address)
    }
}

module.exports = Address