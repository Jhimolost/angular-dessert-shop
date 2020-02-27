import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../../../../services/tasks.service';
import { Dessert } from '../../../../models/obj';
@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  id:number;
  private sub: any;
  product = new Dessert;
  info =[
    {
    Продукт:"ингр1",
    Количество:"1"
   },
   {
    Продукт:"ингр2",
    Количество:"2"
   },
   {
    Продукт:"ингр3",
    Количество:"3"
   }
  ];
  constructor(private route: ActivatedRoute, private tasksService: TasksService) { }

  settings = {
    columns: {
      Продукт: {
        title: 'Продукт'
      },
      Количество: {
        title: 'Количество'
      }
    }
  };

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
   console.log(this.id);
   this.tasksService.getById(this.id).then(item => {
    this.product = item;
  });
  }
  addToCart(id: number){
      this.tasksService.addProduct(id);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}