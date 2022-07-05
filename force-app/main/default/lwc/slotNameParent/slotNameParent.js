import { api, LightningElement } from 'lwc';

export default class SlotNameParent extends LightningElement {
    @api country;
    @api city;
    @api famousFor;

    handleCountryChange(event){
        if(parseInt(event.target.value)){
            alert('Hataaa')
            return;
        }
        this.country=event.target.value;
    }
    handleCityChange(event1){
        this.city=event1.target.value;
    }
    handleFamousChange(event2){
        this.famousFor=event2.target.value;
    }
}