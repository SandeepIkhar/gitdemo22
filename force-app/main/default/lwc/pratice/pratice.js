import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import FILE_OBJECT from '@salesforce/schema/ContentVersion';
import TITLE_FIELD from '@salesforce/schema/ContentVersion.Title';
import PATH_ON_CLIENT_FIELD from '@salesforce/schema/ContentVersion.PathOnClient';
import VERSION_DATA_FIELD from '@salesforce/schema/ContentVersion.VersionData';
import FIRST_PUBLISH_LOCATION_ID_FIELD from '@salesforce/schema/ContentVersion.FirstPublishLocationId';

export default class Pratice extends LightningElement {
    @track file;
    @track recordId = '';

    handleFileChange(event) {
        this.file = event.target.files[0];
    }

    handleRecordIdChange(event) {
        this.recordId = event.target.value;
    }

    async uploadFile() {
        if (!this.file || !this.recordId) {
            return;
        }

        const fields = {};
        fields[TITLE_FIELD.fieldApiName] = this.file.name;
        fields[PATH_ON_CLIENT_FIELD.fieldApiName] = this.file.name;
        fields[VERSION_DATA_FIELD.fieldApiName] = await this.getFileData();
        fields[FIRST_PUBLISH_LOCATION_ID_FIELD.fieldApiName] = this.recordId;

        const recordInput = { apiName: FILE_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then(() => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success',
                    message: 'File uploaded successfully',
                    variant: 'success'
                }));
            })
            .catch(error => {
                console.error('Error uploading file', error);
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error',
                    message: 'Error uploading file',
                    variant: 'error'
                }));
            });
    }

    getFileData() {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = event => resolve(event.target.result.split(',')[1]);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(this.file);
        });
    }
}