import { Controller } from "../../interface/controllers";
import { HttpRequest, HttpResponse } from "../../interface/http-interface";
import { badRequest, success, serverError } from '../../helpers/http-helper';
import { ErrorTypeParameter } from '../../errors/client-errors';
import { EditRegion } from "../../domain/useCase/region/editRegion";


export class UpdateRegion implements Controller {

    constructor(private readonly editRegion: EditRegion){
        this.editRegion = editRegion
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        try {
            const { id } = httpRequest.params
            const {name, boundingBox } = httpRequest.body
            console.log(id, typeof id)
            // if (typeof id !== 'number') return badRequest(new ErrorTypeParameter('El tipo de dato no es correcto'))
    
            const region = await this.editRegion.edit(id, {name, boundingBox} )
    
            return success(region)
            
        } catch (error: any) {
            console.log(error)
            return serverError(error)
        }
    }
}