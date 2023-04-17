let vector = [1, 6, 10, 2, 7, 3, 2]

vector.sort((a, b) => a - b)
vector = vector.map(x => x ** 2);

console.log(vector);
