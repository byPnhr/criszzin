// Exibindo cartinhas enviadas (sem backend, armazenadas no localStorage)
document.getElementById("cartinha-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const cartinhaInput = document.getElementById("cartinha-input");
    const cartinhaTexto = cartinhaInput.value.trim();

    if (cartinhaTexto) {
        // Adiciona a cartinha ao localStorage
        let cartinhas = JSON.parse(localStorage.getItem('cartinhas')) || [];
        cartinhas.push(cartinhaTexto);
        localStorage.setItem('cartinhas', JSON.stringify(cartinhas));

        // Atualiza a lista de cartinhas exibidas
        displayCartinhas();
    }

    // Limpa o campo de entrada
    cartinhaInput.value = "";
});

// Função para exibir as cartinhas
function displayCartinhas() {
    const cartinhasContainer = document.getElementById("cartinhas-enviadas");
    cartinhasContainer.innerHTML = ""; // Limpa a lista atual

    let cartinhas = JSON.parse(localStorage.getItem('cartinhas')) || [];

    cartinhas.forEach(function(cartinha) {
        const div = document.createElement("div");
        div.textContent = cartinha;
        cartinhasContainer.appendChild(div);
    });
}

// Exibe as cartinhas ao carregar o site
window.onload = displayCartinhas;