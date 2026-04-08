// dashboard.js

document.addEventListener("DOMContentLoaded", function() {
    const produtosContainer = document.getElementById("produtos-container");
    const adicionarProdutoBtn = document.getElementById("adicionar-produto");
    const produtos = [];

    adicionarProdutoBtn.addEventListener("click", function() {
        const produto = {
            nome: document.getElementById("nome-produto").value,
            descricao: document.getElementById("descricao-produto").value,
            preco: document.getElementById("preco-produto").value,
            imagem: document.getElementById("imagem-produto").value,
            slug: gerarSlug(document.getElementById("nome-produto").value)
        };
        produtos.push(produto);
        atualizarListaProdutos();
        limparFormulario();
    });

    function atualizarListaProdutos() {
        produtosContainer.innerHTML = "";
        produtos.forEach(produto => {
            const produtoDiv = document.createElement("div");
            produtoDiv.classList.add("produto");
            produtoDiv.innerHTML = `
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <p>Preço: R$ ${produto.preco}</p>
                <img src="${produto.imagem}" alt="${produto.nome}">
                <button onclick="adicionarAoCarrinho('${produto.slug}')">Adicionar ao Carrinho</button>
            `;
            produtosContainer.appendChild(produtoDiv);
        });
    }

    function limparFormulario() {
        document.getElementById("nome-produto").value = "";
        document.getElementById("descricao-produto").value = "";
        document.getElementById("preco-produto").value = "";
        document.getElementById("imagem-produto").value = "";
    }

    function gerarSlug(nome) {
        return nome.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }
});