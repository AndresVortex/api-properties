import { EditProperty, EditPropertyDb } from '../../../../domain/useCase/properties/editProperty';
import { AddPropertyDb } from '../../../../domain/useCase/properties/addProperty';
import { PropertyModel } from '../../../../domain/models/property/propertyModel';
import propertyService from '../../../../services/propertyService';


export class UpdatePropertyDb implements EditProperty {
    async edit(id: number, property: EditPropertyDb) :Promise<EditPropertyDb | null>{

        let propertyDb = await propertyService.getOneProperty(id)
        
       

        await propertyService.updateProperty(property, id)

        await propertyService.updatePricing(property.pricing, propertyDb?.pricingId )

        propertyService.updateLocation(property.location, propertyDb?.pointId)

        propertyDb = await propertyService.getOnePropertyInclude(id)

        return new Promise(resolve => {

            console.log('resolve', propertyDb)
            return resolve(propertyDb)
        })
    }
}