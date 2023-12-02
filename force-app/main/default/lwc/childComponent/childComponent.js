// childComponent.js
import { LightningElement, api, track } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api nam;
    @track nn;
    handelchange(event) {
        this.nn = event.target.value;
        this.dispatchEvent(new CustomEvent('onnotifyparent', {
            detail: this.nn
        }))
    }

}