const SIZE = 9;

function validSolution(arr) {
    valid_arr = new Array(SIZE).fill(false); //масив для перевірки
    
    //алгоритм:
    //маємо масив valid_arr з 9 значень, заповнений false
    //
    //беремо рядок з матриці, для кожного елемента рядка виконуємо дію:
    //в масив valid_arr на позицію [a - 1] записуємо true, де a - число з масиву
    //наприклад: a === 5, тоді valid_arr[4] = true;
    //
    //далі виконуємо перевірку:
    //якщо в масиві є хоч 1 значення false, то в рядку або було число 0, або числа повторювались => розв'язано невірно
    //
    //повторюємо для всіх рядків, потім для всіх стовпців і для всіх блоків 3*3
    //якщо всі перевірки пройдено => розв'язано вірно
    
    for (let i = 0; i < SIZE; i++) {
    
        //перевірка рядку
        arr[i].forEach(a => valid_arr[a - 1] = true);
        if (valid_arr.some(a => a === false))
            return false;
        valid_arr.fill(false);
        
        //перевірка стовпця
        arr.forEach(a => valid_arr[a[i] - 1] = true);
        if (valid_arr.some(a => a === false))
            return false;
        valid_arr.fill(false);
    }
    
    for (let i = 0; i < SIZE / 3; i++) {
        for (let j = 0; j < SIZE / 3; j++) {
            //перевірка блоку
            for (let k = 0; k < 3; k++) {
                arr[i * 3 + k].slice(j * 3, (j + 1) * 3).forEach(a => valid_arr[a - 1] = true);
            }
            
            if (valid_arr.some(a => a === false))
                return false;
            valid_arr.fill(false);
        }
    }
    
    return true;
}

//тестові приклади

let res = validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]);

console.log(res);

res = validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
]);

console.log(res);
  