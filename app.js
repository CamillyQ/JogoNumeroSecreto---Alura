let listaSorteados = [];
let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');
exibirNaTela();

let numero = RandomNumber();
let tentativas = 1;


function exibirNaTela(){
    titulo.innerHTML = 'Jogo do Numero Secreto';
    paragrafo.innerHTML = 'Escolha um Numero de 1 a 10';
    responsiveVoice.speak(titulo.innerHTML, 'Brazilian Portuguese Female', {rate:1.2});
}
function RandomNumber(){
    numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeElementosLista = listaSorteados.length;
    if(quantidadeElementosLista == 10){
        listaSorteados = [];
    }

    if(listaSorteados.includes(numeroEscolhido)){
        return RandomNumber();
    }else{
        listaSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function verificarChute(){
    let chute = document.querySelector('.container__input').value;

    if(chute==numero){
        let nTentativas = tentativas==1 ? 'tentativa': 'tentativas';
        titulo.innerHTML = "Acertou!";
        paragrafo.innerHTML = `Você descobriu o número secreto com ${tentativas} ${nTentativas}!`;
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        titulo.innerHTML = "Errou!";
        if(chute > numero){
            paragrafo.innerHTML = `O número é menor que ${chute}`;
        }else{
            paragrafo.innerHTML = `O número é maior que ${chute}`;
        }
        tentativas++;
    }
    limparCampo();
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function novoJogo(){
    exibirNaTela();
    limparCampo();
    numero = RandomNumber();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}


