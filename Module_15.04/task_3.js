/*
Задача 3. "Средний возраст"
Напишите функцию, которая принимает массив объектов со свойством age, 
которое хранит число - возраст пользователя, и возвращает средний возраст 
всех пользователей.
*/


class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}


function average_age_counter(human_list) {
    let average_age = human_list.reduce((average_age, human) => average_age + human.age, 0) / human_list.length

    return average_age
}


let human_list = [
    new Human('Andrey', 20),
    new Human('Alex', 25),
    new Human('Maria', 45),
    new Human('Vlad', 12),
]

console.log(average_age_counter(human_list));
