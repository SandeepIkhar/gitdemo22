import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class AccountList extends LightningElement {
    accounts;
    error;
    connectedCallback() {
        getAccountList()
            .then((result) => {
                this.accounts = result;
            })
            .catch((error) => {
                this.error = error;
            })
    }

}