import { LightningElement, track } from 'lwc';

export default class GetterSetter extends LightningElement {

    defaultMsg = "We are learning ";
    @track outputMessage;


    get message() {
        return this.defaultMsg + "Lightning Web Component";

    }

    set message(val) {
        this.outputMessage = val;
    }

    handleMessage(event) {
            this.message = event.target.value;
        }
        /************************ */
    @track balance = 0;
    maxBalance = 10000; // Maximum balance limit

    handleAmountChange(event) {
        this.amount = parseFloat(event.target.value);
    }

    addFunds() {
        if (this.amount && (this.balance + this.amount) <= this.maxBalance) {
            this.balance += this.amount;
        } else {
            alert('Invalid or exceeding maximum balance limit');
        }
    }

    subtractFunds() {
        if (this.amount && (this.balance - this.amount) >= 0) {
            this.balance -= this.amount;
        } else {
            alert('Invalid or insufficient balance');
        }
    }

    set amount(value) {
        this._amount = value;
    }

    get amount() {
        return this._amount;
    }

}