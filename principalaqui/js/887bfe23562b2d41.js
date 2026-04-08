/*!
* TEMA DESENVOLVIDO POR SABINOVISION LTDA.
* O USO INDEVIDO DO TEMA RESULTARÁ EM DMCA POR DIREITOS DO TEMA
* @license Proprietary
* @preserve
*/import{DialogComponent}from"@theme/dialog";import{CartAddEvent}from"@theme/events";class CartDrawerComponent extends DialogComponent{connectedCallback(){super.connectedCallback(),document.addEventListener(CartAddEvent.eventName,this.#handleCartAdd)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(CartAddEvent.eventName,this.#handleCartAdd)}#handleCartAdd=()=>{this.hasAttribute("auto-open")&&this.showDialog()};open(){this.showDialog(),customElements.whenDefined("shopify-payment-terms").then(()=>{document.querySelector("shopify-payment-terms")?.shadowRoot?.querySelector("#shopify-installments-cta")?.addEventListener("click",this.closeDialog,{once:!0})})}close(){this.closeDialog()}}customElements.get("cart-drawer-component")||customElements.define("cart-drawer-component",CartDrawerComponent);
//# sourceMappingURL=/cdn/shop/t/10/assets/cart-drawer.js.map?v=125480150221095186611769985613
