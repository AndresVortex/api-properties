import { NextFunction, Request, Response } from "express"
import { validationResult } from "express-validator"
import { errorCliente } from "../../helpers/response"
import { badRequest } from '../../helpers/http-helper';
import { HttpResponse } from '../../interface/http-interface';
import { MissingFormalParameterValidator } from '../../errors/client-errors';

export const validateFields = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return errorCliente(res, {}, 400, false, errors, 'Complete los campos obligatorios', 400)
    // return badRequest(new MissingFormalParameterValidator(errors))
  }
  next()
}
