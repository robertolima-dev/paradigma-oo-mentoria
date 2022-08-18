const Car = require('./Car')

class Model extends Car {

  constructor(brand, mod) {
    super(brand)
    this.model = mod
  }

  show() {
    return this.present() + ', it is a ' + this.model
  }
  
}

module.exports = Model