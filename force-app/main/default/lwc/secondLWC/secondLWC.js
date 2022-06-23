import { LightningElement } from 'lwc';

export default class SecondLWC extends LightningElement {
    //Degisken Olusturalim...
    isim = 'Isim Giriniz';
    

    handleInput(degeri){
        //degeri.target.value(inputun icinde ki degeri verir)
        //degeri.target.value JS in bir ozelligi.
        this.isim=degeri.target.value;
    }

    //Ornek Iki

    name = 'John';

    lastname = 'Watson';

    handleChange(parametre){

        this.name=parametre.target.value;

    }

    handleChange2(parametre){

        this.lastname=parametre.target.value;

    }
}