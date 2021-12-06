import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableTennisComponent } from './table-tennis/table-tennis.component';

const routes: Routes = [
  { path:'', redirectTo:'/table-tennis', pathMatch: 'full'},
  { path:'table-tennis', component: TableTennisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
