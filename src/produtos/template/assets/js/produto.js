// Este arquivo contém a lógica JavaScript para a página de produtos, incluindo funcionalidades como exibir detalhes do produto e gerenciar o botão de compra.

document.addEventListener('DOMContentLoaded', function() {
    const produtosContainer = document.getElementById('produtos-container');
    const produtos = []; // Array para armazenar os produtos

    // Função para carregar produtos do JSON
    function carregarProdutos() {
        fetch('../../catalogo/produtos.json')
            .then(response => response.json())
            .then(data => {
                produtos.push(...data);
                exibirProdutos();
            })
            .catch(error => console.error('Erro ao carregar produtos:', error));
    }

    // Função para exibir produtos na página
    function exibirProdutos() {
        produtosContainer.innerHTML = ''; // Limpa o container

        produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');

            produtoDiv.innerHTML = `
                <h2>${produto.nome}</h2>
                <img src="${produto.imagem}" alt="${produto.nome}">
                <p>${produto.descricao}</p>
                <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                <p>Bandeiras aceitas: ${produto.bandeiras.join(', ')}</p>
                <button class="btn-comprar" data-id="${produto.id}">Comprar</button>
            `;

            produtosContainer.appendChild(produtoDiv);
        });

        // Adiciona eventos aos botões de compra
        const buttons = document.querySelectorAll('.btn-comprar');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const produtoId = this.getAttribute('data-id');
                adicionarAoCarrinho(produtoId);
            });
        });
    }

    // Função para adicionar produto ao carrinho
    function adicionarAoCarrinho(produtoId) {
        const produto = produtos.find(p => p.id == produtoId);
        if (produto) {
            // Lógica para adicionar o produto ao carrinho
            console.log(`Produto ${produto.nome} adicionado ao carrinho.`);
            // Aqui você pode implementar a lógica para atualizar o carrinho
        }
    }

    carregarProdutos(); // Carrega os produtos ao iniciar a página
});