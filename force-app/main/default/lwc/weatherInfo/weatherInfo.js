import { LightningElement, wire, track } from 'lwc';
import getTemp from '@salesforce/apex/WeatherInfo.getTemp'
const CITIES = [{ label: 'Bhandara', value: 'Bhandara' }, { label: 'London', value: 'London' }, { label: 'Mumbai', value: 'Mumbai' }, { label: 'Moscow', value: 'Moscow' }, { label: 'Paris', value: 'Paris' }, { label: 'Nagpur', value: 'Nagpur' }];
export default class WeatherInfo extends LightningElement {
    cities = CITIES;
    city = 'Mumbai';
    @track tempData = {};
    @track location = {};
    @track current = {};
    @track condition = {};

    @wire(getTemp, { city: '$city' })
    getData({ data, error }) {

        if (data) {
            console.log('data', data);
            let weath = JSON.parse(data);
            this.location = weath.location;
            this.current = weath.current;
            this.condition = weath.current.condition;
            console.log('tempData', this.location);

        } else if (error) {
            console.log('error', error);
        }
    }
    handleCity(event) {
        this.city = event.target.value;
    }
}