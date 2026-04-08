/*!
* TEMA DESENVOLVIDO POR SABINOVISION LTDA.
* O USO INDEVIDO DO TEMA RESULTARÁ EM DMCA POR DIREITOS DO TEMA
* @license Proprietary
* @preserve
*/(function(){document.addEventListener("click",function(event){const detailsToClose=[...document.querySelectorAll("details[data-auto-close-details][open]")].filter(element=>{const closingOn=window.innerWidth<750?"mobile":"desktop";return element.getAttribute("data-auto-close-details")?.includes(closingOn)&&!(event.target instanceof Node&&element.contains(event.target))});for(const detailsElement of detailsToClose)detailsElement.removeAttribute("open")})})();
//# sourceMappingURL=/cdn/shop/t/10/assets/auto-close-details.js.map?v=87326319531301826621769985613
