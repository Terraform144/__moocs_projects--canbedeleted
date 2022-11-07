const accountTemplate = document.createElement('template');
accountTemplate.innerHTML = `
<style>
    .panel {
        padding:30px;margin:20px;
        background-color:grey;
        border-radius: 15px;
    }
    a {
        text-decoration:none;
        color:#333;
    }
    #account_panel {
        margin-top:40px; 
    }
    section div p {
        padding-left:25px;
    }
    section div {
        display: flex;
        padding-left:30px;
        height:55px;
        margin: auto;
        font-weight:bold;
        border-bottom:3px solid #ddd;
        justify-content:left;
        align-item:center;
        color:#333;
    }
    .ttl {
        background:#ddd;
        padding-left:15px;
        height:30px;
    }
    .ttlRed {
        background:red;
        text-align:center;
        height:30px;
        color:white;
        font-weight:bold;
    }
    .social_buttons {
        padding-left:80px;
        padding-right:150px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    }
    .social_buttons img {
        width:50px;
    }
</style>
<div id="account_panel">
<div class="ttlRed">Réglages</div>
        <section>
            <div class="ttl">Compte</div>
            <div><svg width="15px" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg> <p id="bDebloquer">Débloquer toute l'appli</p></div>
            <div><svg width="15px" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z"/></svg><p>Coupon</p></div>
        </section>
        <!--section>
            <div class="ttl">Options</div>
            <div><svg width="15px" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg><p>Mode sombre</p></div>
        </section-->
        <section>
            <div class="ttl">Service client</div>
            <div><svg width="15px" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg><p><a href="mailto:tempo@temporis.be">Contactez-nous</a></p></div>
            <div><svg width="15px" viewBox="0 0 576 512"><path d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"/></svg><p>Effacer ma progression</p></div>
        </section>
        <section>
            <div class="ttl">Réseaux sociaux</div>
            <div><svg width="15px" viewBox="0 0 448 512"><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg><p>Partage l'appli<br/></p></div>
            <div class="social_buttons"><a href="https://www.facebook.com/sharer/sharer.php?u=temporis.be" target="_blank"><img src="assets/fb_ico.png"/></a> <a href="http://twitter.com/share?url=https://temporis.be" target="_blank"><img src="assets/tw_ico.png"/></a> <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://temporis.be" target="_blank"><img src="assets/in_ico.png"/></a></div>
            <div><svg width="15px" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg><p><a href="https://www.facebook.com/TEMPORIS.formation.secourisme.incendie.conflits" target="_blank">Rejoignez nous sur Facebook</a></p></div>
        </section>
</div>
`;

class Account extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(accountTemplate.content);

        /** Onclick events to change pages */
        this.shadowRoot.getElementById('bDebloquer').onclick = 
            () => {
                    acheter();
                };

    }
}

customElements.define('account-component', Account);