//As variáveis no Javascript não são tipadas.
//var nome="Lucas Zanin";
//var idade=29;
//var idade2= 10;
//var frase=  "Japão é o melhor time do mundo";
//Alert mostra um popup ao carregar a pagina
//alert(idade+idade2);

//console.log(idade+idade2);
//console.log(frase);
//Replace muda uma palavra da string
//console.log(frase.replace("Japão","Brasil"));

//deixa letras minusculas na frase
//console.log(frase.toLowerCase());
//multiplicando variáveis
//console.log(idade*idade2);
//array ou lista
//var lista=["Maça","Pera","Laranja"];
//adiciona um novo elemento na array 
//console.log(lista);

//Adiciona um novo elemento para a lista
//lista.push("Tangerina");
//console.log(lista);

//remove o ultimo elemento da array
//lista.pop();
//console.log(lista);

//Mostra quantidade de elementos da lista
//console.log(lista.length);

//Tras os elementos da lista ou array ao contrário , (do ultimo para o primeiro)
//console.log(lista.reverse());

//converte a lista toda em string
//console.log(lista.toString());

//converte para string porém é possivel escolher o separador dos elementos
//console.log(lista.join(" | "));

//Dicionário é como uma array porém você consegue passar propriedades
//var frutas=[{Nome: "Maça", cor:"Vermelha"},{Nome:"Uva",cor:"Roxa"}];

//console.log(frutas);

//Condicionais

//Comando prompt exipe uma pergunta para o usuário
/*
var idade=prompt("Qual é a Sua Idade");

if(idade>=18){
    alert("Maior de Idade")
}else{
    alert("Menor de Idade");
}
*/

/*Estrutura de Repetição While
var count =0;

while (count <= 5){
    alert(count);
    count ++;
}
*/

/*Estrutura de Repetição For
var count;
for(count=0;count <= 5;count++){

    alert(count);
}
*/

/*Trabalhando com Datas
var date = new Date();
    alert(date);
    alert(date.getDay());
    alert(date.getMinutes());
    */

/*Função soma criada sem variáveis
function soma(n1,n2){
    return n1+n2;
}
//alert(soma(5,10));
*/

// Função Validade idade com tipos boleanos
//Se declararmos as variáveis fora da função elas são globais e dentro das funções são locais.

/*
function validadeidade(idade){
    var validar;
    
    if(idade>=18){
        validar= true
    }else{
        validar =false
    }
    return validar;
}

var idade =prompt("Qual a Sua Idade");
console.log(validadeidade(idade));
*/

// Get Element Id pega um elemento html do DOM pelo Id 
//InnerHtml injeta nesta caso um texto em negrito dento do elemento do DOM com ID agradecimento
function clicou(){
        document.getElementById("agradecimento").innerHTML="<b>Obrigado Por Clicar</b>";
}

function redirecionar(){
    //Abre o link em outra aba do navegador
    window.open("https://www.google.com/");
    //Abre o link na mesma aba
    window.location.href="https://www.google.com/";
}

function trocar(elemento){
    elemento.innerHTML= "Obrigado por passar o mouse no paragrafo";
}

function voltar(elemento){
    elemento.innerHTML= "Passe o mouse aqui"; 
}

function load(){
    alert("Pagina Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
