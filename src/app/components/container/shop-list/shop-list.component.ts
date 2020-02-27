import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../services/tasks.service';
import { Dessert } from '../../../models/obj';
@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  info: Dessert[];
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getInfo().then(res => this.info = res);
  }
  addToCart(id: number){
    this.tasksService.addProduct(id);
}
}
