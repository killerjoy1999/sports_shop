import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersListComponent
  },
  {
    path: 'customers',
    component: CustomersListComponent
  },
  {
    path: 'customers/add',
    component: AddCustomerComponent
  },
  {
    path: 'customers/edit/:id',
    component: EditCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
