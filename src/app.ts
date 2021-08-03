import { Application } from 'express';
import { MONGO_URL_DEV } from '../config/contants';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import helmet from "helmet";

import { IndexController } from './controllers/index.controller';
import { CustomerController } from './controllers/customer.controller';

class App {
    public app: Application;
    public indexController: IndexController;
    public customerController: CustomerController;
  
    constructor() {

      this.app = express();
      
      this.setConfig();
      this.setMongoConfig();

      this.indexController = new IndexController(this.app);
      this.customerController = new CustomerController(this.app);

    }

    private setConfig() {
      this.app.use(helmet());
      this.app.use(bodyParser.json({ limit: '50mb' }));
      this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
      this.app.use(cors());
    }
  
    private setMongoConfig() {
      mongoose.Promise = global.Promise;
      mongoose.connect(MONGO_URL_DEV, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      });                                                                                         
    }

}

export default new App().app;