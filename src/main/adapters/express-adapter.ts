import { Controller } from "../../interface/controllers";
import { Request, Response } from 'express';
import { HttpRequest } from '../../interface/http-interface';

export const adapterRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            body: req.body,
            params: req.params,
            query: req.query
        }
        const httpResponse  = await controller.handle(httpRequest)
        console.log({httpResponse})
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}