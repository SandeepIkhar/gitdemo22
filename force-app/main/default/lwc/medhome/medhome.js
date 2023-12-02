import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Medhome extends NavigationMixin(LightningElement) {
    hospital = true;
    child1 = false;
    child2 = false;
    child3 = false;
    child4 = false;

    utilityrows(evnet) {
        let cmpDef = {
            componentDef: "c:medmenu"
        };

        let encodedDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: "/one/one.app#" + encodedDef
            }
        });
    }
    handelser(event) {
        let cmpDef = {
            componentDef: "c:medsearch"
        };

        let encodedDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: "/one/one.app#" + encodedDef
            }
        });
    }
    logo() {
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
    handelhospital(event) {
        this.hospital = false;
        this.child1 = true;
        this.child2 = false
        this.child3 = false
    }
    handeldoctor(event) {
        this.hospital = false;
        this.child2 = true;
        this.child1 = false;
        this.child3 = false;
    }
    handelhealth(event) {
        this.hospital = false;
        this.child3 = true;
        this.child2 = false;
        this.child1 = false;
    }
    handelspeciality(event) {
        this.hospital = false;
        this.child3 = false;
        this.child2 = false;
        this.child1 = false;
        this.child4 = true;
    }
}