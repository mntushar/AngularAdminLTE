import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Component/Admin/home/home.component';
import { UserHomeComponent } from './Component/User/user-home/user-home.component'

const routes: Routes = [
  {path:'', component: UserHomeComponent},
  {path:'admin', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
