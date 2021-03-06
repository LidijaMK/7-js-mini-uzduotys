/* KINTAMUJU INICIJAVIMAS
   1. Sukurti 3 kintamuosius su skaiciaus tipo reiksmemis. Po kiekvieno ju inicijavimo, isvesti i console.
 */

const pirmasSkaicius = 1;
console.log(pirmasSkaicius);

const antrasSkaicius = 15;
console.log(antrasSkaicius);

const treciasSkaicius = 23;
console.log(treciasSkaicius);

console.log('--------------');


// 2. Sukurti 3 kintamuosius su teksto tipo reiksmemis. Po kiekvieno jų inicijavimo, isvesti i console.
const vardas1 = 'Petras';
console.log(vardas1);

const vardas2 = 'Antanas';
console.log(vardas2);

const vardas3 = 'Jonas';
console.log(vardas3);

console.log('--------------');

// 3. Sukurti 3 saraso tipo kitamuosius su penkiomis skaiciu tipo reiksmemis. Po kiekvieno ju inicijavimo, isvesti i console.
const pazymiai = [9, 10, 8, 7, 10];
console.log(pazymiai);

const svki = [2.2, 1.0, 1.4, 1.8, 2.0];
console.log(svki);

const pajamuAugimas = [12.20, 2.27, 3.53, 1.39, 3.53];
console.log(pajamuAugimas);

console.log('--------------');

// 4. Sukurti 3 saraso tipo kintamuosius su penkiomis teksto tipo reiksmemis. Po kiekvieno ju inicijavimo, isvesti i console.
const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevezys' ];
console.log(miestai);

const turtoBukle = ['labai gera', 'gera', 'vidutine', 'patenkinama', 'bloga'];
console.log(turtoBukle);

const inzIranga = ['sildymas', 'vedinimas', 'vandentiekis', 'nuotekos', 'elektra' ];
console.log(inzIranga);

console.log('--------------');
console.log('--------------');

/* VEIKSMAI SU KINTAMAISIAIS
   1. Susumuoti visus skaiciaus tipo kintamuosius. Rezultata isvesti i konsole. */
const skaiciuSuma = pirmasSkaicius + antrasSkaicius + treciasSkaicius;
console.log('Skaiciu suma: ' + skaiciuSuma);

console.log('--------------');

// 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp ju butu sudarytas tarpas. Rezultata isvesti i konsole.
const vardai = vardas1 + ' ' + vardas2 + ' ' + vardas3;
const vardai1 = `${vardas1} ${vardas2} ${vardas3}`;
console.log(vardai);
console.log(vardai);

console.log('--------------');

// 3. Apskaiciuoti verte is sarasu kuriu verciu tipas yra skaiciai, pagal pateikta logika: 1-2+3-4+5. Rezultata isvesti i konsole.
const verte1 = pazymiai[0] - pazymiai[1] + pazymiai[2] - pazymiai[3] + pazymiai[4];
const rezultatas = verte1;
console.log(verte1);
console.log(`Atsakymas yra ${rezultatas}`);

const verte2 = svki[0] - svki[1] + svki[2] - svki[3] + svki[4];
console.log(verte2);

const verte3 = pajamuAugimas[0] - pajamuAugimas[1] + pajamuAugimas[2] - pajamuAugimas[3] + pajamuAugimas[4];
console.log(verte3);

let pazVerte = 0;
pazVerte = pazVerte - pazymiai[1];
pazVerte = pazVerte + pazymiai[0];
pazVerte = pazVerte + pazymiai[2];
pazVerte = pazVerte - pazymiai[3];
pazVerte = pazVerte + pazymiai[4];
console.log(pazVerte);

console.log('--------------');

// 4. Sujungti sarasu vertes, kuriu tipas yra tekstai, nuo saraso galo iki pradzios taip, jog tarp ju butu kablelis ir tarpas.
const mSarasas = miestai[4] + ', ' + miestai[3] + ', ' + miestai[2] + ', ' + miestai[1] + ', ' + miestai[0];
const miestuSarasas = `${miestai[0]}, ${miestai[1]}, ${miestai[2]}, ${miestai[3]}, ${miestai[4]}`;
console.log(mSarasas);
console.log(`Diziausiu Lietuvos miestu sarasas: ${miestuSarasas}`);

const bukleSarasas = turtoBukle[4] + ', ' + turtoBukle[3] + ', ' + turtoBukle[2] + ', ' + turtoBukle[1] + ', ' + turtoBukle[0];
const bukleSarasas1 = `${turtoBukle[4]}, ${turtoBukle[3]}, ${turtoBukle[2]}, ${turtoBukle[1]}, ${turtoBukle[0]}`;
console.log(bukleSarasas);
console.log(bukleSarasas1);

const irangosSarasas = inzIranga[4] + ', ' + inzIranga[3] + ', ' + inzIranga[2] + ', ' + inzIranga[1] + ', ' + inzIranga[0];
console.log(irangosSarasas);
const irangosSarasas1 = `${inzIranga[0]}, ${inzIranga[1]}, ${inzIranga [2]}, ${inzIranga[3]}, ${inzIranga[4]}`;
console.log(`Pastate esanciu inzineriniu komunikaciju sarasas: ${irangosSarasas1}.`);

console.log('----------');
console.log('----------');

/* KINTAMUJU PALYGINIMAS
Lyginant, jei rezultatas tenkina palyginimo salyga, tai i console isvesti zodi “Pomidoras”, o jei salyga nera tenkinama, isvesti sakini “Bandykite kita karta.”.
1. Tarpusavyje palyginti skaiciaus tipo kintamuosius:
- kuris didesnis*/
if (pirmasSkaicius > antrasSkaicius) {
   console.log('Pomidoras');
} else {
      console.log('Bandykite dar karta');
}

// - kuris mazesnis
if (pirmasSkaicius < antrasSkaicius) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}

// - ar jie lygus
if (pirmasSkaicius === antrasSkaicius) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}

// - ar jie nelygus
if (pirmasSkaicius !== antrasSkaicius) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}  

// - kuris didesnis arba lygus
if (pirmasSkaicius >= antrasSkaicius) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}

// - kuris mazesnis arba lygus

if (pirmasSkaicius <= antrasSkaicius) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}
console.log('----------');

// 2. Isvesti teksto kintamuju ilgius
const vardas1Length = vardas1.length;
console.log(vardas1Length);
const vardas2Length = vardas2.length;
console.log(vardas2Length);
const vardas3Length = vardas3.length;
console.log(vardas3Length);

console.log('----------');

// 3. Tarpusavyje palyginti teksto kintamuju ilgius
// - kuris didesnis
if (vardas1Length > vardas2Length) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}
// - kuris mazesnis
if (vardas1Length < vardas2Length) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}
// - ar jie lygus
if (vardas1Length === vardas2Length) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}
// - ar jie nelygus
if (vardas1Length !== vardas2Length) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}
// - kuris didesnis arba lygus
if (vardas1Length >= vardas2Length) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}
// - kuris mazesnis arba lygus
if (vardas1Length <= vardas2Length) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}

console.log('----------');

// 4. Isvesti saraso kintamuju ilgius

const miestaiLength = miestai.length;
console.log(miestaiLength);

console.log(miestai[0].length, miestai[1].length, miestai[2].length, miestai[3].length, miestai[4].length);

const bukleLength = turtoBukle.length;
console.log(bukleLength);

const inzIrangaLength = inzIranga.length;
console.log(inzIrangaLength);

// - kuris didesnis
if (miestaiLength > bukleLength) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}
// - kuris mazesnis
if (miestaiLength < bukleLength) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}
// - ar jie lygus
if (miestaiLength === bukleLength) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}
// - ar jie nelygus
if (miestaiLength !== bukleLength) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}
// - kuris didesnis arba lygus
if (miestaiLength >= bukleLength) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}
// - kuris mazesnis arba lygus
if (miestaiLength <= bukleLength) {
   console.log('Pomidoras');
} else {
   console.log('Bandykite dar karta');
}

console.log('----------');







