const tem_ingresso = true;
const censura = 16;
const idade = 14;
const esta_com_pais = false;
//tem ingresso E
// tem idade maior ou igual a censura, OU estar com os pais

if (tem_ingresso === true){
    if (idade >= censura ||esta_com_pais === true){
        console.log('Pode entrar.');
    } else {
        console.log('Barrada.');
    } 
} else {
    console.log('Barrada.');
}