import { LightningElement, track } from 'lwc';

export default class GetterPractice extends LightningElement {
    @track num1=1;
    @track num2=2;    

    get toplam(){
        return Number(this.num1) + Number(this.num2);
    }

    nameArray = ['John', 'Helena', 'Micheal', 'Pamela'];

    get firstString(){
        return this.nameArray[0];
    }

    get lastString(){
        return this.nameArray[this.nameArray.length-2];
    }

}