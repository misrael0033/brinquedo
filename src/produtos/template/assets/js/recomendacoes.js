const fetch = require('node-fetch');

async function fetchRecomendacoes() {
    try {
        const response = await fetch('/data/produtos.json');
        const produtos = await response.json();
        return produtos.filter(produto => produto.recomendado);
    } catch (error) {
        console.error('Erro ao buscar recomendações:', error);
        return [];
    }
}

function exibirRecomendacoes(recomendacoes) {
    const recomendacoesContainer = document.getElementById('recomendacoes');
    recomendacoesContainer.innerHTML = '';

    recomendacoes.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.classList.add('produto-recomendado');
        
        produtoElement.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho('${produto.id}')">Adicionar ao Carrinho</button>
        `;
        
        recomendacoesContainer.appendChild(produtoElement);
    });
}

async function init() {
    const recomendacoes = await fetchRecomendacoes();
    exibirRecomendacoes(recomendacoes);
}

document.addEventListener('DOMContentLoaded', init);