// checkout.js
document.addEventListener('DOMContentLoaded', function() {
    const checkoutButton = document.getElementById('checkout-button');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCheckoutButton() {
        if (cartItems.length > 0) {
            checkoutButton.disabled = false;
        } else {
            checkoutButton.disabled = true;
        }
    }

    function processCheckout() {
        if (cartItems.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }

        // Aqui você pode integrar com a Vegas Checkout
        // Exemplo de chamada para a API de checkout
        fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: cartItems })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Checkout realizado com sucesso!');
                localStorage.removeItem('cart');
                window.location.href = '/thank-you.html'; // Redirecionar para uma página de agradecimento
            } else {
                alert('Erro ao processar o checkout: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao processar o checkout.');
        });
    }

    checkoutButton.addEventListener('click', processCheckout);
    updateCheckoutButton();
});