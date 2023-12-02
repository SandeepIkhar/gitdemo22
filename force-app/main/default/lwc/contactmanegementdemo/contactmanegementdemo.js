import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/DemoContactController.getContacts';

export default class Contactmanegementdemo extends LightningElement {

    columns = [
        { label: 'First Name', fieldName: 'FirstName' },
        { label: 'Last Name', fieldName: 'LastName' },
        { label: 'Phone', fieldName: 'Phone' },
        { label: 'Title', fieldName: 'Title' },
        { label: 'Email', fieldName: 'Email' },
    ]

    @wire(getContacts)
    getwirecontact

}