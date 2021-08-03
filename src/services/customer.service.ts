import { Request, Response } from "express";
import { MongooseDocument } from 'mongoose';
import { Customer } from '../models/customer.model';

export class CustomerService {
  
  public listCustomer(req: Request, res: Response) {
    Customer.find({"$and":[{"name":{"$ne":""}}]}, (error: Error, Customer: MongooseDocument) => {
      if (error) {
        res.status(400).send();
      }
      res.status(200).json(Customer);
    });
  }

  public saveCustomer(req: Request, res: Response) {

    const obj = req.body.name;
    const newCustomer = new Customer({name: obj});
    newCustomer.save((error: Error, Customer: MongooseDocument) => {
      if (error) {
        res.status(400).send();
      }
      res.status(200).json({_id: newCustomer._id, name: obj});
    });
    
  }

  public putCustomer(req: Request, res: Response) {

    const { _id, name } = req.body;
    Customer.update({_id: req.body._id}, {name: req.body.name}, {upsert: true}, (error: Error, Customer: MongooseDocument) => { 
      if (error) {
        res.status(400).send();
      }
      res.status(200).send();
  });
  }

  public removeCustomer(req: Request, res: Response) {

    const obj = req.query._id;
    
    Customer.deleteMany({_id: obj}, (error: Error) => {
      if (error) {
        res.status(400).send();
      }
      res.status(200).send();
    });
    
  }

}