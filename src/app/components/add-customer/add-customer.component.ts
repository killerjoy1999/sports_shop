import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addCustomerRequest: Customer = {
    id : '',
    name: '',
    email: '',
    phone: 0,
    price: 0,
    product: ''
  };
  constructor(private customerService: CustomersService, private router: Router) { }

  ngOnInit(): void {
  }

  addCustomer(){
    this.customerService.addCustomer(this.addCustomerRequest)
    .subscribe({
      next:(customer) =>{
        this.router.navigate(['customers']);
      }
    });
  }

}
