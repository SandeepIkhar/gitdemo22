// parentComponent.js
import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    myvalue;
    @track messageFromChild;
    handelchange(event) {
        this.myvalue = event.target.value;
    }
    handleChildNotification(event) {
        this.messageFromChild = event.detail.value;
    }
}