const valor_da_compra = 100;
const numero_de_parcelas = 7;

if (numero_de_parcelas ===1){
    // a vista - com 10% de desconto
    const desconto = valor_da_compra * 10/100;
    const valor_pagar = valor_da_compra - desconto;
    console.log(`Você deve pagar R$ ${valor_pagar}, pois à vista tem
    10% de desconto.`);

} else if (numero_de_parcelas >= 2 && numero_de_parcelas <=6) {
    // parcelado sem juros
    const valor_da_parcela = valor_da_compra / numero_de_parcelas;
    console.log(`Você deve pagar em ${numero_de_parcelas}x sem juros de
    de R$ ${valor_da_parcela.toFixed(2)}`);
} else if (numero_de_parcelas >= 7 && numero_de_parcelas <=12){
    //parcelado com juros
    const valor_pagar_com_juros = (valor_da_compra * (1 +1/100) ** numero_de_parcelas).toFixed(2);
    const valor_parcela = (valor_pagar_com_juros / numero_de_parcelas).toFixed(2);
    console.log(`Você deve pagar em ${numero_de_parcelas}x de R$${valor_parcela} 
    totalizando R$${valor_pagar_com_juros}, devido a incidência de juros. `)
} else {
    // numero de parcelas inválido
    console.log('Número de parcelas inválido.')
}