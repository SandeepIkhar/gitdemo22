import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { updateRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class GetRecord extends NavigationMixin(LightningElement) {
    @api recordId; // This will automatically receive the Account ID from the record page.
    newAccountName = '';
    account;

    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD] })
    wiredAccount({ data, error }) {
        if (data) {
            this.account = data;
            this.newAccountName = getFieldValue(this.account, NAME_FIELD);
        } else if (error) {
            // Handle error
        }
    }

    handleNameChange(event) {
        this.newAccountName = event.target.value;
    }

    handleEditAndNavigate() {
        // Create a record input object with the updated Account Name
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.newAccountName;

        const recordInput = { fields };

        // Update the Account record using Lightning Data Service
        updateRecord(recordInput)
            .then(() => {
                // Record updated successfully, navigate to the Account detail page
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: this.recordId,
                        objectApiName: 'Account',
                        actionName: 'view',
                    },
                });
            })
            .catch((error) => {
                // Handle error
            });
    }
}