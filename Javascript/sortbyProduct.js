/**
 * A function that takes in an array and returns a new sorted array
 */

const sortProduct = (array) => {
    let products = []
    for (i = 0; i < array.length; i++) {
        value = array[i] * (i+1)
        products.push(value)
    }
    products = products.sort((a, b) => a - b)
    console.log(products)
}

sortProduct([23, 2, 3, 4, 5]);