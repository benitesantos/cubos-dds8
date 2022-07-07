const tem_ingresso = true;
const censura = 16;
const idade = 14;

// ter ingresso e ter idade maior ou igual a censura

if(tem_ingresso === true){
    if (idade >= censura) {
        console.log('Pode Entrar');
    } else{
        console.log('Barrada pela censura.');
    }
} else {
    console.log('Barrada por falta de ingresso.');
} 