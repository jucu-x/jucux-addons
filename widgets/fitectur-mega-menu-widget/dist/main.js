(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function m(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(t){if(t.ep)return;t.ep=!0;const c=m(t);fetch(t.href,c)}})();(()=>{var y;const d=document.querySelectorAll(".jucux-fitectur-mega-menu-widget-burger-button"),o=document.querySelectorAll(".jucux-fitectur-mega-menu-widget-close-button");d.forEach(e=>{e.addEventListener("click",m)}),o.forEach(e=>{e.addEventListener("click",l)});function m(){var s;let e=(s=this.parentElement)==null?void 0:s.querySelector(".jucux-fitectur-mmw-nav-modal");e&&(e.style.display="flex",setTimeout(()=>{e.style.opacity="100%"},1)),document.body.style.overflow="hidden"}function l(){let e=this.parentElement;e&&(e.style.opacity="0",setTimeout(()=>{e.style.display="none"},500)),document.body.style.overflow="auto"}document.querySelectorAll(".jucux-fitectur-mmw-main-menu").forEach(e=>{e.addEventListener("mouseover",c)});function c(e){var s,n,r;if(e.target){let a=e.target;if(a.tagName=="A"||a.tagName=="P"){let i=(s=a.parentElement)==null?void 0:s.querySelector(".sub-menu");(r=(n=a.parentElement)==null?void 0:n.parentElement)!=null&&r.classList.contains("sub-menu")||u(i),i&&(i.style.display="flex",setTimeout(()=>{i.style.left="50%",i.style.opacity="100%"},50))}}}function u(e){let s=document.querySelectorAll(".jucux-fitectur-mmw-main-menu .sub-menu");for(let n=0;n<s.length;n++){const r=s[n];e!=r&&(r.style.left="0%",r.style.opacity="0%",r.style.display="none")}}const f=document.querySelectorAll(".jucux-fitectur-mmw-activities-menu-wrapper");for(let e=0;e<f.length;e++){const r=f[e].children[0].children;for(let a=0;a<r.length;a++){const i=r[a].children[0];switch((y=i.textContent)==null?void 0:y.toLowerCase()){case"networking":i.classList.add("jucux-fitectur-mmw-comercial-area-activity");break;case"workshop":i.classList.add("jucux-fitectur-mmw-comercial-area-activity");break;case"outlet turístico":i.classList.add("jucux-fitectur-mmw-comercial-area-activity");break;case"construyendo iniciativas":i.classList.add("jucux-fitectur-mmw-academic-area-activity");break;case"movimiento naranja":i.classList.add("jucux-fitectur-mmw-cultural-area-activity");break;case"festival gastronómico":i.classList.add("jucux-fitectur-mmw-cultural-area-activity");break;default:i.classList.add("jucux-fitectur-mmw-cultural-area-activity");break}}}})();
