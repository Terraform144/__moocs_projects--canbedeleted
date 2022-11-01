const chartTemplate = document.createElement('template');
chartTemplate.innerHTML = `
<div style="width: 100px;">
    <canvas id="myChart"></canvas>
</div>
`;

class monoChart extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(chartTemplate.content);

        if(!_rPoints && !_rErrors) {
           var _rErrors = 10, _rOmmissions = 20, _rPoints = 70;
        }

        const data = {
            datasets: [{
                data: [_rErrors, _rOmmissions, _rPoints],
                backgroundColor: [
                'rgb(255, 100, 100)',
                'rgb(255, 255, 255)',
                'rgb(30, 136, 229)'
                ],
                hoverOffset: 0
            }]
        };
      
        const config = {
          type: 'doughnut',
          data: data,
          options: {}
        };

        const myChart = new Chart(
            this.shadowRoot.getElementById('myChart'),
            config
        );

    }
}

customElements.define('chart-component', monoChart);