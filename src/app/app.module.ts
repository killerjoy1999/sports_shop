import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    AddCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
