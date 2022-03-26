import { HttpRequest, HttpResponse } from '../../interface/http-interface';
import { serverError, success, badRequest } from '../../helpers/http-helper';
import { Controller } from '../../interface/controllers';
import { SearchRegion } from '../../domain/useCase/region/searchRegion';
import { MissingFormalParameter } from '../../errors/client-errors';


export class GetOneRegion implements Controller {

    constructor(private readonly searchRegion: SearchRegion ){

    }

    async handle(httpRequest:HttpRequest): Promise<HttpResponse> {

        try {
            const {id} = httpRequest.params 

            if(id === 'undefined' || id === 'null' ) return badRequest(new MissingFormalParameter('el id no puede ser undefined o null'))

            const region = await this.searchRegion.search(id)

            return success(region)



        } catch (error: any) {
            console.log(error)
            return serverError(error)
        }
    }
}