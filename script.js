const cart = [];
const cartEl = document.getElementById('cart');
const itemsEl = document.getElementById('cartItems');
const totalEl = document.getElementById('total');
const countEl = document.getElementById('count');

function renderCart(){
  countEl.textContent = cart.length;
  if(!cart.length){
    itemsEl.innerHTML = '<p>Košík je zatím prázdný.</p>';
    totalEl.textContent = '0 Kč';
    return;
  }
  itemsEl.innerHTML = cart.map((p,i)=>`
    <div class="cart-item"><span>${p}</span><button class="remove" data-i="${i}">Odstranit</button></div>
  `).join('');
  const prices = {'Shreki Music — Classic Tee':599,'Music Drives My Way':649,'Shreki Music Hoodie':1099};
  const total = cart.reduce((s,p)=>s+(prices[p]||0),0);
  totalEl.textContent = total.toLocaleString('cs-CZ') + ' Kč';
}
document.querySelectorAll('.add').forEach(btn=>btn.addEventListener('click',()=>{
  cart.push(btn.dataset.product); renderCart(); cartEl.classList.add('open');
}));
itemsEl.addEventListener('click',e=>{
  if(e.target.classList.contains('remove')){cart.splice(+e.target.dataset.i,1);renderCart();}
});
document.getElementById('openCart').onclick=()=>cartEl.classList.add('open');
document.getElementById('closeCart').onclick=()=>cartEl.classList.remove('open');
document.getElementById('checkout').onclick=()=>{
  if(!cart.length) return alert('Košík je prázdný.');
  alert('Demo objednávka: před spuštěním sem napojíme skutečnou objednávku a platbu.');
};
const menuBtn=document.querySelector('.menu-btn'), nav=document.getElementById('nav');
menuBtn.onclick=()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)};
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
document.getElementById('year').textContent=new Date().getFullYear();
renderCart();
