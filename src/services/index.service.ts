import { Request, Response } from "express";

export class IndexService {
  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send("Olá IFCE!!");
  }
}