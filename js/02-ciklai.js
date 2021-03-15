/* CIKLO FOR PANAUDOJIMAS
1. Suskaiciuoti ka gausime susumavus skaicius intervale tarp (imtinai)
0 - 0  */

let sum = 0; 

for (let i = 0; i <= 0; i++) {
    const skaiciai = i
    sum += skaiciai;
}
console.log(sum);

console.log('--------------');

// 0 - 4

for (let i = 0; i <= 4; i++) {
    const skaiciai = i;
    sum += skaiciai; 
}
console.log(sum);

console.log('--------------');

// 0 - 100

let sum1 = 0

for (let i = 0; i <= 100; i++) {
    const skaiciai = i;
    sum1 += skaiciai; 
}
console.log(sum1);

console.log('--------------');

// 574 - 815

let sum2 = 0;

for (let i = 574; i <= 815; i++) {
    const skaiciai = i;
    sum2 += skaiciai; 
}
console.log(sum2);

console.log('--------------');

// -50 - 50

let sum3 = 0;

for (let i = -50; i <= 50; i++) {
    const skaiciai = i;
    sum3 += skaiciai; 
}
console.log(sum3);

console.log('--------------');

// -70 - 30

let sum4 = 0;

for (let i = -70; i <= 30; i++) {
    const skaiciai = i;
    sum4 += skaiciai;
}
console.log(sum4);

// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo: pvz.: “abcdef” -> “fedcba”

const abc = 'abcdef';
let bca = '';

for (let i = abc.length - 1; i >=0; i--) {
    const abc1Index = abc[i];
    bca += abc1Index;  
}
console.log(bca);


const pasisveikinimas = 'Labas vakaras';
let back = '';

for (let i = pasisveikinimas.length - 1; i >=0; i--) {
    const abc1Index1 = pasisveikinimas[i];
    back += abc1Index1;  
}
console.log(back);

console.log('------------');

// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai: 0 - 11

const nuo = 0;
const iki = 11;
const daliklis = 3;
const daliklis2 = 5;
const daliklis3 = 7;
let kiekis = 0;
let kiekis2 = 0;
let kiekis3 = 0;

for (let i = 0; i <= 11; i++) {
    const skaiciai = i;
    if (skaiciai % daliklis === 0) {
        kiekis++
    }
    if (skaiciai % daliklis2 === 0) {
        kiekis2++
    }
    if (skaiciai % daliklis3 === 0) {
        kiekis3++
    }
}
console.log(`Skaiciu intervale tarp ${nuo} ir ${iki}, besidalijanciu skaiciu be liekanos is ${daliklis} yra ${kiekis} vienetai`);
console.log(`Skaiciu intervale tarp ${nuo} ir ${iki}, besidalijanciu skaiciu be liekanos is ${daliklis2} yra ${kiekis2} vienetai`);
console.log(`Skaiciu intervale tarp ${nuo} ir ${iki}, besidalijanciu skaiciu be liekanos is ${daliklis3} yra ${kiekis3} vienetai`);

console.log('------------');

// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai: 8 - 31

const from = 8;
const to = 31;
const dalikl = 3;
const dalikl2 = 5;
const dalikl3 = 7;
let kiek = 0;
let kiek2 = 0;
let kiek3 = 0;

for (let i = 8; i <= 31; i++) {
    const numbers = i;
    if (numbers % dalikl === 0) {
        kiek++
    }
    if (numbers % dalikl2 === 0) {
        kiek2++
    }
    if (numbers % dalikl3 === 0) {
        kiek3++
    }
}
console.log(`Skaiciu intervale tarp ${from} ir ${to}, besidalijanciu skaiciu be liekanos is ${dalikl} yra ${kiek} vienetai`);
console.log(`Skaiciu intervale tarp ${from} ir ${to}, besidalijanciu skaiciu be liekanos is ${dalikl2} yra ${kiek2} vienetai`);
console.log(`Skaiciu intervale tarp ${from} ir ${to}, besidalijanciu skaiciu be liekanos is ${dalikl3} yra ${kiek3} vienetai`);

console.log('---------');

// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai: -18 - 18

const a = -18;
const b = 18;
const daliklisN = 3;
const daliklisN1 = 5;
const daliklisN2 = 7;
let kiekisN = 0;
let kiekisN1 = 0;
let kiekisN2 = 0;

for (let i = -18; i <= 18; i++) {
    const numbers1 = i;
    if (numbers1 % daliklisN === 0) {
        kiekisN++
    }
    if (numbers1 % daliklisN1 === 0) {
        kiekisN1++
    }
    if (numbers1 % daliklisN2 === 0) {
        kiekisN2++
    }
}
console.log(`Skaiciu intervale tarp ${a} ir ${b}, besidalijanciu skaiciu be liekanos is ${daliklisN} yra ${kiekisN} vienetai`);
console.log(`Skaiciu intervale tarp ${a} ir ${b}, besidalijanciu skaiciu be liekanos is ${daliklisN1} yra ${kiekisN1} vienetai`);
console.log(`Skaiciu intervale tarp ${a} ir ${b}, besidalijanciu skaiciu be liekanos is ${daliklisN2} yra ${kiekisN2} vienetai`);

console.log('------------');












