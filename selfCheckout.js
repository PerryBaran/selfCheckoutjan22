const scanItemBarcode = (catalogue, barcode) => {
  return catalogue.find((item) => {
    return barcode === item.barcode
  })
}

const addToBasket = (basket, item) => {
  basket.push(item)
}

const totalOfItems = (basket) => {
  return basket.reduce((acc, curr) => {
    return acc + curr.price
  }, 0)
}

const removeFromBasket = (basket, item) => {
  const index = basket.indexOf(item)
  basket.splice(index, 1)
}

const occurenceInBasket = (basket, item) => {
  return basket.filter((product) => {
    return product === item
  }).length
}

module.exports = { scanItemBarcode, addToBasket, totalOfItems, removeFromBasket, occurenceInBasket }