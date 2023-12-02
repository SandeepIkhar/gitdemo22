import { LightningElement, api } from 'lwc';
import sendTemplateMessage from '@salesforce/apex/whatsappController.sendTemplateMessage';
export default class WhatsappIntegration extends LightningElement {
    @api recordId;
    onSendMessageTemplate() {
        sendTemplateMessage({ contactId: this.recordId })
            .then(result => {
                window.alert("message sent successfully");
            })
            .catch(error => {
                window.alert("message failed");
            })
    }
}