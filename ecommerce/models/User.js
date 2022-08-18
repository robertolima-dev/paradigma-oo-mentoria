const Address = require('./Address')

class User {

    constructor(id, name, email, address = Address) {
        this.id = id
        this.name = name
        this.email = email
        this.address = address
    }

    info() {
        const user = {
            id: this.id,
            name: this.name,
            email: this.email,
            address: this.address
        }
        console.log(user)
    }
}

module.exports = User