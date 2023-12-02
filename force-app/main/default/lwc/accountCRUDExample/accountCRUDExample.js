import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import createAccount from '@salesforce/apex/AccountController.createAccount';
import deleteAccount from '@salesforce/apex/AccountController.deleteAccount';

const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Phone', fieldName: 'Phone' },
    { type: 'action', typeAttributes: { rowActions: [{ label: 'Delete', name: 'delete' }] } }
];

export default class AccountCRUDExample extends LightningElement {

    @track accountName = '';
    @track accountPhone = '';
    @track accounts = [];
    columns = columns;

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
        }
    }

    handleNameChange(event) {
        this.accountName = event.target.value;
    }

    handlePhoneChange(event) {
        this.accountPhone = event.target.value;
    }

    handleSave() {
        createAccount({ name: this.accountName, phone: this.accountPhone })
            .then(() => {
                this.accountName = '';
                this.accountPhone = '';
            })
            .catch(error => {
                console.error(error);
            });
    }

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        if (actionName === 'delete') {
            deleteAccount({ accountId: row.Id })
                .then(() => {
                    // Handle successful deletion, e.g., refresh the list
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}