import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/mycontroller.getAccounts';
import { NavigationMixin } from 'lightning/navigation'

export default class Pratice1 extends NavigationMixin(LightningElement) {
    // @track accounts = [];



    /* handelclick() {
             getAccounts()
                 .then(result => {
                     this.accounts = result;
                 })
                 .catch(error => {
                     console.error('Error fetching accounts:', error);
                 });
         }*/
    /************************** */
    @track accountName = '';
    @track industry = '';
    @track createdAccounts = [];
    accountid;
    p;

    handleAccountNameChange(event) {
        this.accountName = event.target.value;
    }

    handleIndustryChange(event) {
        this.industry = event.target.value;
    }

    createAccount() {
        getAccounts({ name: this.accountName, industry: this.industry })
            .then((result) => {

                console.log('ids', result.name)
                alert('Account created successfully');


            })
            .catch((error) => {
                // Handle error
                console.error('Error creating account:', error);
            });

        const newId = Date.now();
        this.createdAccounts.push({ id: this.accountid, Name: this.accountName, Industry: this.industry });
        this.accountName = '';
        this.industry = '';
    }
    dclick(event) {
        const e = event.target.dataset.id;
        console.log('id' + e);
        this.p = e;
        this[NavigationMixin.Navigate]({
            type: 'standard_recordpage',
            attributes: {
                recordId: this.p,
                objectApiName: 'Account',
                actionName: 'view'
            }
        })

    }
}