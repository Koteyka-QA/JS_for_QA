const services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services.price = function() {
    let total = 0;
    for (let key in this) {
        if (typeof this [key] === "string") {
            const number = parseInt(this[key]);
            total += number;
        }
    }
    return total;
};

services.minPrice = function() {
    let min = Infinity;
    for (let key in this) {
        if (typeof this[key] === "string") {
            const price = parseInt(this[key]);
            if (price < min) {
                min = price;
            }
        }
    }
    return min;
};

services.maxPrice = function() {
    let max = 0;
    for (let key in this) {
        if (typeof this[key] === "string") {
            const price = parseInt(this[key]);
            if (price > max) {
                max = price;
            }
        }
    }
    return max;
};

console.log("Загальна сума:" + services.price() + "грн");
console.log("Мінімальна ціна:" + services.minPrice() + "грн");
console.log("Максимальна ціна:" + services.maxPrice() + "грн");   