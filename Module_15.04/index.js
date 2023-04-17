
// var myVar = 1
//
// function setMyVar(){
//     myVar = 2
// }
// setMyVar()
//
// console.log(myVar) // 2


// function varTest(){
//     for (var i = 0; i < 3; i++){
//         console.log(i)
//     }
//     console.log(i) // 3, так как ключевое слово var действует на уровне функции
// }
// varTest()
//

// function doSomething(){
//     var myVar = 1
//     if (true){
//         var myVar = 2
//         console.log(myVar) // 2
//     }
//     console.log(myVar) // 2
// }
// doSomething()


// console.log(varTest)
// var varTest = 1
//
// console.log(letTest)
// let letTest = 2

// var myVar = 1
// function myFunc(){
//     var myVar = 2
//     console.log(myVar) // 1
//     // console.log(window.myVar) // в браузере выведется 2
//     function second(){
//         console.log(myVar)
//     }
//
//     second()
// }
// myFunc()


// const arr = [1,2,3]
// arr.push(4, 5) // добавляет указанные элементы в конец
// arr.pop() // удаляет последний элемент
// arr.shift() // удаляет первый элементы
// console.log(arr)

// let arr = ['Я', 'изучаю', 'JS', 'прямо', 'сейчас']
//
// arr.splice(1, 3, 'урок', '2')
// console.log(arr)

// let  arr = [1, 2]
// let arrayLike = {
//     0: "что-то",
//     1: 1,
//     [Symbol.isConcatSpreadable]: true, // позволяет развернуть объект
//     length: 2 // количество разворачиваемых элементов
// }
// console.log(arr.concat(arrayLike))

const devices = [
    {
        id:1,
        brand: "apple",
        type: "phone",
        model: "SE",
    },
    {
        id:2,
        brand: "samsung",
        type: "phone",
        model: "s21",
    },
    {
        id:3,
        brand: "asus",
        type: "laptop",
        model: "x555",
    },
    {
        id:4,
        brand: "acer",
        type: "laptop",
        model: "aspire",
    },
    {
        id:5,
        brand: "toshiba",
        type: "fridge",
        model: "ultra",
    },
]

// for (let i = 0; i < devices.length; i++){
//     console.log(devices[i])
// }
// for (let device of devices){
//     console.log(device)
// }
// device - хранит значение всех свойств итерируемого объекта
// devices - итерируемый объект

// devices.forEach(
//     function (device, index, devices){
//         console.log(index)
//         console.log(device)
//     }
// )
// devices.forEach(device => console.log(device))

// let devicesList = devices.map(device => "<li>" + device.type + " " + device.brand + "<li/>")
// console.log(devicesList)
// console.log(devicesList[3])

// let deviceWithId = devices.map(device => `id = ${device.id}`)
// console.log(deviceWithId)

// let phones = []
// for (let i = 0; i < devices.length; i++){
//     if (devices[i].type === 'phone'){
//         phones.push(devices[i])
//     }
// }
// phones = devices.filter(device => device.type === "phone")
// console.log(phones)


// const donations = [5, 20, 100, 80, 75]
// let total = 0
// for (let i = 0; i < donations.length; i++){
//     total += donations[i]
//
// }

// let total = donations.reduce((total, donation) => {
//     return total + donation
// }, 450)
// console.log(total)
// total - модифицирующийся аккумулятор

// const numbers = [1,2,3,4,5]
// const evenNumber = numbers.find(num => (num % 2) === 0)
// console.log(evenNumber)


// const firstArr = [1,2,3]
// const secondArr = [4,5,6]
// const combineArr = firstArr.concat(secondArr)
// console.log(combineArr)
