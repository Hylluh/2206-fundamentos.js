// parametros de funcao

function soma(num1, num2,) {
    return num1+num2;
}

// console.log(soma(5, 2, 3));
// console.log(soma(53, 222, 1113));
// console.log(soma(53, 21, 32));

// parametro x argumento

// ordem dos parametros

function nomeIdade(nome, idade) {
    return `Meu nome e ${nome} e eu tenho ${idade} anos`;
}

// console.log(nomeIdade(12, "gabriel"))

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma(3,3),soma(4,5)));




