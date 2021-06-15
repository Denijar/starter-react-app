import { NextFunction, Request, Response } from "express";

export const hello = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    body: "Hello from the typescript server!"
  });
};

export default hello;
