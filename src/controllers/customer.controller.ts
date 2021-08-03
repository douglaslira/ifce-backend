import { Application } from 'express';
import { CustomerService } from '../services/customer.service';

export class CustomerController {
    private customerService: CustomerService;
  
    constructor(private app: Application) {
      this.customerService = new CustomerService();
      this.routes();
    }
  
    public routes() {
      this.app.route('/customer').get(this.customerService.listCustomer);
      this.app.route('/customer').post(this.customerService.saveCustomer);
      this.app.route('/customer').put(this.customerService.putCustomer);
      this.app.route('/customer').delete(this.customerService.removeCustomer);
    }
}