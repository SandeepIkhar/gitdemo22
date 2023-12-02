// dynamicAccountSearch.js
import { LightningElement, wire, track } from 'lwc';
import searchAccounts from '@salesforce/apex/AccountController.searchAccounts';
import getRelatedContacts from '@salesforce/apex/AccountController.getRelatedContacts';
import { NavigationMixin } from 'lightning/navigation';

export default class DynamicAccountSearch extends NavigationMixin(LightningElement) {
    searchValue = '';
    accountResults = [];
    showResults = false;
    @track selectedAccount = false;
    @track relatedContacts = [];
    abc;
    pqr;


    // Handle search input change
    handleSearchChange(event) {
        this.searchValue = event.target.value;
        this.showResults = false; // Hide the list until search results are available
        this.delayedSearch();
    }

    // Debounce the search to avoid frequent server calls while typing
    delayedSearch() {
        clearTimeout(this.delayTimeout);
        this.delayTimeout = setTimeout(() => {
            this.showResults = true;
            this.search();
        }, 300); // Adjust the debounce delay as needed
    }

    // Perform the account search
    search() {
        if (this.searchValue) {
            searchAccounts({ searchTerm: this.searchValue })
                .then(result => {
                    this.accountResults = result;
                })
                .catch(error => {
                    console.error('Error fetching accounts:', error);
                });
        } else {
            this.accountResults = [];
        }
    }

    // Handle account click
    handleAccountClick(event) {
        const accountId = event.target.dataset.id; // Use dataset to get custom attributes
        this.abc = accountId;
        getRelatedContacts({ accountId: this.abc })
            .then(result => {
                this.relatedContacts = result;
            })
            .catch(error => {
                console.error('Error fetching related contacts:', error);
            });
        console.log('select' + this.relatedContacts);

        console.log('Selected Account:', this.selectedAccount);
        this.selectedAccount = true;
    }

    handlecontactClick(event) {
        const accountId = event.target.dataset.id; // Use dataset to get custom attributes
        this.pqr = accountId;

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.pqr,
                objectApiName: 'Account',
                actionName: 'view'
            },
        });
    }
}