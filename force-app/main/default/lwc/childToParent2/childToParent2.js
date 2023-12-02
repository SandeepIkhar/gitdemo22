import { LightningElement, api, track } from 'lwc';

export default class ChildToParent2 extends LightningElement {
    @api messageFromParent;
    @track num;
    addhandel(event) {
        this.dispatchEvent(new CustomEvent('add'));

    }
    subhandel(event) {
        this.dispatchEvent(new CustomEvent('sub'));
    }
    handelmultiply1(event) {
        this.dispatchEvent(new CustomEvent('m1'));
    }
    handelmultiply2(event) {
            this.dispatchEvent(new CustomEvent('m2'));
        }
        /* handelinput(event) {
             const myvalue = event.target.value;
             this.dispatchEvent(new CustomEvent('m3', {
                 detail: myvalue
             }))

         }*/
    handelinput(event) {
        this.num = event.target.value;
        if (this.num) {
            this.dispatchEvent(new CustomEvent('m3', {
                detail: this.num
            }));
        }
    }

}