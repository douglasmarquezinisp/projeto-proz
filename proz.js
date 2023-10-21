// script.js
window.onload = function() {
    // Adicionando um título simples ao site
    var titulo = document.createElement('h1');
    titulo.id = 'titulo';
    titulo.textContent = 'Bem-vindo ao meu site!';
    document.body.appendChild(titulo);

    // Adicionando um produto à venda
    var produto = document.createElement('div');
    produto.id = 'produto';

    var nomeProduto = document.createElement('h2');
    nomeProduto.textContent = 'Nome do Produto';
    produto.appendChild(nomeProduto);

    var descricaoProduto = document.createElement('p');
    descricaoProduto.textContent = 'Descrição do Produto';
    produto.appendChild(descricaoProduto);

    var precoProduto = document.createElement('p');
    precoProduto.textContent = 'Preço do Produto: R$100';
    produto.appendChild(precoProduto);

    document.body.appendChild(produto);
}
