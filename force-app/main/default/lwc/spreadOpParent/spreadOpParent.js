import { LightningElement } from 'lwc';

export default class SpreadOpParent extends LightningElement {
    childAttributes = {
        attribute1: 'Value 1',
        attribute2: 'Value 2',
        attribute3: 'Value 3'
    };

    // Define two objects
 person = {
    firstName: 'John',
    lastName: 'Doe',
  };
  
   address = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
  };
  
  // Merge the objects using the spread operator
   mergedData = { ...person, ...address };
  
  console.log(mergedData);
  ``
}