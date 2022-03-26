import { Controller } from '../../interface/controllers';
import { HttpRequest, HttpResponse } from '../../interface/http-interface';
import { MissingFormalParameter } from '../../errors/client-errors';
import { success, serverError, badRequest } from '../../helpers/http-helper';
import { AddRegion } from '../../domain/useCase/region/addRegion';
import { Boundingbox } from '../../interface/BoundingBox';
export class CreateRegion implements Controller {

    constructor(private readonly addRegion: AddRegion) {
        this.addRegion = addRegion
    }



    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const requiredProperties = ['name', 'boundingBox']
            for (const props of requiredProperties) {
                if (!httpRequest.body[props]) {
                    return badRequest(new MissingFormalParameter(props))
                }
            }
            const { name, boundingBox } = httpRequest.body
            const betweenLatitudeUpper = -90 < boundingBox.upperRight.latitude && boundingBox.upperRight.latitude < 90
            const betweenLongitudeUpper = -180 < boundingBox.upperRight.longitude && boundingBox.upperRight.longitude < 180
            const betweenLatitudeBottom = -90 < boundingBox.bottomLeft.latitude && boundingBox.bottomLeft.latitude < 90
            const betweenLongitudeBottom = -180 < boundingBox.bottomLeft.longitude && boundingBox.bottomLeft.longitude < 180

            
            if (!(betweenLatitudeUpper && betweenLongitudeUpper && betweenLatitudeBottom && betweenLongitudeBottom)) return badRequest(new MissingFormalParameter('El bounding box no esta en los rangos permitidos')) 

            if (boundingBox.upperRight.longitude < boundingBox.bottomLeft.longitude) return badRequest(new MissingFormalParameter('El bounding box no es correcto'))
            if (boundingBox.upperRight.latitude < boundingBox.bottomLeft.latitude) return badRequest(new MissingFormalParameter('El bounding box no es correcto'))

            const region = await this.addRegion.add({ name, boundingBox })
            console.log({ region })
            return success(region)
        } catch (error: any) {
            console.log(error)
            return serverError(error)
        }
    }

    // async run(data: CreateRegionDTO){
    //     const regionExists = await this.regionRepository.getById(data.id)
    //     if(regionExists){
    //         throw new  Error('La region existe en la db')
    //     }
    //     const region = new Region(data)
    //     await this.regionRepository.saveRegion(region)

    // }
}