import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  id:number;
  name: string;
  quantity: number;
  unityMeasurement: string;
  price: number;
  expirationDate: Date;
  manufacturingDate: Date;
  perishable: boolean;
  edit:boolean;

  constructor() { }

  getItems() {
    let items = JSON.parse(localStorage.getItem("items"));
    return items;
  }

  item(item){
    if (item.id == null ) {
      this.addItem(item);
    } else {
      this.updateItem(item.id, item);
    }
  }
  addItem(item) {
    let items = this.getItems();
    
    if(items === null || items.length == 0){
      items = [];
    } else {
      let index = items.length - 1;
      let lastId = items[index].id;
      item.id = this.generateId(lastId);
    }
    
    items.push(item);
   
    localStorage.setItem('items', JSON.stringify(items));
  }

  read(id) {
    let items = this.getItems();
    let index = this.returnIndexById(id);

    return {
      "id":items[index].id,
      "name": items[index].name,
      "quantity": items[index].quantity,
      "unityMeasurement": items[index].unityMeasurament,
      "price": items[index].price,
      "expirationDate": items[index].expirationDate,
      "manufacturingDate": items[index].manufacturingDate,
      "perishable": items[index].perishable
    };

  }

  deleteItem(id){
    let index = this.returnIndexById(id);
    let items = this.getItems();

    console.log(id);
    
    if (index >= 0) {
      items.splice(index, 1);
    }

    localStorage.setItem('items', JSON.stringify(items));
  }

  updateItem(id, item) {
    let items = this.getItems();
    let index = this.returnIndexById(id);

    items[index].name = item.name;
    items[index].quantity = item.quantity;
    items[index].unityMeasurement = item.unityMeasurement;
    items[index].price = item.price;
    items[index].expirationDate = item.expirationDate;
    items[index].manufacturingDate = item.manufacturingDate;
    items[index].perishable = item.perishable;

    localStorage.setItem('items', JSON.stringify(items));
    

  }

  returnIndexById(id) {
    let items = this.getItems();

    console.log(items);
    for(let i = 0; i < items.length; i++){
      if(items[i].id == id )  {
        return i;
      }
    }

    return -1;
  }

  generateId(id) {
    return id + 1;
  }

}
