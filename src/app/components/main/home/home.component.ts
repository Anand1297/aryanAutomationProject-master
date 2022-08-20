import { Component, OnInit } from '@angular/core';
import { MainProducts } from 'src/app/models/mainProducts';
import { MainProductsService } from './main-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers :[MainProductsService]
})
export class HomeComponent implements OnInit {

mainProducts:MainProducts[];

  constructor(private mainProductsService:MainProductsService) { }

  ngOnInit(): void {
    this.mainProducts= this.mainProductsService.getMainProducts();
    console.log(this.mainProducts)
  }

}
