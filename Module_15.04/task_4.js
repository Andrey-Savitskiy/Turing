/*
Задача 4. "Полифил map"
Реализуйте функцию, которая принимает на вход массив и функцию-
обработчик callback. Возвращает новый массив, к каждому элементу 
которого применена функция-обработчик. 
*/


function array_decorator(array, callback_function) {
    let result_list = array.map(callback_function)

    return result_list
}

let vector = [1, 6, 10, 2, 7, 3, 2]

console.log(array_decorator(vector, (x => x + 1)))
