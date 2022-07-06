// Volume de uma esfera
// v = 4/3.pi.r3
//Volume de uma esfera apartir do diametro

// diametro
// d = 2 * r

let diam = 6;
// se o diametro é 6 e é o dobro do raio , logo o raio é 3
let raio = 3;
let pi = 3.14;

v = (4 * pi * Math.pow(raio,3))/3;



console.log(`O volume de uma esfera de raio ${raio} é ${v}`)