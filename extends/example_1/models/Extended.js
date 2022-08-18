const Base = require('./Base')

class Extended extends Base {
    
  getBase(number) {
    return super.baseGetSum(number)
  }
}

module.exports = Extended