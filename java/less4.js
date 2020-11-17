/* 
    Даны 3 точки
    все точки задаются рандомно не больше +/- 30
    x1, y1 - точка A
    x2, y2 - точка B
    x3, y3 - точка C
    1) Найти длину каждого отрезка AB, AC и CB
    2) Убедиться, что это треугольник (АВ + АС > СВ)
    3) Если это треугольник - посчитать его площадь и периметр
*/

let x1 = Math.random() * 61 - 30;
x1 = Math.floor();
let y1 = Math.random() * 61 - 30;
y1 = Math.floor();
let x2 = Math.random() * 61 - 30;
x2 = Math.floor();
let y2 = Math.random() * 61 - 30;
y2 = Math.floor();
let x3 = Math.random() * 61 - 30;
x3 = Math.floor();
let y3 = Math.random() * 61 - 30;
y3 = Math.floor();

console.log(`${x1}, ${y1}`);

let ab = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
let ab = Math.sqrt((x2 - x3)**2 + (y2 - y3)**2);
let ab = Math.sqrt((x1 - x3)**2 + (y3 - y1)**2);

let p = ab + bc + ac;
console.log(p);

let s = Math.sqrt(pm*(pm-ab)*(pm-bc)*(pm-bc));
console.log(s)

let s = Math.sqrt(p())



