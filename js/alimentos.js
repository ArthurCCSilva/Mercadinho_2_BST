//Alimentos
const allProducts = [
    { 
        name: "Batata", 
        description: "Batatas frescas ideais para frituras ou purês.", 
        valor: "R$ 4,00 ", 
        price: 4.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg" 
    },
    { 
        name: "Arroz - Panelaço", 
        description: "Arroz parboilizado de alta qualidade para suas refeições diárias.", 
        valor: "R$ 5,69", 
        price: 5.69, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Feijão - Preto", 
        description: "Feijão preto cozido rapidamente e perfeito para acompanhamentos.", 
        valor: "R$ 7,99", 
        price: 7.99, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Macarrão - Espaguete", 
        description: "Massa de espaguete para pratos deliciosos como carbonara ou bolonhesa.", 
        valor: "R$ 4,50", 
        price: 5.50, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Pão - Francês", 
        description: "Pão francês fresco e crocante para seu café da manhã.", 
        valor: "R$ 2,50", 
        price: 2.50, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Açúcar - Refinado", 
        description: "Açúcar refinado para adoçar suas bebidas e receitas.", 
        valor: "R$ 3,50", 
        price: 3.50, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    {  
        name: "Farinha - Trigo", 
        description: "Farinha de trigo ideal para bolos, pães e massas caseiras.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Óleo - Soja", 
        description: "Óleo de soja para frituras e preparações culinárias.", 
        valor: "R$ 8,99", 
        price: 8.99, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Sal - Refinado", 
        description: "Sal refinado para temperar suas refeições diárias.", 
        valor: "R$ 2,00", 
        price: 2.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Café - Torrado", 
        description: "Café torrado e moído para um sabor intenso e encorpado.", 
        valor: "R$ 15,00", 
        price: 15.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Molho - Tomate", 
        description: "Molho de tomate pronto para massas e pizzas.", 
        valor: "R$ 4,00", 
        price: 4.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Massa - Lasanha", 
        description: "Massa para lasanha fresca e deliciosa.", 
        valor: "R$ 6,50", 
        price: 6.50, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Queijo - Mussarela", 
        description: "Queijo mussarela fresco para pizzas e lanches.", 
        valor: "R$ 12,00", 
        price: 12.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Presunto - Cozido", 
        description: "Presunto cozido para sanduíches e pratos rápidos.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    {  
        name: "Iogurte - Natural", 
        description: "Iogurte natural rico em probióticos para uma dieta saudável.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Azeite - Oliva", 
        description: "Azeite de oliva extra virgem para saladas e cozimentos.", 
        valor: "R$ 20,00", 
        price: 20.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Polpa - Frutas", 
        description: "Polpa de frutas congelada para sucos naturais.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Milho - Verde", 
        description: "Milho verde fresco para sucos ou acompanhamentos.", 
        valor: "R$ 3,50", 
        price: 3.50, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Trigo - Integral", 
        description: "Farinha de trigo integral para receitas saudáveis.", 
        valor: "R$ 6,00", 
        price: 6.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Quinoa - Branca", 
        description: "Quinoa branca rica em proteínas e nutrientes.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Cuscuz - Marroquino", 
        description: "Cuscuz marroquino para pratos exóticos e nutritivos.", 
        valor: "R$ 8,50", 
        price: 8.50,  
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Geleia - Morango", 
        description: "Geleia de morango artesanal para torradas e sobremesas.", 
        valor: "R$ 7,00", 
        price: 7.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Pipoca - Grãos", 
        description: "Grãos de pipoca para snacks caseiros.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Leite Condensado", 
        description: "Leite condensado para doces e sobremesas.", 
        valor: "R$ 9,00", 
        price: 9.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        name: "Chocolate - Meio Amargo", 
        description: "Chocolate meio amargo para receitas ou consumo direto.", 
        valor: "R$ 12,00", 
        price: 12.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    }
];