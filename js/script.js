//Mostrarprodutos em geral
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpa qualquer conteúdo existente
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'col-xl-2 col-lg-3 col-md-4 col-6 product py-2';
        productDiv.innerHTML = 
            `<div class="card text-center bg-light h-100 d-flex flex-column" style="max-width: 250px;">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text truncate-4l">${product.description}</p>
                </div>
                <div class="card-footer">
                    <p class="card-text"><strong>R$ ${product.valor}</strong></p>
                </div>
            </div>`;
        productList.appendChild(productDiv);
    });
}

// Função de paginação
let currentPage = 1; // Página atual
const productsPerPage = 12; // Número de produtos por página

function paginateProducts(products, page) {
    const start = (page - 1) * productsPerPage;
    const end = page * productsPerPage;
    return products.slice(start, end);
}

function updatePaginationControls(totalPages) {
    const paginationControls = document.getElementById('pagination-controls');
    paginationControls.innerHTML = '';

    // Cria a seta de voltar
    const prevButton = document.createElement('button');
    prevButton.innerText = '<';
    prevButton.className = 'btn btn-outline-primary mx-1';
    prevButton.disabled = currentPage === 1; // Desativa se estiver na primeira página
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updateProductDisplay();
        }
    });
    paginationControls.appendChild(prevButton);

    // Calcula o intervalo de páginas a serem exibidas (grupo de 3 centrado na página atual)
    const maxPagesToShow = 3; // Máximo de páginas visíveis
    let startPage = Math.max(currentPage - 1, 1); // Garante que não seja menor que 1
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages); // Garante que não ultrapasse totalPages

    // Ajusta o início para manter o grupo de 3 páginas
    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    // Exibe os números das páginas
    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.className = 'btn btn-outline-primary mx-1';
        if (i === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            currentPage = i;
            updateProductDisplay();
        });
        paginationControls.appendChild(button);
    }

    // Cria a seta de avançar
    const nextButton = document.createElement('button');
    nextButton.innerText = '>';
    nextButton.className = 'btn btn-outline-primary mx-1';
    nextButton.disabled = currentPage === totalPages; // Desativa se estiver na última página
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updateProductDisplay();
        }
    });
    paginationControls.appendChild(nextButton);
}

function getFilteredAndSortedProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const sortOption = document.getElementById('sort-options').value;

    // Filtra os produtos com base no termo de pesquisa
    let filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    // Aplica ordenação ou filtro de categoria
    if (sortOption === "price-asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption.startsWith("category-")) {
        let category = sortOption.replace("category-", "");
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    return filteredProducts;
}

// Atualiza a exibição dos produtos com base na página atual
function updateProductDisplay() {
    const filteredAndSortedProducts = getFilteredAndSortedProducts();
    const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);

    const paginatedProducts = paginateProducts(filteredAndSortedProducts, currentPage);
    displayProducts(paginatedProducts);
    updatePaginationControls(totalPages);
}

// Exibe todos os produtos inicialmente
updateProductDisplay();

// Função de pesquisa
document.getElementById('search-input').addEventListener('input', function () {
    currentPage = 1; // Volta para a primeira página ao pesquisar
    updateProductDisplay();
});

// Função para filtrar e ordenar produtos
document.getElementById('sort-options').addEventListener('change', function () {
    currentPage = 1; // Volta para a primeira página ao mudar a ordenação
    updateProductDisplay();
});