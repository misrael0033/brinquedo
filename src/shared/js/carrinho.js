const carrinho = {
    itens: [],
    
    adicionarProduto: function(produto) {
        this.itens.push(produto);
        this.atualizarCarrinho();
    },

    removerProduto: function(produtoId) {
        this.itens = this.itens.filter(item => item.id !== produtoId);
        this.atualizarCarrinho();
    },

    atualizarCarrinho: function() {
        const carrinhoElement = document.getElementById('carrinho');
        carrinhoElement.innerHTML = '';

        this.itens.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item-carrinho';
            itemElement.innerHTML = `
                <h3>${item.nome}</h3>
                <p>Preço: R$ ${item.preco.toFixed(2)}</p>
                <button onclick="carrinho.removerProduto(${item.id})">Remover</button>
            `;
            carrinhoElement.appendChild(itemElement);
        });

        this.atualizarTotal();
    },

    atualizarTotal: function() {
        const totalElement = document.getElementById('total');
        const total = this.itens.reduce((acc, item) => acc + item.preco, 0);
        totalElement.innerHTML = `Total: R$ ${total.toFixed(2)}`;
    },

    finalizarCompra: function() {
        if (this.itens.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }
        // Aqui você pode integrar com a plataforma de checkout
        alert('Compra finalizada com sucesso!');
        this.itens = [];
        this.atualizarCarrinho();
    }
};

// Exemplo de uso
// carrinho.adicionarProduto({ id: 1, nome: 'Produto 1', preco: 100 });
// carrinho.adicionarProduto({ id: 2, nome: 'Produto 2', preco: 200 });