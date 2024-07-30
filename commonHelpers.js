import{S as u,i as c}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d=document.querySelector("#gallery-container");let f=new u("#gallery-container a",{captionsData:"title",captions:!0,captionDelay:250,overlay:!0,captionPosition:"bottom"});function m(o){if(o.hits.length===0){c.info({title:"No results found",message:"Try a different search term."});return}const n=o.hits.map(t=>`
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
    `).join("");d.innerHTML=n,f.refresh()}function p(o){const n="https://pixabay.com/api/",t="45189521-352d969f92f63c5bc874c10a6",s=new URLSearchParams({key:t,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${n}?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}document.querySelector(".search-input");document.querySelector(".search-btn");const a=document.querySelector(".search-form"),l=document.querySelector(".loader");a.addEventListener("submit",h);function g(){l.classList.remove("hidden")}function y(){l.classList.add("hidden")}function h(o){o.preventDefault();const n=o.currentTarget.elements.query.value.trim().toLowerCase();if(n===""){c.info({message:"Type something to find!"});return}g(),p(n).then(m).catch(v).finally(()=>{y(),a&&a.reset()})}function v(o){c.error({title:"Error",message:`An error occured! ${o}`})}
//# sourceMappingURL=commonHelpers.js.map
