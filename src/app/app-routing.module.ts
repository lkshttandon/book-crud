import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { AddComponent } from './add/add.component';
import { AddCommComponent } from './add-comm/add-comm.component';
import { ViewcommComponent } from './viewcomm/viewcomm.component';



const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'add',component:AddComponent},
  {path:'list',component:ListsComponent},
  {path:'pname/:id',component:AddCommComponent},
  {path:'vcomm/:id',component:ViewcommComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
