import { LightningElement, wire, api, track } from 'lwc';
import { subscribe, publish, MessageContext } from "lightning/messageService";
import CLOUDHAK_CHANNEL from "@salesforce/messageChannel/CloudHAK__c";
import sandy from "@salesforce/messageChannel/sandy__c";
import createAccount from '@salesforce/apex/CreateAccountAndContact.createAccount';
import createContact from '@salesforce/apex/CreateAccountAndContact.createContact';
export default class SendData extends LightningElement {

    @api firstName;
    @api lastName;

    @wire(MessageContext)
    messageContext;

    @track accountName = '';
    @track contactName = '';
    @track accountList = [];
    @track contactList = [];
    @api childAccounts = [];
    @api childContacts = [];

    handleAccountNameChange(event) {
        this.accountName = event.target.value;
    }

    handleContactNameChange(event) {
        this.contactName = event.target.value;
    }

    async createAccountAndContact() {
            if (this.accountName && this.contactName) {
                const newAccount = await createAccount({ accountName: this.accountName });
                const newContact = await createContact({ contactName: this.contactName, accountId: newAccount.Id });

                this.accountList.push(newAccount);
                this.contactList.push(newContact);


            }
            const messaage = {
                firstName: this.accountName,
                lastName: this.contactName
            };
            publish(this.messageContext, CLOUDHAK_CHANNEL, messaage);

        }
        /******************************** */
    @track receivedData = [];
    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.handleSubscribe();
    }

    handleSubscribe() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.messageContext, sandy, (message) => {
            this.handleMessage(message);

            this.showToast('Success', 'Data Transfer Successfully', 'success', 'dismissable');
        });
    }

    showToast(title, message, variant, mode) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: mode
        });
        this.dispatchEvent(evt);
    }

    handleMessage(message) {
        if (message) {
            this.receivedData.push({ key: Date.now(), value: message.firstName, value1: message.lastName });

        }
    }
}