import { Injectable } from '@angular/core';
import { MainProducts } from 'src/app/models/mainProducts';
import mainproducts from '../../../data/mainproducts/mainProducts.json';

@Injectable({
  providedIn: 'root'
})
export class MainProductsService {

  private mainProducts:MainProducts[]=mainproducts;
  constructor() { }

  
  public getMainProducts(){
    return this.mainProducts.slice();
}
}
