import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    @api parentname;
    subhandel() {
        this.dispatchEvent(new CustomEvent('s'));
    }

    addhandel() {
        this.dispatchEvent(new CustomEvent('a'));
    }
}