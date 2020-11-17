/*
    Циклы
*/
let apples = 5;

while(apples) {
    console.log("Егор съел яблоко!")
    /*
    * -=2
    * +=
    * %=
    */
    apples -=1; /*apples = apples - 1;*/

}
console.log("Яблок больше нет!")

let dream = 3000000 // однушка в подмосковье
let cash = 0;
let salary = 15000;
let age = 18;
let daysPerMnth = 30;
let mnth = 12;
let housePay = 2343.86;
let branch = 200; //200-240;
// Каждый год растёт на 10%;
// Во сколько лет осуществится мечта?

while(cash < dream) {
    let mn = 0; // промежуточный месяц
    while(mn < mnth){
        let days = 0;
        while(days <daysPerMnth){
            cash -= Math.floor(Math.random()*41 + branch);
            days ++;
        }
        mn +=1;
        cash += salary;
        cash -= housePay;
    }
    age +=1;
    salary = salary * 1.1;
    salary = +salary.toFixed(2);
    cash = +cash.toFixed(2);
    branch +=100;
}
console.log(`В ${age} лет Наруто зарабатывает ${salary} руб. и наконец накопил ${cash} руб. на однушку в подмосковье`)