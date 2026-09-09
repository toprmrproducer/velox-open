import{P as p,_ as I}from"./products-C40Esl2F.js";const a=(t,n=document)=>n.querySelector(t),m=(t,n=document)=>[...n.querySelectorAll(t)],g=t=>"$"+Number(t).toLocaleString("en-US"),_="velox-bag",S=()=>{try{return JSON.parse(localStorage.getItem(_)||"[]")}catch{return[]}},C=t=>{try{localStorage.setItem(_,JSON.stringify(t))}catch{}},q=new URLSearchParams(location.search),z=q.get("id")||"lime",e={product:p.find(t=>t.id===z)||p[0],shot:0,size:"M",qty:1,cart:S(),front:"A"};function h(t){const n=[{type:"3d",label:"360°",src:t.looks?.[0]}],i=(t.looks||[]).map((r,s)=>({type:"photo",src:r,label:"Look 0"+(s+1)})),d=(t.details||[]).map((r,s)=>({type:"photo",src:r,label:"Detail 0"+(s+1)}));return[...n,...i,...d]}let u=null;async function T(){if(u)return u;const{JacketInspect:t}=await I(async()=>{const{JacketInspect:n}=await import("./scene3d-ComsFr7d.js");return{JacketInspect:n}},[],import.meta.url);return u=new t(a("#inspect3d"),e.product),u}function x(t){const n=document.documentElement.style;n.setProperty("--accent",t.accent),n.setProperty("--accent-soft",t.accentSoft),n.setProperty("--glow",t.glow),document.documentElement.dataset.theme=t.id,document.title=`VELOX — ${t.name} ${t.colorway}`}function f(){const t=e.product,n=h(t);e.shot>=n.length&&(e.shot=0);const i=n[e.shot],d=a("#stage");if(m("#thumbs [data-shot]").forEach(o=>o.classList.toggle("is-on",+o.dataset.shot===e.shot)),i.type==="3d"){d.classList.add("is-3d"),d.style.backgroundImage="none",a("#shotBadge").textContent="3D INSPECT",T().then(o=>{o.setRunning(!0),o._resize()});return}d.classList.remove("is-3d"),u&&u.setRunning(!1);const r=e.front==="A"?a("#stageB"):a("#stageA"),s=e.front==="A"?a("#stageA"):a("#stageB");d.style.backgroundImage=`url(${i.src})`,r.src=i.src,r.alt=`${t.name} ${i.label}`,r.classList.add("is-on"),s.classList.remove("is-on"),e.front=e.front==="A"?"B":"A",a("#shotBadge").textContent=i.label}function b(){const t=e.product,n=h(t);e.shot>=n.length&&(e.shot=0),x(t),a("#crumbs").innerHTML=`<a href="./">Home</a> / <a href="./#shop">Shop</a> / <span>${t.name} ${t.colorway}</span>`,a("#thumbs").innerHTML=n.map((s,o)=>`
    <button type="button" class="pdp__thumb ${o===e.shot?"is-on":""} ${s.type==="3d"?"is-3d":""}" data-shot="${o}" data-src="${s.src||""}" ${s.type!=="3d"&&o<5?`style="background-image:url(${s.src})"`:""} aria-label="${s.label}">${s.type==="3d"?"360°":""}</button>
  `).join("");const i=new IntersectionObserver(s=>{s.forEach(o=>{const c=o.target;!o.isIntersecting||c.style.backgroundImage||c.classList.contains("is-3d")||(c.style.backgroundImage=`url(${c.dataset.src})`,i.unobserve(c))})},{rootMargin:"80px"});m("#thumbs [data-src]").forEach(s=>{!s.style.backgroundImage&&!s.classList.contains("is-3d")&&i.observe(s)}),a("#fitNote").textContent=t.fit||"",a("#reviewCount").textContent=`${t.reviews||2} reviews`,a("#info").innerHTML=`
    <img class="pdp__sticker" src="${t.mark}" alt="${t.name} ${t.colorway}" />
    <div class="pdp__stickers">
      ${p.map(s=>`
        <a class="pdp__sticker-mini ${s.id===t.id?"is-on":""}" href="./buy.html?id=${s.id}" title="${s.name} ${s.colorway}">
          <img src="${s.mark}" alt="${s.name} ${s.colorway}" />
        </a>
      `).join("")}
    </div>
    <div class="pdp__brand">VELOX</div>
    <h1>${t.name} ${t.colorway}</h1>
    <div class="pdp__sub">${t.gender} · ${t.tagline}</div>
    <div class="pdp__stars">★★★★★ <span>${t.rating||5} · ${t.reviews||2} ratings</span></div>
    <div class="pdp__price">${g(t.price)}</div>
    <p class="pdp__blurb">${t.blurb}</p>
    <div class="pdp__label">Colourway</div>
    <div class="pdp__swatches">
      ${p.map(s=>`
        <a class="pdp__swatch ${s.id===t.id?"is-on":""}" href="./buy.html?id=${s.id}" title="${s.name} ${s.colorway}" style="background-image:url(${s.looks?.[0]||s.background})"></a>
      `).join("")}
    </div>
    <div class="pdp__label">Select size</div>
    <div class="pdp__sizes">
      ${["XS","S","M","L","XL"].map(s=>`<button type="button" data-size="${s}" class="${e.size===s?"is-on":""}">${s}</button>`).join("")}
    </div>
    <div class="pdp__qty">
      <button type="button" data-q="-1">−</button>
      <span>${e.qty}</span>
      <button type="button" data-q="1">+</button>
    </div>
    <button class="btn btn--solid btn--block pdp__bag" id="addBag">ADD TO BAG · ${e.size}</button>
    <button type="button" class="btn btn--pill btn--block" id="inspectBtn">3D INSPECT</button>
    <div class="pdp__specs">
      <div><b>Fabric</b><span>${t.fabric}</span></div>
      <div><b>Length</b><span>${t.length}</span></div>
      <div><b>Fit</b><span>${t.fit}</span></div>
    </div>
  `;const d=p.filter(s=>s.id!==t.id);a("#similar").innerHTML=d.map(s=>`
    <a class="pdp__card" href="./buy.html?id=${s.id}">
      <span class="pdp__card-img" data-src="${s.looks?.[2]||s.looks?.[0]}"></span>
      <span class="pdp__card-name">${s.name}</span>
      <span class="pdp__card-meta">${s.colorway} · ${g(s.price)}</span>
    </a>
  `).join("");const r=new IntersectionObserver(s=>{s.forEach(o=>{const c=o.target;!o.isIntersecting||c.style.backgroundImage||(c.style.backgroundImage=`url(${c.dataset.src})`,r.unobserve(c))})},{rootMargin:"120px"});m("#similar [data-src]").forEach(s=>r.observe(s)),A(),m("#thumbs [data-shot]").forEach(s=>s.addEventListener("click",()=>l(+s.dataset.shot))),f()}function l(t){const n=h(e.product);e.shot=(t+n.length)%n.length,f()}function A(){m("[data-size]").forEach(t=>t.addEventListener("click",()=>{e.size=t.dataset.size,b()})),m("[data-q]").forEach(t=>t.addEventListener("click",()=>{e.qty=Math.max(1,e.qty+Number(t.dataset.q)),b()})),a("#addBag")?.addEventListener("click",B),a("#inspectBtn")?.addEventListener("click",()=>l(0))}function B(){const t=e.product,n=e.cart.find(i=>i.id===t.id&&i.size===e.size);n?n.qty+=e.qty:e.cart.push({id:t.id,qty:e.qty,size:e.size}),C(e.cart),L(),v(`${t.name} ${t.colorway} · ${e.size} added`),k()}function L(){const t=e.cart.reduce((s,o)=>s+o.qty,0),n=a("#cartCount");n.textContent=t,n.classList.toggle("is-on",t>0);const i=a("#cartItems"),d=a("#cartEmpty");e.cart.length?(d.classList.add("is-hidden"),i.innerHTML=e.cart.map(s=>{const o=p.find(c=>c.id===s.id);return`<div class="cart__item">
        <span class="cart__item-thumb" style="background-image:url(${o.looks?.[0]||o.background})"></span>
        <div class="cart__item-meta">
          <div class="cart__item-name">${o.name} ${o.colorway}</div>
          <div class="cart__item-gender">Size ${s.size}</div>
        </div>
        <div class="cart__item-price">${g(o.price*s.qty)}</div>
      </div>`}).join("")):(i.innerHTML="",d.classList.remove("is-hidden"));const r=e.cart.reduce((s,o)=>{const c=p.find(w=>w.id===o.id);return s+c.price*o.qty},0);a("#cartTotal").textContent=g(r)}function k(){a("#cart").classList.add("is-open"),a("#scrim").classList.add("is-open")}function $(){a("#cart").classList.remove("is-open"),a("#scrim").classList.remove("is-open")}function v(t){const n=a("#toast");n.textContent=t,n.classList.add("is-on"),clearTimeout(v._t),v._t=setTimeout(()=>n.classList.remove("is-on"),2200)}a("#prevShot").addEventListener("click",()=>l(e.shot-1));a("#nextShot").addEventListener("click",()=>l(e.shot+1));window.addEventListener("keydown",t=>{t.key==="ArrowRight"&&l(e.shot+1),t.key==="ArrowLeft"&&l(e.shot-1),t.key==="Escape"&&$()});let E=0;a("#stage").addEventListener("pointerdown",t=>{E=t.clientX});a("#stage").addEventListener("pointerup",t=>{if(h(e.product)[e.shot]?.type==="3d")return;const i=t.clientX-E;i>40&&l(e.shot-1),i<-40&&l(e.shot+1)});a("#navCart").addEventListener("click",k);a("#cartClose").addEventListener("click",$);a("#scrim").addEventListener("click",$);const y=a("#navBurger"),M=a("#navLinks");y?.addEventListener("click",()=>{const t=M.classList.toggle("is-open");y.setAttribute("aria-expanded",String(t))});b();L();
