import * as vip from "../modules/m_vip.js";

const vipTemplate = document.createElement('template');
vipTemplate.innerHTML = `
<style>
    #vip_panel {
        background-image: url("assets/VIP_frame.png");
        background-size: contain, cover;
        background-repeat: no-repeat;
        width:100%;
        height:100vh;
        background-color:white;
    }
</style>
<div id="vip_panel">
    
</div>
`;

class Vip extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(vipTemplate.content);

        /** Onclick events to change pages */
        $('body').css('overflow','hidden');
    }
}

customElements.define('vip-component', Vip);