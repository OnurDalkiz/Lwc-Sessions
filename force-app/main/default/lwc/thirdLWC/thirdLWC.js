import { LightningElement } from 'lwc';

export default class ThirdLWC extends LightningElement {

    name = 'Onur'

    handleBlur(deger){

        this.name=deger.target.value;

    }

}