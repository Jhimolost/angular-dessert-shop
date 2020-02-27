import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../services/tasks.service';
import { ExcelService } from '../../../services/excel.service';
import { Dessert } from '../../../models/obj';
@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  products = new Array<Dessert>();
  constructor(private tasksService: TasksService, private excelService: ExcelService) { }

  ngOnInit() {
    this.tasksService.products.subscribe( data =>
      this.products = data
    );
  }
  
  delProduct(id:number){
      this.tasksService.delProduct(id);
  }
  countSubtotal(): number{
    let subtotal = 0;
    for(let i=0;i<this.products.length;i++){
        subtotal += this.products[i].price*this.products[i].quantity;
    }
    return subtotal;
  }
  
  checkout(){
    this.excelService.exportAsExcelFile(this.products, 'check');
  }
}
