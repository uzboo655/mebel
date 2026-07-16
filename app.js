
const burger = document.getElementById('burgerBtn');
const nav = document.getElementById('mainNav');
burger.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

function formatSom(amount) {
    return amount.toLocaleString('fr-FR').replace(/\u202f/g, ' ') + " so'm";
}

const products = [
    {
        id: 1, name: "Shift chiroq", price: 180000, old: 210000, category: "Yoritgich",
        img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop",
        desc: "Zamonaviy interyerlar uchun mo'ljallangan minimalistik shift chiroq. Mehmonxona va oshxona uchun ideal.",
        size: "Ø 40 x 12 sm", material: "Metall, shisha", colors: ["#2b2b2b", "#c9a227", "#e8e4da"]
    },
    {
        id: 2, name: "Yog'och stul", price: 150000, old: 175000, category: "Stul",
        img: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop",
        desc: "Tabiiy yog'ochdan tayyorlangan qulay va chidamli stul. Oshxona va ovqatlanish xonasi uchun mos.",
        size: "45 x 52 x 82 sm", material: "Qarag'ay yog'ochi", colors: ["#8a5a35", "#c98a4b", "#3c2a1e"]
    },
    {
        id: 4, name: "Prujinali krovat", price: 2100000, old: 2400000, category: "Krovat",
        img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop",
        desc: "Ortopedik prujina tizimiga ega qulay krovat. Yumshoq ekokojani qoplama bilan.",
        size: "160 x 200 sm", material: "Yog'och karkas, ekokoja", colors: ["#d7a98a", "#8a8f86", "#3c2a1e"]
    },
    {
        id: 5, name: "Yumshoq divan", price: 5900000, old: 6500000, category: "Divan",
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop",
        desc: "3 o'rinli yumshoq divan, yuqori zichlikdagi porolon va mustahkam mato bilan qoplangan.",
        size: "220 x 95 x 85 sm", material: "Mebel matosi, porolon", colors: ["#7a8f86", "#c9beac", "#2b2b2b"]
    },
    {
        id: 6, name: "Devoriy javon", price: 980000, category: "Shkaf",
        img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop",
        desc: "Zamonaviy devoriy javon — kitob va dekor buyumlarini joylashtirish uchun qulay.",
        size: "150 x 30 x 90 sm", material: "MDF", colors: ["#f2efe9", "#8a5a35", "#3c3a38"]
    },
    {
        id: 7, name: "Ish stoli", price: 1320000, old: 1490000, category: "Stol",
        img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=600&auto=format&fit=crop",
        desc: "Keng ish yuzasiga ega, tortmalari bilan jihozlangan zamonaviy ish stoli.",
        size: "120 x 60 x 75 sm", material: "LDSP, metall oyoq", colors: ["#c9beac", "#2b2b2b", "#f2efe9"]
    },
    {
        id: 8, name: "Kreslolar", price: 1750000, old: 1990000, category: "Divan",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop",
        desc: "Yumshoq va qulay bitta o'rindiqli kreslo, mehmonxona uchun ajoyib qo'shimcha.",
        size: "80 x 85 x 90 sm", material: "Mebel matosi, porolon", colors: ["#d7a98a", "#3c3a38", "#c9beac"]
    },
     {       
        id: 9, name: "Ofis kreslosi", price: 1150000, old: 1350000, category: "Kreslo",
        img: "https://images.unsplash.com/photo-1589779256250-a8743f78f4af?q=80&w=600&auto=format&fit=crop",
        desc: "Balandligi sozlanadigan, aylanuvchi g'ildiraklarga ega ergonomik ish kreslosi. Uzoq vaqt o'tirish uchun qulay.",
        size: "60 x 60 x 110-120 sm", material: "Setka mato, metall karkas", colors: ["#2b2b2b", "#3c3a38", "#8a8f86"]
    },
    {
        id: 10, name: "Devoriy oyna", price: 420000, old: 490000, category: "Oyna",
        img: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?q=80&w=600&auto=format&fit=crop",
        desc: "Yog'och ramkali, zamonaviy dizayndagi devoriy oyna. Yotoqxona yoki dahliz uchun ideal.",
        size: "60 x 90 sm", material: "Yog'och ramka, oyna", colors: ["#8a5a35", "#3c2a1e", "#c9a227"]
    },
    {
        id: 11, name: "Kitob javoni", price: 890000, old: 1050000, category: "Shkaf",
        img: "https://images.unsplash.com/photo-1593071045469-a45708d54b3d?q=80&w=600&auto=format&fit=crop",
        desc: "Ko'p bo'linmali, keng sig'imli kitob va dekor javoni. Ish xonasi yoki mehmonxona uchun mos.",
        size: "120 x 30 x 180 sm", material: "MDF, yog'och", colors: ["#f2efe9", "#8a5a35", "#3c3a38"]
    },
    {
        id: 12, name: "Kofe stoli", price: 640000, old: 750000, category: "Stol",
        img: "https://images.unsplash.com/photo-1647967527216-adea2f078e07?q=80&w=600&auto=format&fit=crop",
        desc: "Yumaloq shakldagi kichik kofe stoli, mehmonxona divani yonida ishlatish uchun qulay.",
        size: "Ø 60 x 45 sm", material: "Yog'och", colors: ["#8a5a35", "#3c2a1e", "#c9beac"]
    },{
    id: 13, name: "Yotoq stoli", price: 380000, old: 450000, category: "Stol",
    img: "https://images.unsplash.com/photo-1593194632872-3d19dab6e278?q=80&w=600&auto=format&fit=crop",
    desc: "2 tortmali kichik yotoq stoli. Krovat yonida kitob, soat yoki telefonni qo'yish uchun qulay.",
    size: "40 x 35 x 55 sm", material: "Yog'och, MDF", colors: ["#8a5a35", "#f2efe9", "#3c2a1e"]
},
{
    id: 14, name: "Bar stul", price: 290000, old: 340000, category: "Stul",
    img: "https://images.unsplash.com/photo-1566921895456-1cee64031c33?q=80&w=600&auto=format&fit=crop",
    desc: "Baland oyoqli yog'och bar stul. Oshxona barlari va kafe uchun qulay.",
    size: "35 x 35 x 75 sm", material: "Qattiq yog'och", colors: ["#8a5a35", "#3c2a1e", "#2b2b2b"]
},{
    id: 15, name: "Kiyim komodi", price: 1450000, old: 1650000, category: "Shkaf",
    img: "https://images.unsplash.com/photo-1698953704644-6fb636c6389d?q=80&w=600&auto=format&fit=crop",
    desc: "4 tortmali keng komod. Yotoqxona yoki dahliz uchun qo'shimcha saqlash joyi.",
    size: "100 x 45 x 90 sm", material: "Qattiq yog'och", colors: ["#8a5a35", "#3c2a1e", "#f2efe9"]
},
{
    id: 16, name: "Pol chiroq", price: 460000, old: 540000, category: "Yoritgich",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop",
    desc: "Baland pol chirog'i, mehmonxona yoki mutolaa burchagi uchun yumshoq yoritish beradi.",
    size: "Ø 30 x 150 sm", material: "Metall, mato abajur", colors: ["#2b2b2b", "#8a8f86", "#c9a227"]
}
];

const categories = ["Barchasi", ...new Set(products.map(p => p.category))];
let activeCategory = "Barchasi";

const filterBar = document.getElementById('filterBar');
filterBar.innerHTML = categories.map(c =>
    `<button class="filter-btn${c === activeCategory ? ' active' : ''}" data-cat="${c}">${c}</button>`
).join('');

filterBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
    renderProducts();
});

const grid = document.getElementById('productGrid');

function renderProducts() {
    const list = activeCategory === "Barchasi" ? products : products.filter(p => p.category === activeCategory);
    grid.innerHTML = list.map(p => `
        <div class="product-card" data-id="${p.id}">
          <div class="product-thumb" data-id="${p.id}">
            <img src="${p.img}" alt="${p.name}">
            <button class="add-btn" data-id="${p.id}" aria-label="${p.name} savatga qo'shish">+</button>
          </div>
          <h4>${p.name}</h4>
          <span class="price-new">${formatSom(p.price)}</span>${p.old ? `<span class="price-old">${formatSom(p.old)}</span>` : ''}
        </div>
      `).join('');
}
renderProducts();

grid.addEventListener('click', e => {
    const addBtn = e.target.closest('.add-btn');
    const thumb = e.target.closest('.product-thumb');

    if (addBtn) {
        e.stopPropagation();
        const id = Number(addBtn.dataset.id);
        addToCart(id);
        addBtn.classList.add('added');
        setTimeout(() => addBtn.classList.remove('added'), 400);
        showToast("Savatga qo'shildi");
        return;
    }
    if (thumb) {
        openModal(Number(thumb.dataset.id));
    }
});

const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const overlayBg = document.getElementById('overlayBg');

function openModal(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    modalBody.innerHTML = `
        <div class="modal-img"><img src="${p.img}" alt="${p.name}"></div>
        <div class="modal-info">
          <span class="cat-tag">${p.category}</span>
          <h2>${p.name}</h2>
          <div class="modal-price-row">
            <span class="price-new">${formatSom(p.price)}</span>
            ${p.old ? `<span class="price-old">${formatSom(p.old)}</span>` : ''}
          </div>
          <p class="modal-desc">${p.desc}</p>
          <div class="spec-list">
            <div class="spec-row"><span class="label">O'lchami</span><span class="val">${p.size}</span></div>
            <div class="spec-row"><span class="label">Materiali</span><span class="val">${p.material}</span></div>
            <div class="spec-row"><span class="label">Ranglari</span><span class="val"><div class="color-dots">${p.colors.map(c => `<span style="background:${c}"></span>`).join('')}</div></span></div>
          </div>
          <button class="btn btn-primary" data-id="${p.id}" id="modalAddBtn"><i class="bi bi-bag-plus"></i> Savatga qo'shish</button>
        </div>
      `;
    document.getElementById('modalAddBtn').addEventListener('click', () => {
        addToCart(p.id);
        showToast("Savatga qo'shildi");
    });
    productModal.classList.add('open');
    overlayBg.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    productModal.classList.remove('open');
    if (!cartDrawer.classList.contains('open')) overlayBg.classList.remove('show');
    document.body.style.overflow = '';
}

document.getElementById('modalCloseBtn').addEventListener('click', closeModal);

let cart = [];
const cartDrawer = document.getElementById('cartDrawer');
const cartItemsEl = document.getElementById('cartItems');
const cartFootEl = document.getElementById('cartFoot');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const cartBtn = document.getElementById('cartBtn');
const cartCloseBtn = document.getElementById('cartCloseBtn');

function addToCart(id, qty = 1) {
    const existing = cart.find(i => i.id === id);
    if (existing) existing.qty += qty;
    else cart.push({ id, qty });
    renderCart();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    renderCart();
}

function renderCart() {
    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    cartCountEl.textContent = totalQty;
    cartCountEl.classList.toggle('hidden', totalQty === 0);

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `<div class="cart-empty"><i class="bi bi-bag"></i>Savatingiz hozircha bo'sh</div>`;
        cartFootEl.style.display = 'none';
        return;
    }

    cartFootEl.style.display = 'block';
    let total = 0;
    cartItemsEl.innerHTML = cart.map(item => {
        const p = products.find(x => x.id === item.id);
        const lineTotal = p.price * item.qty;
        total += lineTotal;
        return `
          <div class="cart-item">
            <div class="thumb"><img src="${p.img}" alt="${p.name}"></div>
            <div class="info">
              <h5>${p.name}</h5>
              <div class="unit-price">${formatSom(p.price)} / dona</div>
              <div class="qty-row">
                <div class="qty-ctrl">
                  <button data-act="dec" data-id="${p.id}">−</button>
                  <span>${item.qty}</span>
                  <button data-act="inc" data-id="${p.id}">+</button>
                </div>
                <button class="remove-btn" data-act="remove" data-id="${p.id}" aria-label="O'chirish"><i class="bi bi-trash3"></i></button>
              </div>
            </div>
          </div>
        `;
    }).join('');
    cartTotalEl.textContent = formatSom(total);
}
renderCart();

cartItemsEl.addEventListener('click', e => {
    const btn = e.target.closest('button[data-act]');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (btn.dataset.act === 'inc') changeQty(id, 1);
    if (btn.dataset.act === 'dec') changeQty(id, -1);
    if (btn.dataset.act === 'remove') removeFromCart(id);
});

function openCart() {
    cartDrawer.classList.add('open');
    overlayBg.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartDrawer.classList.remove('open');
    if (!productModal.classList.contains('open')) overlayBg.classList.remove('show');
    document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
cartCloseBtn.addEventListener('click', closeCart);
overlayBg.addEventListener('click', () => { closeCart(); closeModal(); });

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeCart(); closeModal(); }
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) return;
    let msg = "Assalomu alaykum, quyidagi mahsulotlarni buyurtma qilmoqchiman:%0A%0A";
    let total = 0;
    cart.forEach(item => {
        const p = products.find(x => x.id === item.id);
        total += p.price * item.qty;
        msg += `• ${p.name} — ${item.qty} dona (${formatSom(p.price)})%0A`;
    });
    msg += `%0AJami: ${formatSom(total)}`;
    window.open(`https://t.me/abrorxonmebel3818?text=${msg}`, '_blank');
});

const toast = document.getElementById('toast');
const toastText = document.getElementById('toastText');
let toastTimer;
function showToast(text) {
    toastText.textContent = text;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}