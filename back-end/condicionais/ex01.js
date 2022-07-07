const valor_da_compra = 100;
const numero_de_parcelas = 3;

if (numero_de_parcelas ===1){
    // a vista - com 10% de desconto
    const desconto = valor_da_compra * 10/100;
    const valor_pagar = valor_da_compra - desconto;
    console.log(`Você deve pagar R$ ${valor_pagar}, pois à vista tem
    10% de desconto.`);

} else {
    // parcelado
    const valor_da_parcela = valor_da_compra / numero_de_parcelas;
    console.log(`Você deve pagar ${numero_de_parcelas} parcelas
    de R$ ${valor_da_parcela.toFixed(2)}`);
}