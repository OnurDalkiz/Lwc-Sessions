import { LightningElement } from 'lwc';

export default class GetterPratikLWC extends LightningElement {

    num1 = 0;
    num2 = 0;

    handleNum1(event){

        this.num1=event.target.value;
    }

    handleNum2(event2){

        this.num2=event2.target.value;
    }

    get total(){

        return `${parseInt(this.num1) + parseInt(this.num2)}`;

    }

}