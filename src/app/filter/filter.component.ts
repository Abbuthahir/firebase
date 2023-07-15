import { Component } from '@angular/core';
import { FireService } from '../fire.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  selectedCategory!: string;
  filteredProducts!: any[];

  constructor(private fire: FireService){
    
  }
  onCategoryChange() {
    this.fire.getdataByCategory(this.selectedCategory).subscribe(products => {
      this.filteredProducts = products;
      console.log('Filtered Products:', this.filteredProducts);
      
      
    });
  }
}
