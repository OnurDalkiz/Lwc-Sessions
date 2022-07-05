import { LightningElement } from 'lwc';

export default class Car extends LightningElement {
    engineModel='Empty';

    handleChange(event){

        this.engineModel=event.target.value;

    }
}