import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsService } from './products.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsComponent, NavHeaderComponent,
    ProductsListComponent],
  providers: [ProductsService],
})
export class ProductsModule { }
