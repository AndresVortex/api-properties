import { Controller } from '../../interface/controllers';
import { HttpRequest, HttpResponse } from '../../interface/http-interface';
import { serverError, success, successPagination, badRequest } from '../../helpers/http-helper';
import { searchPropertyRegion } from '../../domain/useCase/properties/serachPropertyRegion';
import { MissingFormalParameter } from '../../errors/client-errors';


export class PropertiesRegion implements Controller {
    constructor(private readonly searchPropertiesRegion:searchPropertyRegion  ){}
    async handle (httpRequest: HttpRequest): Promise<HttpResponse>{

        try {
            let {id} = httpRequest.params
            let { page, pageSize} = httpRequest.query

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

            const properties = await  this.searchPropertiesRegion.search(id, offset, pageSize)

            return successPagination(properties, page, pageSize, properties?.length ? properties?.length : 0 , properties?.length && offset!= 0 ? properties?.length/offset : 1 )
        } catch (error: any) {
            console.log(error)
            return serverError(error)
        }
    }
}