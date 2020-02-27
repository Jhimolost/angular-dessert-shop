import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'
import { Dessert } from '../models/obj';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TasksService {
  count: BehaviorSubject<number>;
  products: BehaviorSubject<Dessert[]>;

  constructor(private http: Http) { 
    this.count = new BehaviorSubject<number>(0);
    this.products = new BehaviorSubject<Dessert[]>(new Array<Dessert>());
  }

  addProduct(id: number){
    let des = new Dessert;
    let dupl = this.products.value.find(x => x.id == id);
    if(!dupl){
    this.getById(id).then(data => {
      this.products.value.push(data);
    });
  }else{
    let index = this.products.value.indexOf(dupl);
    dupl.quantity = dupl.quantity+1;
    this.products.value[index] = dupl;
  }
    this.count.next(this.count.value+1);
  }

  delProduct(id: number){
    let dupl = this.products.value.find(x => x.id == id);
    this.count.next(this.count.value-dupl.quantity);
    this.products.next(this.products.value.filter(item => item !== dupl)) ;
  }

  getInfo(): Promise<Dessert[]> {
    return this.http.get('../../assets/info.json')
      .toPromise()
      .then(response => response.json() as Dessert[]);
  }

  getById(id: number): Promise<Dessert>{
    return this.http.get('../../assets/info.json')
    .toPromise()
    .then(response => response.json().find(x => x.id === id) as Dessert);
  }


}

