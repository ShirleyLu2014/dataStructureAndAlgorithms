console.log(Math.random())
let calcTimes = 1000;
let count = 0;
for(let i = 0; i < calcTimes; i++) {
    if(Math.random() < 0.3) {
        count++
    }
}
console.log(count/calcTimes)