import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployerCreateComponent} from './component/employer-create/employer-create.component';
import {EmployerUpdateComponent} from './component/employer-update/employer-update.component';
import {EmployerListeComponent} from './component/employer-liste/employer-liste.component';
import {EmployerOneComponent} from './component/employer-one/employer-one.component';

// @ts-ignore
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employees-list' },
  { path: 'create-employee', component: EmployerCreateComponent },
  { path: 'edit-employee/:id', component: EmployerUpdateComponent },
  { path: 'employees-list', component: EmployerListeComponent},
  { path: 'employees-detail', component: EmployerOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
