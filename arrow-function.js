function apresentar(nome) {
    return `Meu nome e ${nome}`;
}

// Arrow Function
const apresentarArrow = nome => `Meu nome e ${nome}` 
const soma = (num1, num2) => num1 + num2

// Arrow function com + de 1 linha de instrucao

const somarNumerosPequenos = (num1, num2) => {
    if (num1 > 10 ||num2 > 10) {
        return "Somente numeros de 1 a 9";
    } else {
        return num1 + num2;
    }
}

somarNumerosPequenos()

console.log(somarNumerosPequenos(3,1))

// Hoisting: arrow function se comporta como expressao

// operador maior ou igual que 
// >= *NAO CONFUNDIR*