import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../items/items.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  id:number;
  name: string;
  quantity: number;
  unityMeasurement: string;
  price: number;
  expirationDate: Date;
  manufacturingDate: Date;
  perishable: boolean;
  edit:boolean;

  constructor(private itemService : ItemsService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.itemService.id;
    this.name = this.itemService.name;
    this.quantity = this.itemService.quantity;
    this.unityMeasurement = this.itemService.unityMeasurement;
    this.price = this.itemService.price;
    this.expirationDate = this.itemService.expirationDate;
    this.manufacturingDate = this.itemService.manufacturingDate;
    this.perishable = this.itemService.perishable;
    this.edit = this.itemService.edit;
  }

  item(){
    let item = {
      "id": this.id,
      "name": this.name,
      "quantity": this.quantity,
      "unityMeasurament":this.unityMeasurement,
      "price": this.price,
      "expirationDate": this.expirationDate,
      "manufacturingDate": this.manufacturingDate,
      "perishable": this.perishable,
    }

    console.log(this.id);

    this.itemService.item(item);
    this.router.navigate(['/']);
  }

}
