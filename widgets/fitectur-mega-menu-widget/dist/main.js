(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();(()=>{const c=document.getElementById("jucux_fitectur_mega_menu_widget_burger_button"),s=document.getElementById("jucux_fitectur_mega_menu_widget_close_button"),n=document.getElementById("jucux_fitectur_mmw_nav_modal");c==null||c.addEventListener("click",l),s==null||s.addEventListener("click",e);function l(){n&&(n.style.display="flex",setTimeout(()=>{n.style.opacity="100%"},1))}function e(){n&&(n.style.opacity="0",setTimeout(()=>{n.style.display="none"},500))}const t=document.getElementById("jucux_fitectur_mmw_main_menu");t==null||t.addEventListener("mouseover",r);function r(u){var i;if(u.target){let o=u.target;if(o.tagName=="A"||o.tagName=="P"){let m=(i=o.parentElement)==null?void 0:i.querySelector(".sub-menu");o.classList.contains("jucux-fitectur-mmw-main-menu-link")&&d(),m&&(m.style.display="flex",setTimeout(()=>{m.style.left="50%",m.style.opacity="100%"},10))}}}function d(){let u=document.querySelectorAll(".jucux-fitectur-mmw-main-menu .sub-menu");for(let i=0;i<u.length;i++){const o=u[i];o.style.left="0%",o.style.opacity="0%",o.style.display="none"}}})();