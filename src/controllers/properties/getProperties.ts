import { Controller } from '../../interface/controllers';
import { HttpRequest, HttpResponse } from '../../interface/http-interface';
import { serverError, success, badRequest, successPagination } from '../../helpers/http-helper';
import { SearchProperty } from '../../domain/useCase/properties/searchProperties';
import { MissingFormalParameter } from '../../errors/client-errors';



export class GetProperties implements Controller {
    constructor(private readonly searchProperties: SearchProperty){}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse>{
        try {
            let {bbox, page, pageSize} = httpRequest.query

            if(!page ) {
                page = 1
            }

            if(typeof page === 'string'){
                page = parseInt(page)

            }
            if(page === 0)return badRequest(new MissingFormalParameter('page debe ser mayor a 0'))
            if(!pageSize){
                pageSize = 10
            }
            if (pageSize > 20) {
                pageSize = 20
            }
            if (typeof pageSize === 'string') {
                
                pageSize = parseInt(pageSize)
            }
            const offset = (page - 1) * pageSize
            const properties = await this.searchProperties.search(bbox, page, pageSize)
            console.log('::::::::::::::')
            console.log(properties?.length, offset)
            return successPagination(properties, page, pageSize, properties?.length ? properties?.length : 0 , properties?.length && offset!= 0 ? properties?.length/offset : 1 )
            // return success(properties)

        } catch (error: any) {
            console.log(error)
            return serverError(error)
        }
    }
}