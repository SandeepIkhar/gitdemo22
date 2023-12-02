import { LightningElement } from 'lwc';
import getWheater from '@salesforce/apex/WheaterApi.getWheater';
export default class WheaterApi extends LightningElement {

    city;
    imgUrl;
    condition;
    handelonchange(event) {
        this.city = event.target.value;
    }

    handelclick() {
        getWheater({ city: this.city })
            .then(response => {
                console.log('response' + response);
                let parsdata = json.parse(response);
                this.imgUrl = parsdata.current.condition.icon;
                this.condition = parsdata.current.condition.text;

            })
            .catch(error => {
                console.log('error' + JSON.stringify(error));
            })
    }
}