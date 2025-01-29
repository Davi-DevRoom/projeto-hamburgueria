const menu = document.querySelector('#menu');
const cartModal = document.querySelector('#cart-modal');
const cartItemsContainer = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');
const checkoutBtn = document.querySelector('#checkout-btn');
const clouseModalBtn = document.querySelector('#close-modal-btn');
const cartBtn = document.querySelector('#cart-btn');
const cartCounter = document.querySelector('#cart-count');
const addressInput = document.querySelector('#address');
const addressWarn = document.querySelector('#address-warn');

cartBtn.addEventListener('click', ()=>{
    cartModal.classList.remove('hidden');
    cartModal.classList.add('flex');
})

cartModal.addEventListener('click', (event)=>{
    if(event.target===cartModal){
        cartModal.classList.remove('flex');
        cartModal.classList.add('hidden');
    }
})