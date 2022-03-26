import { PropertyModel } from '../../../../domain/models/property/propertyModel';
import { AddProperty, AddPropertyDb } from '../../../../domain/useCase/properties/addProperty';
import PropertyService  from '../../../../services/propertyService';
import { puntoEnRegion } from '../../../../helpers/puntoEnRegion';



export class CreatePropertyDb implements AddProperty {
    async add (property: AddPropertyDb): Promise<PropertyModel>{
        const point = property.location
        
        const regionObject = await puntoEnRegion(property.location?.longitude, property.location?.latitude )

        console.log('regionObject')
        console.log(regionObject)
       


        
        const pricing = property.pricing
        const location = await PropertyService.createPoint(point)
        const pricingDb = await PropertyService.createPricing(pricing) 
        const propertyJson = {
            title: property.title,
            description: property.description,
            bedrooms: property.bedrooms,
            bathrooms: property.bathrooms,
            area: property.area,
            pointId: location.pointId,
            region: [regionObject?.nombreRegion],
            pricingId: pricingDb.pricingId 
        }
        const propertyDb = await PropertyService.create(propertyJson)
        const propertyRegionJson = {
            regionId: regionObject?.regionId,
            propertyId: propertyDb.propertyId
        }
        console.log(propertyRegionJson)
        await PropertyService.propertyRegion(propertyRegionJson)
        return new Promise(resolve => {
            console.log(propertyDb)
            resolve(propertyDb)
        })
    }
}