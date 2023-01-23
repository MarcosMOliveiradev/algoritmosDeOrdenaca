const listaLivros = require('./arrays');

function mergeSort(array){
    if( array.length > 1){
        const meio = Math.floor(array.length / 2);
       const part01 = mergeSort(array.slice(0, meio));
        const part02 = mergeSort(array.slice(meio, array.length));

        array = ordena(part01, part02)
    }

    return array;
}

function ordena(part01, part02){
    let posicaoAtualParte01 = 0
    let posicaoAtualParte02 = 0
    const resultado = []

    while(posicaoAtualParte01 < part01.length && posicaoAtualParte02 < part02.length){
        let produtoAtualParte01 = part01[posicaoAtualParte01]
        let produtoAtualParte02 = part02[posicaoAtualParte02]

        if( produtoAtualParte01.preco < produtoAtualParte02.preco){
            resultado.push(produtoAtualParte01);
            posicaoAtualParte01++
        } else {
            resultado.push(produtoAtualParte02);
            posicaoAtualParte02++
        }
    }

    return resultado.concat(posicaoAtualParte01< part01.length 
    ? part01.slice(posicaoAtualParte01)
    : part02.slice(posicaoAtualParte02))
}


console.log(mergeSort(listaLivros));