// Importando lista de outro arquivo JS.
const { edGalho, edFolha } = require('./arrays');


// Criando função pra juntar as duas listas em uma só.
function jutarLista(lista01, lista02){
    // Variaveis de controle
    let listaFinal = [];
    let posicaoAtualLista01 = 0;
    let posicaoAtualLista02 = 0;
    let atual = 0;

    // Laço de repetição que compara os valores das listas e ordena em ordem de menor para maior.
    while(posicaoAtualLista01 < lista01.length && posicaoAtualLista02 < lista02.length){
        let produtoAtualLista01 = lista01[posicaoAtualLista01];
        let produtoAtualLista02 = lista02[posicaoAtualLista02];

        //Condicional responsavel por dizer quem vai promeiro para a lista atual ordenada.
        if(produtoAtualLista01.preco < produtoAtualLista02.preco){
            listaFinal[atual] = produtoAtualLista01;
            posicaoAtualLista01++;
        } else {
            listaFinal[atual] = produtoAtualLista02;
            posicaoAtualLista02++;
        }

        atual++;
    }


    // Laço caso uma das listas seja maior que a outra, fazendo com q o processo só termine quando todos os elementos do objeto sejam verificados.
    while(posicaoAtualLista01 < lista01.length){
        listaFinal[atual] = lista01[posicaoAtualLista01];
        posicaoAtualLista01++
        atual++
    }

    while(posicaoAtualLista02 < lista02.length){
        listaFinal[atual] = lista02[posicaoAtualLista02];
        posicaoAtualLista02++
        atual++
    }

    return listaFinal
}

console.log(jutarLista(edGalho, edFolha))