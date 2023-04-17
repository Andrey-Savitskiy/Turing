function array_decorator(array, callback_function) {
    let result_list = array.map(callback_function)

    return result_list
}

let vector = [1, 6, 10, 2, 7, 3, 2]

console.log(array_decorator(vector, (x => x + 1)))
