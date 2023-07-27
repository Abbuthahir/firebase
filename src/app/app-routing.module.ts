import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomApiPracticeComponent } from './custom-api-practice/custom-api-practice.component';
import { FilterComponent } from './filter/filter.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'customapi',
    component: CustomApiPracticeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
