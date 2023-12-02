import { LightningElement } from 'lwc';
import Mylabel from '@salesforce/label/c.Mylabel';
export default class Parent extends LightningElement {
    count = '0';
    nam = '';
    customlabel = Mylabel;


    handeladd() {
        this.count++;
    }

    handelsub() {
        this.count--;
    }
    handelchange(event) {
        this.nam = event.target.value;
    }
}