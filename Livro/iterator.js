let numb = [1, 2, 5, 9, 10]


         //   Retorna quais os valores do array
let iterator = numb[Symbol.iterator]();
for (const n of iterator){
    console.log(n)
}




       // devolve a chave e o valor de array
let aEntris = numb.entries();
for(const n of aEntris){
    console.log(n)
}




      //  Devolve somente as chaves*
let key = numb.keys();
for (const n of key){
    console.log(n);
}



       // Devolve os valores 
let value = numb.values();
for( const n of value){
    console.log(n);
}


numb.fill(0)
console.log(numb)

numb.fill(2,4)
console.log(numb)

console.log(numb.indexOf(10))


let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function multipleOf13(element, index, array){
    return (element % 13 == 0);
}

console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));

let length = 10;
let int16 = new Int16Array(length);
let array16 = [];
array16.length = length;
for( let i = 0; i < length; i++){
    int16[i] = i+1;
}

console.log(int16)