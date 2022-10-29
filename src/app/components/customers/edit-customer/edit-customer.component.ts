import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerDetails:Customer = {

    id : '',
    name: '',
    email: '',
    phone: 0,
    price: 0,
    product: ''
  };
  constructor(private route: ActivatedRoute, private customerService: CustomersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id = params.get('id');

        if(id) {
          this.customerService.getCustomer(id)
          .subscribe({
            next: (response) =>{
              this.customerDetails = response;
            }
          });
        }
      }
    })
  }

}
