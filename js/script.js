// Variável global para armazenar todos os produtos
let allProducts = [];

// Função para inicializar a lista de produtos
function initializeProducts() {
    allProducts = Array.from(document.querySelectorAll('.product'));
}

// Função para filtrar produtos por pesquisa
document.getElementById('search-input').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase(); // Obtém o texto digitado e converte para minúsculas

    // Reinicia o estado dos produtos
    allProducts.forEach(product => {
        product.style.display = 'block'; // Exibe todos os produtos
    });

    // Filtra os produtos com base no termo de pesquisa
    allProducts.forEach(product => {
        const productName = product.querySelector('.card-title').textContent.toLowerCase(); // Nome do produto
        if (!productName.includes(searchTerm)) {
            product.style.display = 'none'; // Oculta o produto se não corresponder à busca
        }
    });
});

// Função para ordenar e filtrar produtos por categoria
function sortProducts() {
    const sortOption = document.getElementById('sort-options').value;

    // Reinicia o estado dos produtos
    allProducts.forEach(product => {
        product.style.display = 'block'; // Exibe todos os produtos
    });

    // Filtra os produtos com base na categoria selecionada
    const filteredProducts = allProducts.filter(product => {
        if (sortOption.startsWith('category-')) {
            const category = sortOption.split('-')[1];
            return product.getAttribute('data-category') === category;
        }
        return true; // Se não for uma opção de categoria, mantém todos os produtos
    });

    // Ordena os produtos com base na opção selecionada
    filteredProducts.sort((a, b) => {
        if (sortOption === 'price-desc') {
            return parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price'));
        } else if (sortOption === 'price-asc') {
            return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
        }
        return 0; // Default: não altera a ordem
    });

    // Reorganiza os produtos no DOM
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpa a lista atual

    // Adiciona os produtos filtrados e ordenados de volta à lista
    filteredProducts.forEach(product => {
        productList.appendChild(product);
    });

    // Oculta os produtos que não foram filtrados
    allProducts.forEach(product => {
        if (!filteredProducts.includes(product)) {
            product.style.display = 'none';
        }
    });
}

// Event Listener para ordenação
document.getElementById('sort-options').addEventListener('change', sortProducts);

// Inicializa os produtos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
});