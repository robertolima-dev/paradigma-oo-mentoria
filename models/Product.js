class Product {

    constructor(id, name, description, value, inventory, active = true) {
        this.id = id
        this.name = name
        this.description = description
        this.value = value
        this.inventory = inventory
        this.active = active
    }

    info() {
        const product = {
            id: this.id,
            name: this.name,
            description: this.description,
            value: this.value,
            inventory: this.inventory,
            active: this.active,
        }
        console.log(product)
    }
}

module.exports = Product