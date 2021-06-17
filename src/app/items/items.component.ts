import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = {};

  constructor(private itemService: ItemsService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  create(){
    this.itemService.id = null;
    this.itemService.name = null;
    this.itemService.quantity = null;
    this.itemService.unityMeasurement = null;
    this.itemService.price = null;
    this.itemService.expirationDate = null;
    this.itemService.manufacturingDate = null;
    this.itemService.perishable = false;
    this.itemService.edit = false;

    this.router.navigate(['/item']);

  }
  
  edit(id) {
    let item = this.itemService.read(id);

    this.itemService.id = item.id;
    this.itemService.name = item.name;
    this.itemService.quantity = item.quantity;
    this.itemService.unityMeasurement = item.unityMeasurement;
    this.itemService.price = item.price;
    this.itemService.expirationDate = item.expirationDate;
    this.itemService.manufacturingDate = item.manufacturingDate;
    this.itemService.perishable = item.perishable;
    this.itemService.edit = true;

    this.router.navigate(['/item']);    

  }
  delete(id) {
    this.itemService.deleteItem(id);
    this.items = this.itemService.getItems();
  }

}
