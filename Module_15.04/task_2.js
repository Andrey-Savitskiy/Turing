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
