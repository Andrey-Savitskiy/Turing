/*
Уникальность всех символов в строке
Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр 
должен учитываться: ‘a’ и ‘A’ разные символы.

Input: String
Output: Boolean

function isUnique(string) {
// todo
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false
*/


function is_unique(text) {
    const set = new Set(text) // сори за читерство хд
    
    if (set.size === text.length) {
        return true
    } 

    return false
}


console.log(is_unique('abcdef')) // -> true
console.log(is_unique('1234567')) // -> true
console.log(is_unique('abcABC')) // -> true
console.log(is_unique('abcadef')) // -> false
