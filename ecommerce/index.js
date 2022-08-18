const User = require('./models/User')
const Product = require('./models/Product')
const Address = require('./models/Address')
const Item = require('./models/Item')
const ShoppingCart = require('./models/ShoppingCart')
const Cupon = require('./models/Cupon')
const Payment = require('./models/Payment')

const product1 = new Product(1, 'Caneta azul', 'Caneta bic azul', 12.5, 18)
const product2 = new Product(2, 'Caneta vermelha', 'Caneta bic vermelha', 12.5, 22)
const product3 = new Product(3, 'Caneta quatro cores', 'Caneta bic quatro cores', 25.8, 10)

const address1 = new Address(1, 'Rua Teodoro Sampaio', 123, 09900888, 'São Paulo', 'SP', 'BR')
const address2 = new Address(1, 'Rua Santa Efigenia', 57, 01012000, 'São Paulo', 'SP', 'BR')
const address3 = new Address(1, 'Rua Santo Amaro', 870, 02522021, 'São Paulo', 'SP', 'BR')

const user1 = new User(1, 'Luci', 'luci@gmail.com', address1)
const user2 = new User(2, 'Bruna', 'bruna@gmail.com', address2)
const user3 = new User(3, 'Sergio', 'sergio@gmail.com', address3)

const item1 = new Item(1, product1, user1.id, 2)
const item2 = new Item(2, product2, user1.id, 3)
const item3 = new Item(3, product3, user1.id, 1)

const cupon1 = new Cupon(1, 'DCF546')
const cupon2 = new Cupon(2, 'HGT657', 0.15)
const cupon3 = new Cupon(3, 'DWA098', 0.2)

const sc1 = new ShoppingCart(1, [item1, item2, item3], user1, cupon1)

const payment1 = new Payment(1, sc1, false, 'credit_card', 8)

// user1.info()
// user2.info()
// user3.info()

// address1.info()
// address2.info()
// address3.info()

// product1.info()
// product2.info()
// product3.info()

// item1.info()
// item2.info()
// item3.info()

// console.log('******************* Atualizacao de estoque ********************')

// product1.setInventory(item1.amount)
// product2.setInventory(item2.amount)
// product3.setInventory(item3.amount)

// product1.info()
// product2.info()
// product3.info()

// sc1.info()

// payment1.info()

// const myInterval = setInterval(() => {
//     console.log('Finalize sua compra, seu tempo está se esgotando...')
// }, 1000)

// setTimeout(() => {
//     product1.setCancelShoppingCart(item1.amount)
//     product2.setCancelShoppingCart(item2.amount)
//     product3.setCancelShoppingCart(item3.amount)
//     console.log('******************* Cancelando carrinho ********************')
//     product1.info()
//     product2.info()
//     product3.info()
//     console.log('Sinto muito, seu carrinho foi cancelado!')
//     clearInterval(myInterval)
// }, 10000)

