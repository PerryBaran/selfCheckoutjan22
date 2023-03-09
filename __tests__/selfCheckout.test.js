const { orange, pineapple, kiwi, apple, banana, catalogue } = require("../data/data")
const { scanItemBarcode, addToBasket, totalOfItems, removeFromBasket, occurenceInBasket } = require("../selfCheckout")

describe("selfCheckout", () => {
  //I would like to be able to scan an item using a barcode so its details can be found from products list (test data)
  test("returns an item with the barcode", () => {
    expect(scanItemBarcode(catalogue, orange.barcode)).toEqual(orange)
  })

  //I would like to be able to add an item to my basket.
  test("add to basket", () => {
    const basket = []
    
    addToBasket(basket, orange)

    expect(basket).toHaveLength(1)
    expect(basket[0]).toEqual(orange)
  })

  //I would like to be able to see the total price of all items in my basket.
  test("return total of items", () => {
    const basket = [pineapple, apple, kiwi]

    expect(totalOfItems(basket)).toEqual(pineapple.price + apple.price + kiwi.price)
  })

  //I would like to be able to remove an item from my basket.
  test("remove from basket", () => {
    const basket = [pineapple, apple, kiwi, banana]

    const length = basket.length

    removeFromBasket(basket, kiwi)

    expect(basket.length).toEqual(length - 1)
    expect(basket.find((item) => item === kiwi)).toBeUndefined()
  })

  test("number of times an item appears in the basket", () => {
    const basket = [pineapple, apple, kiwi, banana, banana]

    expect(occurenceInBasket(basket, banana)).toEqual(2)
    expect(occurenceInBasket(basket, kiwi)).toEqual(1)
  })
})