import { Request, Response } from 'express';

export interface Mycontext {
  req: Request;
  res: Response;
  payload?: { userId: string };
}
