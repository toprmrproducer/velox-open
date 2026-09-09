import{P as p}from"./products-JycdVr5i.js";const a=(t,n=document)=>n.querySelector(t),u=(t,n=document)=>[...n.querySelectorAll(t)],m=t=>"$"+Number(t).toLocaleString("en-US"),f="velox-bag",E=()=>{try{return JSON.parse(localStorage.getItem(f)||"[]")}catch{return[]}},w=t=>{try{localStorage.setItem(f,JSON.stringify(t))}catch{}},S=new URLSearchParams(location.search),A=S.get("id")||"lime",s={product:p.find(t=>t.id===A)||p[0],shot:0,size:"M",qty:1,cart:E(),front:"A"};function g(t){const n=(t.looks||[]).map((c,r)=>({src:c,label:"Look 0"+(r+1)})),i=(t.details||[]).map((c,r)=>({src:c,label:"Detail 0"+(r+1)}));return[...n,...i]}function q(t){const n=document.documentElement.style;n.setProperty("--accent",t.accent),n.setProperty("--accent-soft",t.accentSoft),n.setProperty("--glow",t.glow),document.documentElement.dataset.theme=t.id,document.title=`VELOX — ${t.name} ${t.colorway}`}function z(){const t=s.product,n=g(t);s.shot>=n.length&&(s.shot=0);const i=n[s.shot],c=s.front==="A"?a("#stageB"):a("#stageA"),r=s.front==="A"?a("#stageA"):a("#stageB");a("#stage").style.backgroundImage=`url(${i.src})`,c.src=i.src,c.alt=`${t.name} ${i.label}`,c.classList.add("is-on"),r.classList.remove("is-on"),s.front=s.front==="A"?"B":"A",a("#shotBadge").textContent=i.label,u("#thumbs [data-shot]").forEach(e=>e.classList.toggle("is-on",+e.dataset.shot===s.shot))}function h(){const t=s.product,n=g(t);s.shot>=n.length&&(s.shot=0),q(t),a("#crumbs").innerHTML=`<a href="./">Home</a> / <a href="./#shop">Shop</a> / <span>${t.name} ${t.colorway}</span>`,a("#thumbs").innerHTML=n.map((e,o)=>`
    <button type="button" class="pdp__thumb ${o===s.shot?"is-on":""}" data-shot="${o}" data-src="${e.src}" ${o<4?`style="background-image:url(${e.src})"`:""} aria-label="${e.label}"></button>
  `).join("");const i=new IntersectionObserver(e=>{e.forEach(o=>{const d=o.target;!o.isIntersecting||d.style.backgroundImage||(d.style.backgroundImage=`url(${d.dataset.src})`,i.unobserve(d))})},{rootMargin:"80px"});u("#thumbs [data-src]").forEach(e=>{e.style.backgroundImage||i.observe(e)});const c=n[s.shot];a("#stage").style.backgroundImage=`url(${c.src})`,a("#stageA").src=c.src,a("#stageA").alt=`${t.name} ${c.label}`,a("#stageA").classList.add("is-on"),a("#stageB").classList.remove("is-on"),s.front="A",a("#shotBadge").textContent=c.label,a("#fitNote").textContent=t.fit||"",a("#reviewCount").textContent=`${t.reviews||2} reviews`,a("#info").innerHTML=`
    <div class="pdp__brand">VELOX</div>
    <h1>${t.name} ${t.colorway}</h1>
    <div class="pdp__sub">${t.gender} · ${t.tagline}</div>
    <div class="pdp__stars">★★★★★ <span>${t.rating||5} · ${t.reviews||2} ratings</span></div>
    <div class="pdp__price">${m(t.price)}</div>
    <p class="pdp__blurb">${t.blurb}</p>
    <div class="pdp__label">Colourway</div>
    <div class="pdp__swatches">
      ${p.map(e=>`
        <a class="pdp__swatch ${e.id===t.id?"is-on":""}" href="./buy.html?id=${e.id}" title="${e.name} ${e.colorway}" style="background-image:url(${e.looks?.[0]||e.background})"></a>
      `).join("")}
    </div>
    <div class="pdp__label">Select size</div>
    <div class="pdp__sizes">
      ${["XS","S","M","L","XL"].map(e=>`<button type="button" data-size="${e}" class="${s.size===e?"is-on":""}">${e}</button>`).join("")}
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
  `;const r=p.filter(e=>e.id!==t.id);a("#similar").innerHTML=r.map(e=>`
    <a class="pdp__card" href="./buy.html?id=${e.id}">
      <span class="pdp__card-img" style="background-image:url(${e.looks?.[2]||e.looks?.[0]})"></span>
      <span class="pdp__card-name">${e.name}</span>
      <span class="pdp__card-meta">${e.colorway} · ${m(e.price)}</span>
    </a>
  `).join(""),C(),u("#thumbs [data-shot]").forEach(e=>e.addEventListener("click",()=>l(+e.dataset.shot)))}function l(t){const n=g(s.product);s.shot=(t+n.length)%n.length,z()}function C(){u("[data-size]").forEach(t=>t.addEventListener("click",()=>{s.size=t.dataset.size,h()})),u("[data-q]").forEach(t=>t.addEventListener("click",()=>{s.qty=Math.max(1,s.qty+Number(t.dataset.q)),h()})),a("#addBag")?.addEventListener("click",x)}function x(){const t=s.product,n=s.cart.find(i=>i.id===t.id&&i.size===s.size);n?n.qty+=s.qty:s.cart.push({id:t.id,qty:s.qty,size:s.size}),w(s.cart),y(),b(`${t.name} ${t.colorway} · ${s.size} added`),_()}function y(){const t=s.cart.reduce((e,o)=>e+o.qty,0),n=a("#cartCount");n.textContent=t,n.classList.toggle("is-on",t>0);const i=a("#cartItems"),c=a("#cartEmpty");s.cart.length?(c.classList.add("is-hidden"),i.innerHTML=s.cart.map(e=>{const o=p.find(d=>d.id===e.id);return`<div class="cart__item">
        <span class="cart__item-thumb" style="background-image:url(${o.looks?.[0]||o.background})"></span>
        <div class="cart__item-meta">
          <div class="cart__item-name">${o.name} ${o.colorway}</div>
          <div class="cart__item-gender">Size ${e.size}</div>
        </div>
        <div class="cart__item-price">${m(o.price*e.qty)}</div>
      </div>`}).join("")):(i.innerHTML="",c.classList.remove("is-hidden"));const r=s.cart.reduce((e,o)=>{const d=p.find(k=>k.id===o.id);return e+d.price*o.qty},0);a("#cartTotal").textContent=m(r)}function _(){a("#cart").classList.add("is-open"),a("#scrim").classList.add("is-open")}function v(){a("#cart").classList.remove("is-open"),a("#scrim").classList.remove("is-open")}function b(t){const n=a("#toast");n.textContent=t,n.classList.add("is-on"),clearTimeout(b._t),b._t=setTimeout(()=>n.classList.remove("is-on"),2200)}a("#prevShot").addEventListener("click",()=>l(s.shot-1));a("#nextShot").addEventListener("click",()=>l(s.shot+1));window.addEventListener("keydown",t=>{t.key==="ArrowRight"&&l(s.shot+1),t.key==="ArrowLeft"&&l(s.shot-1),t.key==="Escape"&&v()});let L=0;a("#stage").addEventListener("pointerdown",t=>{L=t.clientX});a("#stage").addEventListener("pointerup",t=>{const n=t.clientX-L;n>40&&l(s.shot-1),n<-40&&l(s.shot+1)});a("#navCart").addEventListener("click",_);a("#cartClose").addEventListener("click",v);a("#scrim").addEventListener("click",v);const $=a("#navBurger"),I=a("#navLinks");$?.addEventListener("click",()=>{const t=I.classList.toggle("is-open");$.setAttribute("aria-expanded",String(t))});const T=g(s.product)[0];a("#stageA").src=T.src;h();y();
