import{S as f,i as a}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="42469793-94d748bc29f10cf193212e81f",m="https://pixabay.com/api/?";function h(o){const t=new URLSearchParams({key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}${t}`).then(n=>{if(!n.ok)throw new Error("Failed to fetch images. Please try again later.");return n.json()})}console.log();const l=document.querySelector(".card-list"),p=document.querySelector(".loader"),g=new f(".card-item a",{captionsData:"alt",captionDelay:250});function y({hits:o}){if(!o.length){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const t=L(o);l.insertAdjacentHTML("beforeend",t),g.refresh()}function L(o){return o.map(({webformatURL:t,largeImageURL:n,tags:i,likes:e,views:r,comments:s,downloads:u})=>`<li class="card-item">
  <a href=${n}
    ><img src=${t} alt="${i}" height="200"/>
    <ul class="card-info">
      <li>
        Likes
        <p>${e}</p>
      </li>
      <li>
        Views
        <p>${r}</p>
      </li>
      <li>
        Comments
        <p>${s}</p>
      </li>
      <li>
        Downloads
        <p>${u}</p>
      </li>
    </ul></a
  >
</li>`).join("")}function c(){p.classList.toggle("is-hidden")}console.log();const S=document.querySelector(".search-form");S.addEventListener("submit",b);function b(o){o.preventDefault();const n=document.querySelector(".search-input").value.trim();if(n==="")return a.error({title:"Error",message:"Please enter a keyword before submitting the form."}),!1;l.innerHTML="",c(),h(n).then(i=>{y(i)}).then(()=>c()).catch(i=>{console.error("Error fetching images:",i),a.error({title:"Error",message:"An unexpected error occurred while fetching images. Please try again."})})}console.log();
//# sourceMappingURL=commonHelpers.js.map
