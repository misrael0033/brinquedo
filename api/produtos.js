const fs = require('fs');
const path = require('path');

// Caminho para o arquivo JSON de produtos
const produtosPath = path.join(__dirname, '../data/produtos.json');

// Função para ler os produtos do arquivo JSON
const lerProdutos = () => {
    const dados = fs.readFileSync(produtosPath);
    return JSON.parse(dados);
};

// Função para adicionar um novo produto
const adicionarProduto = (novoProduto) => {
    const produtos = lerProdutos();
    produtos.push(novoProduto);
    fs.writeFileSync(produtosPath, JSON.stringify(produtos, null, 2));
};

// Função para editar um produto existente
const editarProduto = (id, produtoAtualizado) => {
    const produtos = lerProdutos();
    const index = produtos.findIndex(produto => produto.id === id);
    if (index !== -1) {
        produtos[index] = { ...produtos[index], ...produtoAtualizado };
        fs.writeFileSync(produtosPath, JSON.stringify(produtos, null, 2));
    }
};

// Função para remover um produto
const removerProduto = (id) => {
    const produtos = lerProdutos();
    const produtosFiltrados = produtos.filter(produto => produto.id !== id);
    fs.writeFileSync(produtosPath, JSON.stringify(produtosFiltrados, null, 2));
};

// Exportando as funções para uso em outras partes do aplicativo
module.exports = {
    lerProdutos,
    adicionarProduto,
    editarProduto,
    removerProduto
};