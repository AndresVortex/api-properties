import { ServerError } from '../errors/server-errors';
import { HttpResponse } from '../interface/http-interface';

export const badRequest =(error: Error): HttpResponse => ({
    statusCode: 400,
    body: error
})
export const success = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data
})
export const successPagination = (data: any, page: number, pageSize: number, total: number, totalPage: number): HttpResponse => ({
    statusCode: 200,
    body: {
        page,
        pageSize,
        total,
        totalPage,
        data
    }
})

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    body: new ServerError(error.stack)
})