/*
Плоский массив
Напишите функцию, принимающая массив с вложенными массивами и распакуйте в 
результирующий плоский массов. В результате должны получить новый одномерный 
массив. (В реализации может помочь рекурсия) 

Input: Array
Output: Array
function flatten(array) {
  // todo
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]
*/


var result = []

function unpacking_list(vector, is_cheating = false) {
    if (is_cheating) {
        const result = vector.flat(Infinity) // снова читерство, сори
        return result
    } else {
        vector = vector.forEach(function(item){
            if(Array.isArray(item)){
              return unpacking_list(item);
            } else {
                result.push(item)
            }
        })
        
        return result
    }
}


console.log(unpacking_list([[1]]))
result = []
console.log(unpacking_list([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]
result = []
console.log(unpacking_list([[1], [[2, 3]], [[['4']]]])) // -> [1, 2, 3, '4']
result = []
console.log(unpacking_list([[1], [[2, 3]], [[['A']]]])) // -> [1, 2, 3, 'A']
