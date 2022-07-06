// Taxa de juros

let m = 90000;
let c = 60000;
let n = 24;

let i = Math.pow((m/c),1/n) -1

console.log(`O seu financiamento de ${c} reais teve
uma taxa de juros de ${i*100}%, pois após ${n} meses você tem que
pagar ${m} reais.`)