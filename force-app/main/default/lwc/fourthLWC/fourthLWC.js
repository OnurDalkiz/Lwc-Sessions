import { LightningElement } from 'lwc';

export default class FourthLWC extends LightningElement {

    fName = 'Name';
    lName = 'Surname';

    get fullUpperCase(){

        
        return`Ismim Buyuk Harfle : ${this.fName.toUpperCase()} ${this.lName.toUpperCase()}`;

    }


}