var num = 1;
var txt = "Olá";
var logico_v = true;
var logico_f = false;
var lista = ['Arroz', 'Feijão', 'Batata'];
var objeto = {
    "nome": "Francisco",
    "idade": 31,
    "altura": 1.78,
    "situação": true,
    "linguagem_fav":['Java', 'JS', 'PHP']
}

var vazio = null;
var indefinido = undefined;

console.log(num, txt, logico_v, logico_f, lista, objeto, vazio, indefinido);

txt = 'Texto substituido';
logico_v = "Verdadeiro";

console.log(txt, logico_v);

var aluno = {
    "nome": "João",
    "dt_nascimento": "25/05/2002",
    "endereço": {
        "Rua": "abc, 123",
        "Cidade": "São Paulo",
        "UF": "SP"
    }
}

console.log(aluno);

// Exemplo de variável global //
var global = "Eu sou Global";
console.log(global);

// Criando uma função //
function minha_funcao(){

    // Exemplo de variável em escopo //
    var local = "Eu sou Local";
    console.log(local);
}

// Chamada da função //
minha_funcao();

//console.log(global, local);

function teste_var(){
    var x = 10;
    console.log(x);
    if(x == 10){
        var x = 5;
        console.log(x);
    }
    console.log(x);
}
teste_var();

function teste_let(){
    let x = 10;
    console.log(x);
    if(x == 10){
        let x = 5;
        console.log(x);
    }
    console.log(x);
}
teste_let();


function teste_const(){
    const x = 10;
    console.log(x);
    if(x == 10){
        const x = 5;
        console.log(x);
    }
    // não permite criar sem inicializar //
    // não permite re-atribuição de valores //
    // x = 11
    console.log(x);
}
teste_const();