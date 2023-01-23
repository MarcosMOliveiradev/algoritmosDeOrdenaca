const listaLivros = require('./arrays');

function encontraMenores(pivo, array) {

    let menores = 0;

    for(let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual];

        if(produtoAtual.preco < pivo.preco){
            menores++
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores)
    return array
}

function trocaLugar(array, de, para) {
    const elem01 = array[de]
    const elem02 = array[para]

    array[para] = elem01
    array[de] = elem02
}

console.log(encontraMenores(listaLivros[2], listaLivros))