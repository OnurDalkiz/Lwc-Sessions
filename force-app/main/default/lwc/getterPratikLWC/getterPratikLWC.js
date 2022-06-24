import { LightningElement } from 'lwc';

export default class GetterPratikLWC extends LightningElement {

    num1 = 0;
    num2 = 0;

    handleNum1(event){

        this.num1=event.target.value;
    }

    handleNum1(event){

        this.num2=event.target.value;
    }

    get total(){

        return `${parseInt(this.num1)} + ${parseInt(this.num2)}`;

    }

}