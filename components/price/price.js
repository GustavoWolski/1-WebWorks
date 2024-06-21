
document.addEventListener('DOMContentLoaded', function() {
    const serviceType = document.getElementById('serviceType');
    const numPages = document.getElementById('numPages');

    serviceType.addEventListener('change', function() {
        if (serviceType.value === 'ecommerce') {
            numPages.disabled = true;
            numPages.value = '';
        } else {
            numPages.disabled = false;
        }
    });

    document.getElementById('priceCalculatorForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceTypeValue = serviceType.value;
        const numPagesValue = parseInt(numPages.value) || 0;

        const additionalItems = {
            paymentIntegration: document.getElementById('paymentIntegration').checked,
            animations: document.getElementById('animations').checked,
            transitions: document.getElementById('transitions').checked,
            emailBox: document.getElementById('emailBox').checked,
            domainRegistration: document.getElementById('domainRegistration').checked,
            messageSending: document.getElementById('messageSending').checked,
            toolbox: document.getElementById('toolbox').checked,
        };

        let total = 0;

        switch (serviceTypeValue) {
            case 'website_pessoal':
                total += 500;
                break;
            case 'website_empresarial':
                total += 1000;
                break;
            case 'portfolio':
                total += 700;
                break;
            case 'blog':
                total += 600;
                break;
            case 'dashboard':
                total += 1200;
                break;
            case 'ecommerce':
                total += 1500;
                break;
        }

        if (serviceTypeValue !== 'ecommerce') {
            total += numPagesValue * 100;
        }

        if (additionalItems.paymentIntegration) total += 200;
        if (additionalItems.animations) total += 150;
        if (additionalItems.transitions) total += 100;
        if (additionalItems.emailBox) total += 100;
        if (additionalItems.domainRegistration) total += 50;
        if (additionalItems.messageSending) total += 100;
        if (additionalItems.toolbox) total += 100;

        document.getElementById('result').innerHTML = `<h3>Total: R$ ${total.toFixed(2)}</h3>`;

        let suggestions = '';

        if (total < 1000) {
            suggestions = '<p>Pacote Básico: Desconto de 5%</p>';
        } else if (total >= 1000 && total < 5000) {
            suggestions = '<p>Pacote Intermediário: Desconto de 10%</p>';
        } else if (total >= 5000) {
            suggestions = '<p>Pacote Premium: Desconto de 15% e Frete Grátis</p>';
        }

        document.getElementById('suggestions').innerHTML = `<h4>Sugestões de Pacotes:</h4>${suggestions}`;
    });
});