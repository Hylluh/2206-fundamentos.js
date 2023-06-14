// declaracao de funcao

function minhaFuncao(param) {
    // bloco de codidos 
}

// minhaFuncao("param")

// expressao de funcao

// const soma = function(num1, num2) {return num1 + num2}
// console.log(soma(5,10));

// diferenca principal: HOISTING
// funcao e var sao "listadas no topo do arquivo"

console.log(apresentar())

function apresentar() {
    return "ola";
}

console.log(soma(1,1))
const soma = function(num1, num2) {return num1 + num2}
