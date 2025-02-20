document.getElementById('search-input').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase(); // Obtém o texto digitado e converte para minúsculas
    const products = document.querySelectorAll('.product'); // Seleciona todos os produtos

    products.forEach(product => {
        const productName = product.querySelector('.card-title').textContent.toLowerCase(); // Nome do produto
        if (productName.includes(searchTerm)) {
            product.style.display = 'block'; // Mostra o produto se corresponder à busca
        } else {
            product.style.display = 'none'; // Oculta o produto se não corresponder
        }
    });
});

function sortProducts() {
    const sortOption = document.getElementById('sort-options').value;
    const products = Array.from(document.querySelectorAll('.product'));

    // Filtra e ordena os produtos
    products.sort((a, b) => {
        if (sortOption === 'price-desc') {
            return parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price'));
        } else if (sortOption === 'price-asc') {
            return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
        } else if (sortOption.startsWith('category-')) {
            const category = sortOption.split('-')[1];
            const categoryA = a.getAttribute('data-category');
            const categoryB = b.getAttribute('data-category');

            // Coloca os produtos da categoria selecionada primeiro
            if (categoryA === category && categoryB !== category) return -1;
            if (categoryB === category && categoryA !== category) return 1;
            return 0;
        }
        return 0; // Default: não altera a ordem
    });

    // Reorganiza os produtos no DOM
    const productList = document.getElementById('product-list');
    products.forEach(product => productList.appendChild(product));
}

// Event Listener para ordenação
document.getElementById('sort-options').addEventListener('change', sortProducts);
