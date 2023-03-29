class Stack{
    constructor(){
        this.items = [];
    }

    // add <- adiciona
    push(element){
        this.items.push(element);
    }

    // remove <- remove
    pop(){
        return this.items.pop();
    }

    // check ,_ verifica
    peek(){
        return this.items[this.items.length -1];
    }

    // check empty <- verifica vazio
    isEmpty(){
        return this.items.length === 0;
    }

    // size <- tamanho
    size(){
        return this.items.length;
    }

    // clear <- deletar
    clear(){

    }

}


const stack = new Stack();
console.log(stack.isEmpty());