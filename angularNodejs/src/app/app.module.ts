import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployerCreateComponent } from './component/employer-create/employer-create.component';
import { EmployerListeComponent } from './component/employer-liste/employer-liste.component';
import { EmployerUpdateComponent } from './component/employer-update/employer-update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployerOneComponent } from './component/employer-one/employer-one.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployerCreateComponent,
    EmployerListeComponent,
    EmployerUpdateComponent,
    EmployerOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
