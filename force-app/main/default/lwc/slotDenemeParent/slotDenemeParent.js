import { LightningElement } from 'lwc';

export default class SlotDenemeParent extends LightningElement {

    nameLastname;

    handleChild(event){

        this.nameLastname = event.target.value;

    }

}