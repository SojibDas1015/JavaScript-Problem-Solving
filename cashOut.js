function cashOut(money) {
    if (typeof money === 'number') {
        if (money > 0) {
            return money * 1.75 / 100;
        }
        else {
            console.log("invalid");
        }
    }
    else {
        console.log("invalid");
    }
}
const result = cashOut(100);
console.log(result);