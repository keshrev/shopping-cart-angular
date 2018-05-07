import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content/no-content.component';

const routes: Routes = [
    { path: '', loadChildren: './products/products.module#ProductsModule' }, // redirectTo: 'products', pathMatch: 'full' },
    // { path: 'products', loadChildren: './products/products.module#ProductsModule' },
    { path: '**', component: NoContentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
