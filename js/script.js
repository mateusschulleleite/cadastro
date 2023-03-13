async function buscaEndereco(cep) {
    var mensagemErro =document.querySelector('#erro');
    mensagemErro.innerHTML = '';
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('Esse CEP não existe!')
        }
        var cidade = document.querySelector('#cidade');
        var logradouro = document.querySelector('#endereco');
        var estado = document.querySelector('#estado');
        var complemento = document.querySelector('#complemento');
        var bairro = document.querySelector('#bairro');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        complemento.value = consultaCEPConvertida.complemento;
        bairro.value = consultaCEPConvertida.bairro;
        estado.value = consultaCEPConvertida.uf;
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p> CEP inválido. Tente novamente!</p>`;
    } 
}

var cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value))


