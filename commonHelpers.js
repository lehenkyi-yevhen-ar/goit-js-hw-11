import{S as d,i as c}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u=document.querySelector("#gallery-container");let f=new d("#gallery-container a",{captionsData:"title",captions:!0,captionDelay:250,overlay:!0,captionPosition:"bottom"});function m(o){if(o.hits.length===0){c.info({title:"No results found",message:"Try a different search term."});return}const n=o.hits.map(t=>`
        <a href="${t.largeImageURL}" data-lightbox="gallery" title="Tags: ${t.tags}">
            <div class="image-wrapper">
                <img src="${t.previewURL}" alt="${t.tags}" title="
                Tags: ${t.tags} 
            ">
            <div class="caption">
                <div class="su-caption">
                Likes ${t.likes} </div>
                <div class="su-caption">
                Views ${t.views} </div>
                <div class="su-caption">
                Comments ${t.comments} </div>
                <div class="su-caption">
                Downloads ${t.downloads} </div>
            </div>
            </div>
        </a>
    `).join("");u.innerHTML=n,f.refresh()}function p(o){const n="https://pixabay.com/api/",t="45189521-352d969f92f63c5bc874c10a6",i=new URLSearchParams({key:t,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${n}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const s=document.querySelector(".search-form"),l=document.querySelector(".loader"),g=document.querySelector("#gallery-container");s.addEventListener("submit",v);function y(){l.classList.remove("hidden")}function h(){l.classList.add("hidden")}function v(o){o.preventDefault(),s&&(g.innerHTML="");const n=o.currentTarget.elements.query.value.trim().toLowerCase();if(n===""){c.info({message:"Type something to find!"});return}y(),p(n).then(m).catch(L).finally(()=>{h(),s&&s.reset()})}function L(o){c.error({title:"Error",message:`An error occured! ${o}`})}
//# sourceMappingURL=commonHelpers.js.map
