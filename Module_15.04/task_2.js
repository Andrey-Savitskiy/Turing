/*
Задача 2. "Ваш пароль должен быть длинной не менее 8 символов"
Дан массив строк. Оставьте в нем только те строки, длина которых не 
меньше 8-и символов.
*/


let password_list = [
    '1234',
    '1234567',
    '',
    '12345678',
    '123456789',
    'qwertyu',
    'qwertyui'
]

password_list = password_list.filter(password => password.length >= 8)

console.log(password_list);
