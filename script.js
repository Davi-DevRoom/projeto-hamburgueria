const menu = document.querySelector('#menu');
const cartModal = document.querySelector('#cart-modal');
const cartItemsContainer = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');
const checkoutBtn = document.querySelector('#checkout-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const cartBtn = document.querySelector('#cart-btn');
const cartCounter = document.querySelector('#cart-count');
const addressInput = document.querySelector('#address');
const addressWarn = document.querySelector('#address-warn');

// Lista de carrinho do menu
let cart = []


// Abrir o modal carrinho 
cartBtn.addEventListener('click', function(){
    cartModal.style.display = "flex";
})

// Fechar o modal quando clicar fora
cartModal.addEventListener('click', function(event){
    if(event.target === cartModal) cartModal.style.display = "none";
})

// Fechar no botão "fechar"
closeModalBtn.addEventListener('click', function(){
    cartModal.style.display = "none";
})

// Adicionar itens do menu ao modal
menu.addEventListener('click', function(event){
    // console.log(event.target);
    let parentButton = event.target.closest(".add-to-cart-btn");
    if (parentButton){
        const name = parentButton.getAttribute("data-name");
        const price = parseFloat(parentButton.getAttribute("data-price"));

        //adicionar ao carrinho 
        addToCart(name, price);
    }
})


// Função para adicionar ao carrinho
function addToCart(name, price){
    const existingItem = cart.find(item => item.name === name);

    if(existingItem){
        // se o item já existe, aumenta apenas a quantidade +1
        existingItem.quantity += 1;
        return;
    }

    
    cart.push({
        name,
        price,
        quantity: 1,
    })
}

function updateCartModal(){
    cartItemsContainer.innerHtML = "";
// update cart
}