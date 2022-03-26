import { Controller } from '../../interface/controllers';
import { HttpRequest, HttpResponse } from '../../interface/http-interface';
import { badRequest, serverError, success } from '../../helpers/http-helper';
import { MissingFormalParameter } from '../../errors/client-errors';
import { AddProperty } from '../../domain/useCase/properties/addProperty';



export class CreateProperties implements Controller {


    constructor(private readonly addProperty: AddProperty) {

    }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {

            const requiredProperties = ['title', 'location', 'pricing', 'bedrooms', 'bathrooms', 'area']
            for (const props of requiredProperties) {
                if (!httpRequest.body[props]) {
                    return badRequest(new MissingFormalParameter(props))
                }
            }

            const { title, description, pricing, bedrooms, bathrooms, area, location } = httpRequest.body
            if(!pricing.rentalPrice)return badRequest(new MissingFormalParameter('rentalPrice es obligatorio'))
            const bedroomsValid = bedrooms >= 1 && bedrooms <= 6 
            const bathroomsValid = bathrooms >= 1 && bathrooms <= 4
            const areaValid = area >= 15 && area <= 300
            if(!bedroomsValid)return  badRequest(new MissingFormalParameter('bedrooms no esta entre los valores permitidos'))
            if(!bathroomsValid)return  badRequest(new MissingFormalParameter('bathrooms no esta entre los valores permitidos'))
            if(!areaValid)return  badRequest(new MissingFormalParameter('area no esta entre los valores permitidos'))


            console.log({title, description, pricing, bedrooms, bathrooms, area, location})

            const property = await this.addProperty.add({
                title,
                description,
                bedrooms,
                bathrooms,
                area,
                location,
                pricing
                
            })
            
            return success(property)


        } catch (error: any) {
            console.log(error)
            return serverError(error)
        }
    }
}