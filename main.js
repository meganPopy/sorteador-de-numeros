
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }
    
    alert(sorteados);
}

for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);
    
    while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de, ate);
    }
    
    sorteados.push(numero);
}
