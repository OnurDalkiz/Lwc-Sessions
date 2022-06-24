import { LightningElement } from 'lwc';

export default class ThirdLWC extends LightningElement {

    name = 'Onur'

    handleChange(deger){

        this.name=deger.target.value;

    }

}