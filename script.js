document.addEventListener("DOMContentLoaded", function() {
    const produtos = {
        "cenoura": 3.99,
        "batata": 9.99,
        "coca-cola": 10.99,
        "Arroz": 5.99,
        "Feijão": 3.99,
        "Macarrão": 2.49,
        "Óleo de Soja": 4.50,
        "Açúcar": 3.29,
        "Café": 8.99,
        "Leite": 2.79,
        "Pão": 3.49,
        "Banana": 1.99,
        "Maçã": 2.49
    };

    const productList = document.getElementById("productList");
    const cartList = document.getElementById("cartList");
    const totalSpan = document.getElementById("total");
    let totalCompra = 0;

    // Adiciona cada produto à lista de produtos disponíveis
    for (const produto in produtos) {
        const preco = produtos[produto];
        const listItem = document.createElement("div");
        listItem.textContent = `${produto}: R$ ${preco.toFixed(2)}`;
        listItem.classList.add("product-item");
        listItem.addEventListener("click", function() {
            adicionarAoCarrinho(produto, preco);
        });
        productList.appendChild(listItem);
    }

    function adicionarAoCarrinho(produto, preco) {
        const listItem = document.createElement("li");
        listItem.textContent = `${produto}: R$ ${preco.toFixed(2)}`;
        
        // Adiciona botão de remoção para o item
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.addEventListener("click", function() {
            removerDoCarrinho(produto, preco);
            cartList.removeChild(listItem);
        });
        
        listItem.appendChild(removeButton);
        
        cartList.appendChild(listItem);
        totalCompra += preco;
        totalSpan.textContent = totalCompra.toFixed(2);
    }

    function removerDoCarrinho(produto, preco) {
        totalCompra -= preco;
        totalSpan.textContent = totalCompra.toFixed(2);
    }

    function checkout() {
        alert(`Total da compra: R$ ${totalCompra.toFixed(2)}`);
        // adicionar lógica adicional para finalizar a compra, como enviar os dados para um servidor, etc.
    }
});
