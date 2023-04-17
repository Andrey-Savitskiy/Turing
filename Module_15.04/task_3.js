class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}


let human_list = [
    new Human('Andrey', 20),
    new Human('Alex', 25),
    new Human('Maria', 45),
    new Human('Vlad', 12),
]

let average_age = human_list.reduce((average_age, human) => average_age + human.age, 0) / human_list.length

console.log(average_age);
