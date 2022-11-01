import * as qcm from "../modules/qcm.js";

const homeTemplate = document.createElement('template');
homeTemplate.innerHTML = `
<style>
    .panel {
        padding:15px;margin:20px;
        border-radius: 5px;
        background:#fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
        height:70px;
        border:1px solid #888;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .panel div{
        font-size:18px;
        color:red;
        font-weight:bold;
    }
    .panel span{
        font-size:14px;
        color:grey;
        font-weight:normal;
    }
    #home_panel {
        margin-top:100px; 
    }
</style>
<div id="home_panel">
    <div class="panel" id="pSelor">
        <div style="width:260px;text-align:left;">Entraînement examen Selor<br/><span>QCM de mise en situations ...</span></div>
        <div style="width:50px;">
            <svg width="40px" viewBox="0 0 576 512"><path d="M184.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM256 96c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zM192 416c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zM80 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"/></svg>
        </div>
    </div>
    <div class="panel" id="pCatalogue">
        <div style="width:260px;text-align:left;">Catalogue des formations<br/><span>Eventail des formations proposées ...</span></div>
        <div style="width:50px;">
            <svg width="40px" viewBox="0 0 512 512"><path d="M352 96c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM240 248V512l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32H62.3c63.6 0 125.6 19.6 177.7 56zm32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32V427c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"/></svg>
        </div>
    </div>
</div>
`;

class Home extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        this.homePage=`<div class="panel" id="pSelor">Entraînement examen Selor</div>
        <div class="panel" id="pCatalogue">Catalogue des formations</div>`;
    }

    // app methods;
    cours() {
console.log("cours");

        //
        $("#main_application").slideUp();
        $('#content').html("cours");
    }
    testMe() {
console.log("testMe");
        
        this.writeSecretFile();
        this.readSecretFile();
    }
    
    /**
     * qcm relate to the selor exams and their pages
     */
    qcm() {
console.log(qcm);

        // look and feel - bCommencer
        prepareLook();
        qcm.prepareQCMIntroText();qcm.startButton();

        // start qcm <-- event on bCommencer click

        $('#main_application').slideUp();

    }

    formations() {
console.log("formations");

        //
        //$('#main_application').slideUp();
        //$('#content').html("formations");
        location.href = "https://temporis.be";

    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(homeTemplate.content);

        /** Onclick events to change pages */
        this.shadowRoot.getElementById('pSelor').onclick =
            () => {this.qcm();};
        this.shadowRoot.getElementById('pCatalogue').onclick =
            () => {this.formations();};
    }
}

customElements.define('home-component', Home);