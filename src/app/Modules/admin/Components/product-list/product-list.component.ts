import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

interface USER {
  id: string;
  ProductName: string;
  Category: string;
  Price: string;
  Action: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  displayedColumns: string[] = ['position', 'name', 'category', 'subcategory','price','discount','fprice'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  addProduct() {
    this.router.navigate(['admin/product/add']);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  category: string;
  subcategory: string;
  price:number;
  Discount:number;
  fprice:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Product A', position: 1, category: 'Electronics', subcategory: 'Smartphones',price: 500,Discount:10,fprice:450},
  {name: 'Product B', position: 2, category: 'Clothing', subcategory: 'Shirts',price: 350,Discount:20,fprice:330},
  {name: 'Product D', position: 3, category: 'Books', subcategory: 'Fiction',price: 110,Discount:7,fprice:103},
  {name: 'Product E', position: 4, category: 'Beauty', subcategory: 'Skincare',price: 1222,Discount:19,fprice:1203},
  {name: 'Product F ', position: 5, category: 'Furniture', subcategory: 'Chairs',price: 499,Discount:0,fprice:499},
];
