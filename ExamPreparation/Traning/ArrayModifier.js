function solve(input) {
    let arr = input.shift().split(' ').map((x) => Number(x));
    for (const data of input) {
        let line = data.split(' ');
        let command = line.shift();
        if (command === 'swap') {
            let idx1 = Number(line.shift());
            let idx2 = Number(line.shift());
            let index2Element = arr[idx2];
            let index1Element = arr[idx1];
            arr.splice(idx1, 1, index2Element);
            arr.splice(idx2, 1, index1Element);
        } else if (command === 'multiply') {
            let idx1 = Number(line.shift());
            let idx2 = Number(line.shift());
            let result = arr[idx2] * arr[idx1];
            arr.splice(idx1, 1, result);
        } else if (command === 'decrease') {
            arr = arr.map((x) => x - 1)
        }
    }
    console.log(arr.join(', '));
}

solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
)