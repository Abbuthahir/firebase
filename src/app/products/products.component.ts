import { Component, OnInit } from '@angular/core';
import { FireService } from '../fire.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prods$!: Observable<any[]>;
  // selectedCategory!: Observable<any>;
  check: any;
  filteredProducts!: any[];
  selectedCategory!: string;



  constructor(private fire: FireService) {

  }
  ngOnInit() {
    this.prods$ = this.fire.getdata();
    this.prods$.pipe(tap(data => { console.log(data) })
    ).subscribe();
  }
  onCategoryChange() {
    this.fire.getdataByCategory(this.selectedCategory).subscribe(products => {
      this.filteredProducts = products;
      console.log('Filtered Products:', this.filteredProducts);
      
    });
  }

}
