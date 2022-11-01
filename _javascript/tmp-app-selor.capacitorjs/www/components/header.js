const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<style>

    .header{
        display:flex;
        align-items: center;
        justify-content:center;
        height:85vh;
        width:100vw;
        background:black;
    }

    #logo {
        width:100vw;
        height:100vh;
    }

    h1{
        color: blue;
    }
/*
    #logo {
        color: #e00;
        animation: beat .25s infinite alternate;
        transform-origin: center;
        margin-top:7px;
    }

    @keyframes beat{
        to { transform: scale(0.9); }
    }
*/
</style>

<div>
    <div class="header">
        <video autoplay muted id="logo">
            <source src="assets/vidLogo_temporis.mp4"
                    type="video/mp4">
        </video>
    </div>
</div>
`;

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);

        setTimeout(() => {
            switchToScene("#home");
            prepareLook();
        }, 10000);
    }
}

customElements.define('header-component', Header);