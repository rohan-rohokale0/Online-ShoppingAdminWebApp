import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  displayedColumns: string[] = ['position', 'order_name', 'order_category', 'order_subcategory','order_price','order_discount','order_fprice'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
}

export interface PeriodicElement {
  order_name: string;
  position: number;
  order_category: string;
  order_subcategory: string;
  order_price:number;
  order_Discount:number;
  order_fprice:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {order_name: 'Product A', position: 1, order_category: 'Electronics', order_subcategory: 'Smartphones',order_price: 500,order_Discount:10,order_fprice:450},
  {order_name: 'Product B', position: 2, order_category: 'Clothing', order_subcategory: 'Shirts',order_price: 350,order_Discount:20,order_fprice:330},
  {order_name: 'Product C', position: 3, order_category: 'Home Appliances', order_subcategory: 'Kitchen Gadgets',order_price: 1770,order_Discount:35,order_fprice:1735},
  {order_name: 'Product D', position: 4, order_category: 'Books', order_subcategory: 'Fiction',order_price: 110,order_Discount:7,order_fprice:103},
  {order_name: 'Product E', position: 5, order_category: 'Beauty', order_subcategory: 'Skincare',order_price: 1222,order_Discount:19,order_fprice:1203},
  {order_name: 'Product F', position: 6, order_category: 'Furniture', order_subcategory: 'Chairs',order_price: 499,order_Discount:0,order_fprice:499},

];
