import { LightningElement } from 'lwc';

export default class HomeWorkLWC extends LightningElement {

    firstName = '';
    lastName = '';

    handleBlur1(event){

        this.firstName = event.target.value;

    }

    handleBlur2(event){

        this.lastName = event.target.value;

    }

    get fullName(){

        return `${this.firstName +' '+ this.lastName.toUpperCase()}`

    }

}