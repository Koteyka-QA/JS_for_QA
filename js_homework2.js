function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result = result * x;
    }

    return result

    }


// Приклад як перевірити
// Очікуваний результат: 8
console.log(pow(2, 3));