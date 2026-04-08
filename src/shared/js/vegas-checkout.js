// Este arquivo contém a integração com a plataforma Vegas Checkout para processar pagamentos.

document.addEventListener('DOMContentLoaded', function() {
    const checkoutButton = document.getElementById('checkout-button');

    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            const cartItems = getCartItems(); // Função para obter itens do carrinho
            const totalAmount = calculateTotal(cartItems); // Função para calcular o total

            // Configuração do pagamento
            const paymentData = {
                items: cartItems,
                total: totalAmount,
                currency: 'BRL',
                // Adicione outros dados necessários para o checkout
            };

            // Chamada para a API da Vegas Checkout
            fetch('https://api.vegascheckout.com/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentData),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Redirecionar para a página de sucesso ou exibir mensagem
                    window.location.href = '/checkout/success';
                } else {
                    // Exibir mensagem de erro
                    alert('Erro no pagamento: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Ocorreu um erro ao processar o pagamento.');
            });
        });
    }

    function getCartItems() {
        // Implementar lógica para obter os itens do carrinho
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function calculateTotal(items) {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
});