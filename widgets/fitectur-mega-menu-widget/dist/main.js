(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{var y;const m=document.getElementById("jucux_fitectur_mega_menu_widget_burger_button"),n=document.getElementById("jucux_fitectur_mega_menu_widget_close_button"),s=document.getElementById("jucux_fitectur_mmw_nav_modal");m==null||m.addEventListener("click",d),n==null||n.addEventListener("click",e);function d(){s&&(s.style.display="flex",setTimeout(()=>{s.style.opacity="100%"},1))}function e(){s&&(s.style.opacity="0",setTimeout(()=>{s.style.display="none"},500))}const t=document.getElementById("jucux_fitectur_mmw_main_menu");t==null||t.addEventListener("mouseover",l);function l(r){var u,o,c;if(r.target){let a=r.target;if(a.tagName=="A"||a.tagName=="P"){let i=(u=a.parentElement)==null?void 0:u.querySelector(".sub-menu");(c=(o=a.parentElement)==null?void 0:o.parentElement)!=null&&c.classList.contains("sub-menu")||p(i),i&&(i.style.display="flex",setTimeout(()=>{i.style.left="50%",i.style.opacity="100%"},50))}}}function p(r){let u=document.querySelectorAll(".jucux-fitectur-mmw-main-menu .sub-menu");for(let o=0;o<u.length;o++){const c=u[o];r!=c&&(c.style.left="0%",c.style.opacity="0%",c.style.display="none")}}const f=document.querySelectorAll(".jucux-fitectur-mmw-activities-menu-wrapper");for(let r=0;r<f.length;r++){const c=f[r].children[0].children;for(let a=0;a<c.length;a++){const i=c[a].children[0];switch((y=i.textContent)==null?void 0:y.toLowerCase()){case"networking":i.classList.add("jucux-fitectur-mmw-comercial-area-activity");break;case"workshop":i.classList.add("jucux-fitectur-mmw-comercial-area-activity");break;case"outlet turístico":i.classList.add("jucux-fitectur-mmw-comercial-area-activity");break;case"construyendo iniciativas":i.classList.add("jucux-fitectur-mmw-academic-area-activity");break;case"movimiento naranja":i.classList.add("jucux-fitectur-mmw-cultural-area-activity");break;case"festival gastronómico":i.classList.add("jucux-fitectur-mmw-cultural-area-activity");break;default:i.classList.add("jucux-fitectur-mmw-cultural-area-activity");break}}}})();
