import{P as l}from"./products-B1JUsh3z.js";const e=(t,n=document)=>n.querySelector(t),p=(t,n=document)=>[...n.querySelectorAll(t)],u=t=>"$"+Number(t).toLocaleString("en-US"),f="velox-bag",E=()=>{try{return JSON.parse(localStorage.getItem(f)||"[]")}catch{return[]}},w=t=>{try{localStorage.setItem(f,JSON.stringify(t))}catch{}},S=new URLSearchParams(location.search),A=S.get("id")||"lime",s={product:l.find(t=>t.id===A)||l[0],shot:0,size:"M",qty:1,cart:E(),front:"A"};function m(t){const n=(t.looks||[]).map((c,a)=>({src:c,label:"Look 0"+(a+1)})),o=(t.details||[]).map((c,a)=>({src:c,label:"Detail 0"+(a+1)}));return[...n,...o]}function q(t){const n=document.documentElement.style;n.setProperty("--accent",t.accent),n.setProperty("--accent-soft",t.accentSoft),n.setProperty("--glow",t.glow),document.documentElement.dataset.theme=t.id,document.title=`VELOX — ${t.name} ${t.colorway}`}function C(){const t=s.product,n=m(t);s.shot>=n.length&&(s.shot=0);const o=n[s.shot],c=s.front==="A"?e("#stageB"):e("#stageA"),a=s.front==="A"?e("#stageA"):e("#stageB");e("#stage").style.backgroundImage=`url(${o.src})`,c.src=o.src,c.alt=`${t.name} ${o.label}`,c.classList.add("is-on"),a.classList.remove("is-on"),s.front=s.front==="A"?"B":"A",e("#shotBadge").textContent=o.label,p("#thumbs [data-shot]").forEach(i=>i.classList.toggle("is-on",+i.dataset.shot===s.shot))}function h(){const t=s.product,n=m(t);s.shot>=n.length&&(s.shot=0),q(t),e("#crumbs").innerHTML=`<a href="./">Home</a> / <a href="./#shop">Shop</a> / <span>${t.name} ${t.colorway}</span>`,e("#thumbs").innerHTML=n.map((a,i)=>`
    <button type="button" class="pdp__thumb ${i===s.shot?"is-on":""}" data-shot="${i}" style="background-image:url(${a.src})" aria-label="${a.label}"></button>
  `).join("");const o=n[s.shot];e("#stage").style.backgroundImage=`url(${o.src})`,e("#stageA").src=o.src,e("#stageA").alt=`${t.name} ${o.label}`,e("#stageA").classList.add("is-on"),e("#stageB").classList.remove("is-on"),s.front="A",e("#shotBadge").textContent=o.label,n.forEach(a=>{const i=new Image;i.src=a.src}),e("#fitNote").textContent=t.fit||"",e("#reviewCount").textContent=`${t.reviews||2} reviews`,e("#info").innerHTML=`
    <div class="pdp__brand">VELOX</div>
    <h1>${t.name} ${t.colorway}</h1>
    <div class="pdp__sub">${t.gender} · ${t.tagline}</div>
    <div class="pdp__stars">★★★★★ <span>${t.rating||5} · ${t.reviews||2} ratings</span></div>
    <div class="pdp__price">${u(t.price)}</div>
    <p class="pdp__blurb">${t.blurb}</p>
    <div class="pdp__label">Colourway</div>
    <div class="pdp__swatches">
      ${l.map(a=>`
        <a class="pdp__swatch ${a.id===t.id?"is-on":""}" href="./buy.html?id=${a.id}" title="${a.name} ${a.colorway}" style="background-image:url(${a.looks?.[0]||a.background})"></a>
      `).join("")}
    </div>
    <div class="pdp__label">Select size</div>
    <div class="pdp__sizes">
      ${["XS","S","M","L","XL"].map(a=>`<button type="button" data-size="${a}" class="${s.size===a?"is-on":""}">${a}</button>`).join("")}
    </div>
    <div class="pdp__qty">
      <button type="button" data-q="-1">−</button>
      <span>${s.qty}</span>
      <button type="button" data-q="1">+</button>
    </div>
    <button class="btn btn--solid btn--block pdp__bag" id="addBag">ADD TO BAG · ${s.size}</button>
    <a class="btn btn--pill btn--block" href="./#top">VIEW IN 360°</a>
    <div class="pdp__specs">
      <div><b>Fabric</b><span>${t.fabric}</span></div>
      <div><b>Length</b><span>${t.length}</span></div>
      <div><b>Fit</b><span>${t.fit}</span></div>
    </div>
  `;const c=l.filter(a=>a.id!==t.id);e("#similar").innerHTML=c.map(a=>`
    <a class="pdp__card" href="./buy.html?id=${a.id}">
      <span class="pdp__card-img" style="background-image:url(${a.looks?.[2]||a.looks?.[0]})"></span>
      <span class="pdp__card-name">${a.name}</span>
      <span class="pdp__card-meta">${a.colorway} · ${u(a.price)}</span>
    </a>
  `).join(""),z(),p("#thumbs [data-shot]").forEach(a=>a.addEventListener("click",()=>d(+a.dataset.shot)))}function d(t){const n=m(s.product);s.shot=(t+n.length)%n.length,C()}function z(){p("[data-size]").forEach(t=>t.addEventListener("click",()=>{s.size=t.dataset.size,h()})),p("[data-q]").forEach(t=>t.addEventListener("click",()=>{s.qty=Math.max(1,s.qty+Number(t.dataset.q)),h()})),e("#addBag")?.addEventListener("click",x)}function x(){const t=s.product,n=s.cart.find(o=>o.id===t.id&&o.size===s.size);n?n.qty+=s.qty:s.cart.push({id:t.id,qty:s.qty,size:s.size}),w(s.cart),_(),v(`${t.name} ${t.colorway} · ${s.size} added`),y()}function _(){const t=s.cart.reduce((i,r)=>i+r.qty,0),n=e("#cartCount");n.textContent=t,n.classList.toggle("is-on",t>0);const o=e("#cartItems"),c=e("#cartEmpty");s.cart.length?(c.classList.add("is-hidden"),o.innerHTML=s.cart.map(i=>{const r=l.find(g=>g.id===i.id);return`<div class="cart__item">
        <span class="cart__item-thumb" style="background-image:url(${r.looks?.[0]||r.background})"></span>
        <div class="cart__item-meta">
          <div class="cart__item-name">${r.name} ${r.colorway}</div>
          <div class="cart__item-gender">Size ${i.size}</div>
        </div>
        <div class="cart__item-price">${u(r.price*i.qty)}</div>
      </div>`}).join("")):(o.innerHTML="",c.classList.remove("is-hidden"));const a=s.cart.reduce((i,r)=>{const g=l.find(k=>k.id===r.id);return i+g.price*r.qty},0);e("#cartTotal").textContent=u(a)}function y(){e("#cart").classList.add("is-open"),e("#scrim").classList.add("is-open")}function b(){e("#cart").classList.remove("is-open"),e("#scrim").classList.remove("is-open")}function v(t){const n=e("#toast");n.textContent=t,n.classList.add("is-on"),clearTimeout(v._t),v._t=setTimeout(()=>n.classList.remove("is-on"),2200)}e("#prevShot").addEventListener("click",()=>d(s.shot-1));e("#nextShot").addEventListener("click",()=>d(s.shot+1));window.addEventListener("keydown",t=>{t.key==="ArrowRight"&&d(s.shot+1),t.key==="ArrowLeft"&&d(s.shot-1),t.key==="Escape"&&b()});let L=0;e("#stage").addEventListener("pointerdown",t=>{L=t.clientX});e("#stage").addEventListener("pointerup",t=>{const n=t.clientX-L;n>40&&d(s.shot-1),n<-40&&d(s.shot+1)});e("#navCart").addEventListener("click",y);e("#cartClose").addEventListener("click",b);e("#scrim").addEventListener("click",b);const $=e("#navBurger"),B=e("#navLinks");$?.addEventListener("click",()=>{const t=B.classList.toggle("is-open");$.setAttribute("aria-expanded",String(t))});const T=m(s.product)[0];e("#stageA").src=T.src;h();_();
