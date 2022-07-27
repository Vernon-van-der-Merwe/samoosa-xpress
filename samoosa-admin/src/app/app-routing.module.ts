import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ProductComponent } from './page/product/product.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { DashComponent } from './shared/layouts/dash/dash.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {
    path: 'sign-in',
    component: AuthComponent,
  },
  {
    path: 'dash',
    component: DashComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'products', component: ProductComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
