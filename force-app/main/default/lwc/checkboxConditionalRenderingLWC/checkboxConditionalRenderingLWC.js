import { LightningElement } from 'lwc';

export default class CheckboxConditionalRenderingLWC extends LightningElement {

    display = false;

    handleChange(event){

        this.display=event.target.checked;

    }

}