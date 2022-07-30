import { LightningElement } from 'lwc';

export default class GetterPractice3 extends LightningElement {

    nameArray = ['John', 'Helena', 'Micheal', 'Pamela', 'Holly', 'Jan'];

    arrayNum=0;  

    get arrayValue(){
        if(this.arrayNum>=0 && this.arrayNum<this.nameArray.length){
            return this.nameArray[this.arrayNum];
        }else{
            alert(`Please enter 0-${this.nameArray.length} betwen as`);
        }
    }

    handleGetter(event){

        this.arrayNum = event.target.value;

    }



}