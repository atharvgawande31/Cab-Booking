/* ====== Shared JS for The Boho House site ====== */

/* ---------- Utilities ---------- */
function $(sel) { return document.querySelector(sel); }
function $all(sel) { return Array.from(document.querySelectorAll(sel)); }
function formatINR(n) { return '₹' + Number(n).toFixed(0); }

/* ---------- Cart (localStorage) ---------- */
const CART_KEY = 'boho_cart_v1';

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(itemId, qty = 1) {
  const btn = document.querySelector(`[data-add="${itemId}"]`);
  if (!btn) return;
  const card = btn.closest('.menu-item');
  if (!card) return;

  const title = card.querySelector('h4').textContent;
  const price = parseInt(card.querySelector('strong').textContent.replace(/[^\d]/g, ''));
  const img = card.querySelector('img').src;

  const cart = getCart();
  const found = cart.find(ci => ci.id === itemId);
  if (found) found.qty += qty;
  else cart.push({ id: itemId, title, price, img, qty });
  saveCart(cart);
  alert(`${title} added to cart`);
}

function updateCartCount() {
  const c = getCart().reduce((s, i) => s + i.qty, 0);
  $all('#cart-count').forEach(el => el.textContent = c);
}

/* ---------- Render Cart (cart.html) ---------- */
function renderCartPage() {
  const container = $('#cartContainer');
  if (!container) return;
  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = `<p class="text-center">Your cart is empty. <a href="menu.html">Browse menu</a></p>`;
    return;
  }
  let html = `<div>`;
  cart.forEach(ci => {
    html += `
      <div class="cart-row" data-id="${ci.id}">
        <img src="${ci.img}" alt="${ci.title}">
        <div style="flex:1">
          <strong>${ci.title}</strong>
          <div class="small">Unit: ${formatINR(ci.price)}</div>
          <div style="margin-top:8px">
            Qty: <input class="qty-input" type="number" min="1" value="${ci.qty}" data-qty="${ci.id}">
            <button class="btn ghost" data-remove="${ci.id}" style="margin-left:8px">Remove</button>
          </div>
        </div>
        <div style="min-width:100px; text-align:right">
          <div><strong>${formatINR(ci.price * ci.qty)}</strong></div>
        </div>
      </div>
    `;
  });
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  html += `</div>
    <div style="margin-top:12px; text-align:right">
      <div style="font-size:18px; margin-bottom:8px"><strong>Total: ${formatINR(total)}</strong></div>
    </div>
  `;
  container.innerHTML = html;

  // qty listeners
  $all('[data-qty]').forEach(inp => {
    inp.addEventListener('change', e => {
      const id = e.currentTarget.dataset.qty;
      let val = parseInt(e.currentTarget.value) || 1;
      if (val < 1) val = 1;
      const cart = getCart();
      const it = cart.find(x => x.id === id);
      if (it) it.qty = val;
      saveCart(cart);
      renderCartPage();
    });
  });

  // remove listeners
  $all('[data-remove]').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = e.currentTarget.dataset.remove;
      let cart = getCart().filter(x => x.id !== id);
      saveCart(cart);
      renderCartPage();
    });
  });
}

/* ---------- Clear & Checkout actions (cart.html) ---------- */
function setupCartActions() {
  const clearBtn = $('#clearCart');
  if (clearBtn) clearBtn.addEventListener('click', () => {
    if (confirm('Clear your cart?')) {
      localStorage.removeItem(CART_KEY);
      updateCartCount();
      renderCartPage();
    }
  });

  const checkout = $('#checkoutBtn');
  if (checkout) checkout.addEventListener('click', () => {
    const cart = getCart();
    if (cart.length === 0) {
      alert('Cart is empty');
      return;
    }
    alert('Checkout placeholder — in real app integrate payment gateway.\nOrder total: ' +
      formatINR(cart.reduce((s, i) => s + i.price * i.qty, 0)));
    localStorage.removeItem(CART_KEY);
    renderCartPage();
    updateCartCount();
    window.location.href = 'index.html';
  });
}

/* ---------- Reservation (optional field protection) ---------- */
const today = new Date().toISOString().split("T")[0];
const resDate = document.getElementById("resDate");
if (resDate) resDate.setAttribute("min", today);

/* ---------- Feedback (feedback.html) ---------- */
function setupFeedback() {
  const form = $('#feedbackForm');
  const list = $('#feedbackList');
  if (!form || !list) return;

  function refreshList() {
    const items = JSON.parse(localStorage.getItem('boho_feedback') || '[]').slice().reverse();
    list.innerHTML = items.length ? items.map(f => `
      <div class="feedback-card">
        <strong>${escapeHtml(f.name)}</strong> <small>(${new Date(f.ts).toLocaleString()})</small>
        <p class="small">${escapeHtml(f.message)}</p>
      </div>`).join('') : '<p class="small">No feedback yet.</p>';
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#fbName').value.trim();
    const email = $('#fbEmail').value.trim();
    const message = $('#fbMessage').value.trim();
    if (!name || !email || !message) return alert('Please fill all fields.');
    const arr = JSON.parse(localStorage.getItem('boho_feedback') || '[]');
    arr.push({ name, email, message, ts: Date.now() });
    localStorage.setItem('boho_feedback', JSON.stringify(arr));
    form.reset();
    refreshList();
    alert('Thanks for your feedback!');
  });

  refreshList();
}

/* ---------- Slider (index.html): auto + manual ---------- */
function setupSlider() {
  const slides = document.querySelector('.slides');
  if (!slides) return;

  const imgs = slides.querySelectorAll('img');
  let idx = 0;
  const total = imgs.length;

  // make slides container wide enough
  slides.style.width = `${total * 100}%`;

  function show(i) {
    slides.style.transform = `translateX(${-i * 100}%)`;
  }

  function nextSlide() {
    idx = (idx + 1) % total;
    show(idx);
  }

  function prevSlide() {
    idx = (idx - 1 + total) % total;
    show(idx);
  }

  let timer = setInterval(nextSlide, 3500);

  const prev = $('#prevBtn'), next = $('#nextBtn');
  if (prev) prev.addEventListener('click', () => { prevSlide(); resetTimer(); });
  if (next) next.addEventListener('click', () => { nextSlide(); resetTimer(); });

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 3500);
  }
}

/* ---------- Escape helper for feedback display ---------- */
function escapeHtml(s = '') {
  return s.replaceAll('&', '&amp;')
          .replaceAll('<', '&lt;')
          .replaceAll('>', '&gt;')
          .replaceAll('"', '&quot;');
}

/* ---------- Initialize on page load ---------- */
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCartPage();
  setupCartActions();
  setupFeedback();
  setupSlider();

  // set footer years across pages if present
  $all('[id^=year]').forEach(el => el.textContent = new Date().getFullYear());

  // attach add-to-cart buttons from static menu
  $all('[data-add]').forEach(btn => {
    btn.addEventListener('click', e => {
      addToCart(e.currentTarget.dataset.add, 1);
    });
  });
});
