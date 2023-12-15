import{i as h,S as P,u as b,a as y,A as M}from"./assets/footer-ced27dc0.js";import"./assets/vendor-6a322d96.js";const A="/js_94_Volodymyr123rusofob/assets/empty-cart-desktop-1x-1da79769.png",D="/js_94_Volodymyr123rusofob/assets/empty-cart-desktop-2x-490faf55.png",E="/js_94_Volodymyr123rusofob/assets/empty-cart-desktop-1x-1da79769.png",T="/js_94_Volodymyr123rusofob/assets/empty-cart-desktop-2x-490faf55.png",j="/js_94_Volodymyr123rusofob/assets/empty-cart-mob-1x-971d1e28.png",L="/js_94_Volodymyr123rusofob/assets/empty-cart-mob-2x-7db9012b.png",g=()=>`<div class="empty-cart">
      <div class="empty-picture">
      <picture>
          <source
            srcset="
              ${A} 1x,
              ${D} 2x
            "
            media="
            (min-width: 1440px)"
          />
          <source
            srcset="
              ${E} 1x,
              ${T} 2x
            "
            media="
            (min-width: 768px)"
          />
          <source
            srcset="
             ${j} 1x,
              ${L} 2x
            "
            media="
            (min-width: 375px)"
          />
          <img
            src="/img/empty_cart/empty-cart-mob-1x.png"
            alt="Empty Cart Image"
            class="empty-cart-image"
            loading="lazy"
            width="132"
            height="114";
          />
        </picture>
        </div>
        <div class="empty-text">
        <h2 class="empty-cart-title">
          Your basket is <span class="empty-cart-title-span">empty...</span>
        </h2>
        <p class="empty-cart-text">
          Go to the main page to select your favorite products and add them to
          the cart.
        </p></div></div>
    `,S=e=>`
  
     <div class="delete-all">
    <button type="button" class="btn-delete-all" aria-label="Delete All"> Delete All 
      <span class="icon-close">
        <svg class="btn-x" width="24" height="24">
          <use href="${h}#icon-ion_close-sharp"></use>
        </svg>
      </span>
    </button>
  </div>
  <ul class="cart-products-list">
    ${e.map(({_id:s,name:c,img:n,category:o,size:p,price:l})=>`
      <li class="cart-product-item" data-product-id="${s}">
        <div class="cart-product-container">
          <div class="cart-product-img-container">
            <img src="${n}" alt="${c}" width="64" height="64" class="cart-product-img" loading="lazy">
          </div>
          <div class="cart-product-parameter-container">
            <h2 class="cart-product-title">${c}</h2>
            <div class="cart-product-parameter-text">
            <p class="cart-product-parameter">Category: <span class="cart-span-parameter-value">${o?o.replace(/_/g," "):""}</span></p>
            <p class="cart-product-parameter">Size: <span class="cart-span-parameter-value">${p}</span></p>
            </div>
            <p class="price">$${l}</p>
          </div>
          <div class="cart-delete">
            <button type="button" class="cart-btn-delete" aria-label="Delete">
              <span class="cart-icon-close">
                <svg class="icon-close" width="18" height="18">
                  <use href="${h}#icon-ion_close-sharp"></use>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </li>`).join("")}
  </ul>
  
`,q=e=>`
    
      <h2 class="checkout-title">Your order</h2>
      <div class="checkout-total-wrap">
        <p class="checkout-text">Total</p>
        <p class="checkout-total">$${e.toFixed(2)}</p>
      </div>
      <div class="checkout-input-wrap">
        <label class="checkout-input-label" for="checkoutEmail"></label>
        <input
          class="checkout-input-email"
          type="email"
          id="checkoutEmail"
          name="email"
          placeholder="example@mail.com"
          required
        />
        <button class="checkout-button" type="submit" aria-label="Proceed to Checkout">Checkout</button>
        </div>
        
        `,i=document.querySelector(".container-div-cart-js-one"),m=document.querySelector(".container-div-cart-js-two"),H=document.getElementById("cart-counter-page"),u=new P("productsBasket"),V=new M;async function d(){const e=u.getAllProducts();if(e.length===0)i.innerHTML="",m.innerHTML="",i.insertAdjacentHTML("beforeend",g());else{let _=function(t){t.preventDefault(),C()},C=function(){const t=k.value;if(!t||!w(t)){y("Please enter a valid email address.","error");return}function a(){const r=g();$.innerHTML=r}e.length>0&&a(),y(`Checkout completed! Total Price: $${l.toFixed(2)}.`,"success"),f.textContent="0.00",u.removeAllProducts(),b(),d()},w=function(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)};const c=e.map(async({_id:t,quantity:a})=>{try{return t?{...await V.getProductById(t),quantity:a}:(console.error("_id is undefined or empty for a product in the cart"),null)}catch(r){return console.error(`Error fetching product details for _id: ${t}`,r),null}}),o=(await Promise.all(c)).filter(t=>t!==null);i.innerHTML="",i.insertAdjacentHTML("beforeend",S(o));async function p(t){let a=0;return t.forEach(({price:r})=>a+=r),a}const l=await p(o);m.innerHTML="",m.insertAdjacentHTML("beforeend",q(l));async function v(){return{totalPriceElement:document.querySelector(".checkout-total"),emailInput:document.querySelector(".checkout-input-email"),checkoutButton:document.querySelector(".checkout-button"),cartContainer:document.querySelector(".cart-products-list"),price:document.querySelector(".price")}}const{totalPriceElement:f,emailInput:k,checkoutButton:x,cartContainer:$,price:I}=await v();x.addEventListener("click",_)}const s=e.length;H.textContent=`CART (${s})`}d();document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",async e=>{const s=e.target.closest(".btn-delete-all"),c=e.target.closest(".cart-btn-delete");if(s)u.removeAllProducts(),d();else if(c){const n=c.closest(".cart-product-item").dataset.productId;u.removeProduct(n),d()}b()})});
//# sourceMappingURL=commonHelpers.js.map