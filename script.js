document.getElementById('cript').addEventListener('click', function () {
    const mensagem = document.getElementById('mensagem').value;
    const posicao = parseInt(document.getElementById('posicao').value);
    document.getElementById('resposta').textContent = cifraCesar(mensagem, posicao);
});

document.getElementById('descript').addEventListener('click', function () {
    const mensagem = document.getElementById('mensagem').value;
    const posicao = parseInt(document.getElementById('posicao').value);
    document.getElementById('resposta').textContent = cifraCesar(mensagem, -posicao);
});

function cifraCesar(mensagem, posicao) {
    let resultado = '';
    for (let i = 0; i < mensagem.length; i++) {
        let charCode = mensagem.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode(((charCode - 65 + posicao) % 26 + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode(((charCode - 97 + posicao) % 26 + 26) % 26 + 97);
        } else {
            resultado += mensagem[i];
        }
    }
    return resultado;
}