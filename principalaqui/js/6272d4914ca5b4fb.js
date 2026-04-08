/*!
* TEMA DESENVOLVIDO POR SABINOVISION LTDA.
* O USO INDEVIDO DO TEMA RESULTARÁ EM DMCA POR DIREITOS DO TEMA
* @license Proprietary
* @preserve
*/class AccountLoginActions extends HTMLElement{shopLoginButton=null;connectedCallback(){this.shopLoginButton=this.querySelector("shop-login-button"),this.shopLoginButton&&(this.shopLoginButton.setAttribute("full-width","true"),this.shopLoginButton.setAttribute("persist-after-sign-in","true"),this.shopLoginButton.setAttribute("analytics-context","loginWithShopSelfServe"),this.shopLoginButton.setAttribute("flow-version","account-actions-popover"),this.shopLoginButton.setAttribute("return-uri",window.location.href),this.shopLoginButton.addEventListener("completed",()=>{window.location.reload()}))}}customElements.get("account-login-actions")||customElements.define("account-login-actions",AccountLoginActions);
//# sourceMappingURL=/cdn/shop/t/10/assets/account-login-actions.js.map?v=21177737915191390601769985613
