const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}));const t={video:document.getElementById("myVideo"),videoLink:document.querySelector(".video-link"),modal:document.getElementById("videoModal"),closeModal:document.querySelector(".close-modal"),modalVideo:document.querySelector(".modalVideo")};function o(){t.modal.style.display="none",t.modalVideo.pause()}t.modal&&(t.videoLink.addEventListener("click",(()=>{t.modal.style.display="block"})),t.closeModal.addEventListener("click",(()=>{o()})),t.modal.addEventListener("click",(function(e){e.target!==t.modal&&e.target!==t.closeModal||o()})));const l=document.querySelector(".header"),c=document.querySelector(".header__inner");document.addEventListener("scroll",(function(){window.pageYOffset>10?(l.classList.add("header__scrolled"),c.classList.add("header__style")):(l.classList.remove("header__scrolled"),c.classList.remove("header__style"))}));const s=document.getElementsByClassName("thumbnail");new simpleParallax(s,{delay:.6,transition:"cubic-bezier(0,0,0,6)",overflow:!0,scale:1.4});const a=document.querySelectorAll(".answer__item");a.forEach((e=>{const t=e.querySelector(".answer__head"),o=e.querySelector(".answer__body");t.addEventListener("click",(()=>{const t=e.classList.contains("answer__item_active");a.forEach((e=>e.classList.remove("answer__item_active"))),t?(e.classList.remove("answer__item_active"),o.style.maxHeight="0",o.style.opacity=0):(e.classList.add("answer__item_active"),o.style.maxHeight=o.scrollHeight+"px",o.style.opacity=1)}))}));const d=document.querySelector(".modal__menu"),n=document.querySelector(".modal__menu_close");document.querySelector(".header__burger").addEventListener("click",(()=>{d.classList.add("modal__menu_open")})),n.addEventListener("click",(()=>{d.classList.remove("modal__menu_open")}));const r=document.querySelectorAll(".modal__arrow");document.querySelectorAll(".pages__item__list");r.forEach((e=>{e.addEventListener("click",(e=>{console.log(e.target.closest("li")),e.target.closest("li").classList.toggle("pages__item_active")}))}));
//# sourceMappingURL=company.40640340.js.map
