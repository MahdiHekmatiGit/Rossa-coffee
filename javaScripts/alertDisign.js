class AlertDisingned {
    alertElement = null;
    #body = null;

    /**
     * body elemetn node
     * @param {Element} document_body 
     */
    constructor(document_body) {
        this.#body = document_body;
    }

    /**
         * alert text massage
         * @param {string} alert_text 
         */
    showAlert(alert_text) {
        this.alertElement = document.createElement('div');
        this.alertElement.style.width = '100vw';
        this.alertElement.style.height = '100vh';
        this.alertElement.style.backgroundColor = 'rgba(0,0,0,.2)';
        this.alertElement.style.backdropFilter = 'blur(10px)';
        this.alertElement.style.opacity = '0';
        this.alertElement.style.position = 'fixed';
        this.alertElement.style.top = '0';
        this.alertElement.style.left = '0';
        this.alertElement.style.transition = '.3s ease 0s';
        this.alertElement.style.display = 'flex';
        this.alertElement.style.justifyContent = 'center';
        this.alertElement.style.alignItems = 'center';
        this.alertElement.style.zIndex = '5000000000';
        this.alertElement.className = "alertElement00"


        const alertElementC = document.createElement('div');
        alertElementC.style.height = '120px';
        alertElementC.style.width = '360px';
        alertElementC.style.display = 'flex';
        alertElementC.style.flexDirection = 'column';
        alertElementC.style.backgroundColor = '#222';
        alertElementC.style.border = '1px solid tan';
        alertElementC.style.borderRadius = '1rem';
        alertElementC.style.padding = '1rem';
        alertElementC.style.color = 'tan';
        alertElementC.style.justifyContent = 'space-between';
        alertElementC.style.fontWeight = 'bold';

        const alertMassageElement = document.createElement('p');
        alertMassageElement.textContent = alert_text;

        const alertButtonElement = document.createElement('button');
        alertButtonElement.textContent = "OK";
        alertButtonElement.style.alignSelf = 'flex-end'
        alertButtonElement.style.border = '1px solid tan'
        alertButtonElement.style.backgroundColor = 'transparent'
        alertButtonElement.style.padding = '.1rem 2rem'
        alertButtonElement.style.color = 'tan'
        alertButtonElement.style.borderRadius = '1rem'
        alertButtonElement.style.cursor = 'pointer'
        alertButtonElement.onclick = this.hideAlert;


        alertElementC.appendChild(alertMassageElement);
        alertElementC.appendChild(alertButtonElement);
        this.alertElement.appendChild(alertElementC);

        this.#body.appendChild(this.alertElement);
        setTimeout(() => {
            this.alertElement.style.opacity = '1';
        }, 10);
    }


    hideAlert() {
        document.querySelector('.alertElement00').style.opacity = '0'
        setTimeout(() => {
            document.body.removeChild(document.querySelector('.alertElement00'));
        }, 500);
    }
}