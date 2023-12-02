import { LightningElement } from 'lwc';

export default class ChildToParent1 extends LightningElement {
    counter = '';
    value1 = 2;
    value2 = 10;
    messageToChild = 'sandeep';

    handeldecrement() {
        this.counter--;
    }
    handelincrement() {
        this.counter++;
    }
    handleMultiply1() {
        this.counter = this.counter * 2;
    }
    handleMultiply2() {
        this.counter = this.counter * 10;
    }
    handelin(event) {
        const newvalue = event.detail;
        this.counter = this.counter * newvalue;

    }
    handleChange(event) {
        this.messageToChild = event.target.value;
    }
}