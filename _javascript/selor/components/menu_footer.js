const menuTemplate = document.createElement('template');
menuTemplate.innerHTML = `
<style>
    .footer_menu {
        width: 100%;
        position: fixed;
        bottom: 0;
        border-top:2px solid #ddd;
        height:50px;
        background-color:#fff;
    }
    .footer_menu ul {
        list-style-type: none;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        margin:10px;padding-left:15px;padding-right:15px;
    }
    .footer_menu li {
        font-size:9px !important;
    }
    #bHome,#bStats {
        width:20%;
    }
    #bCompte {
        width:60%;
        text-align:right;
    }
</style>

<div class="footer_menu">
    <ul>
        <li id="bHome"><svg id="Capa_1" width="20px" height="20px" viewBox="0 0 495.398 495.398" style="enable-background:new 0 0 495.398 495.398;"
        xml:space="preserve">
   <g>
       <g>
           <g>
               <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
                   v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
                   c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
                   c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
               <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
                   c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
                   c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/>
           </g>
       </g>
   </g>
   </svg> <br/><strong>Accueil</strong></li>
<!--li id="bStats"><svg width="20px" height="20px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
<g><path d="M944.1,913.4H55.9c-25.4,0-45.9-20.6-45.9-45.9v-735c0-25.4,20.6-45.9,45.9-45.9c25.4,0,45.9,20.6,45.9,45.9v581.9l0,0v107.2h842.2c25.4,0,45.9,20.6,45.9,45.9C990,892.9,969.4,913.4,944.1,913.4z M836.9,775.6H745c-25.4,0-45.9-20.6-45.9-45.9V408.1c0-25.4,20.6-45.9,45.9-45.9h91.9c25.4,0,45.9,20.6,45.9,45.9v321.6C882.8,755,862.2,775.6,836.9,775.6z M576.6,775.6h-91.9c-25.4,0-45.9-20.6-45.9-45.9V224.4c0-25.4,20.6-45.9,45.9-45.9h91.9c25.4,0,45.9,20.6,45.9,45.9v505.3C622.5,755,601.9,775.6,576.6,775.6z M316.3,775.6h-91.9c-25.4,0-45.9-20.6-45.9-45.9v-91.9c0-25.4,20.6-45.9,45.9-45.9h91.9c25.4,0,45.9,20.6,45.9,45.9v91.9C362.2,755,341.6,775.6,316.3,775.6z"/></g>
</svg> <br/><strong>Statistiques</strong></li-->
        <li id="bCompte"><svg width="20px" height="20px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
        <g><path d="M500.3,990c-93.5,0-187.1,0.1-280.6-0.1c-32.3-0.1-63.4-5.9-91.8-22.2c-42.5-24.3-66.6-61.3-74-109.3c-5.3-34.3-2.5-68.7,0-103c3.5-47.4,11.6-94,26.8-139.1c12.5-36.9,30-71.3,56.4-100.4c32-35.1,72.6-51.8,119.3-56c14.1-1.3,25.6,2.4,37,9.9c20.4,13.4,40.6,27.3,62,39.1c45.5,25.1,94.3,39.8,146.7,39.2c55.9-0.6,107.3-17.4,155-46.2c16-9.7,31.9-19.6,47.1-30.4c14-9.8,28.5-13.1,45.5-11c39.3,4.8,74.6,18.2,103.8,45.4c23.1,21.4,39.2,47.8,52.4,76.2c18,38.5,27.4,79.3,34.3,120.9c7.1,43.3,9.7,87,8.6,130.8c-1,39.3-12.2,75.4-39.4,105c-23.7,25.8-53.2,41.2-87.5,47.3c-13.7,2.4-27.8,3.9-41.8,4C686.9,990.1,593.6,990,500.3,990z"/><path d="M255.3,254.5C252.9,124,364.8,9.9,500.6,10c134.6,0.1,245.8,113.2,245,246.4c-0.7,131.8-110.9,244.1-245.4,244.1C365.3,500.5,252.4,386.9,255.3,254.5z"/></g>
        </svg> <br/><strong>Réglages</strong></li>
    </ul>
</div>
`;

class FooterMenu extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(menuTemplate.content);

        /** Onclick events to change pages */
        try {
            this.shadowRoot.getElementById('bHome').onclick =
                () => {$("#content").html('');$('#main_application').slideDown();switchToScene("#home");};
            /*
            this.shadowRoot.getElementById('bStats').onclick =
                () => {$("#content").html('');$('#main_application').slideDown();switchToScene("#stats");};
            */
            this.shadowRoot.getElementById('bCompte').onclick =
                () => {$("#content").html('');$('#main_application').slideDown();switchToScene("#compte");};
        }catch(ex) {
            console.log(ex);
        }
       
    }
}

customElements.define('menu-component', FooterMenu);