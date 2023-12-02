import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Medsearch extends NavigationMixin(LightningElement) {
    closeicon(evnet) {
        let cmpDef = {
            componentDef: "c:medhome"
        };

        let encodedDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: "/one/one.app#" + encodedDef
            }
        });
    }
}