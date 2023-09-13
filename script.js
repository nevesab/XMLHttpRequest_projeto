var btn = document.getElementById('btn');
var resposta = document.getElementById('resposta');

// add evento de clique ao botão
btn.addEventListener('click', function() {

    var xhr = new XMLHttpRequest();

    // Configura a requisição GET para uma API de exemplo
    xhr.open('GET', 'http://localhost:3000/dados', true);

    // define a funçao de callback
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // resposta da API pronta e é bem-sucedida
            var resposta = JSON.parse(xhr.responseText);
            resposta.innerHTML = 'Dados carregados: ' + JSON.stringify(resposta);
        }
    };

    xhr.send();
});
