(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const s=document.getElementById("imggOne"),d=document.getElementById("srcbox"),l=document.getElementById("btn"),u=document.getElementById("errorOutput");function a(){window.innerWidth<=600?s.src="media/mobile-bg.mp4":s.src="media/pc-bg.mp4"}a();window.addEventListener("resize",a);function f(){let n=d.value;n===""?alert("Searchbox can not be empty"):isNaN(n)?m(n):alert("Please type city name with alphabetic letters")}const p="4bf7034f65250d979e8e842ed16200fe";function m(n){let o=`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=${p}`;fetch(o).then(r=>r.json()).then(r=>{r.cod==="404"&&(u.innerHTML=`<h2>${r.message}</h2>`)}).catch(r=>console.error("Network Error:",r.message))}l.addEventListener("click",f);
