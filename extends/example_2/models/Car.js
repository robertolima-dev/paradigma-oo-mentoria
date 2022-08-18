class Car {

  constructor(brand) {
    this.carname = brand
  }
  
  present() {
    return 'I have a ' + this.carname
  }
}

module.exports = Car