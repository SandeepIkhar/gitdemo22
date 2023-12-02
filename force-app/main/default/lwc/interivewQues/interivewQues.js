import { LightningElement } from 'lwc';

export default class InterivewQues extends LightningElement {
    total;
    value1;
    value2;
    value2;

    handelchange(event) {
        this.value1 = parseFloat(event.target.value);
        this.value2 = parseFloat(event.target.value);
        this.value3 = parseFloat(event.target.value);
    }

    handelclick(event) {
        total = this.value1 + this.value2 + this.value3;
    }
}