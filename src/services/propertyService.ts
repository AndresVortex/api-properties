import { PropertyModel } from "../domain/models/property/propertyModel";
import propertyRepository from '../domain/repositories/propertyRepository'
import pointRepository from '../domain/repositories/pointRepository'
import pricingRepository from '../domain/repositories/pricingRepository'
import propertyRegionRepository from '../domain/repositories/propertyRegionRepository'

import { PointModel } from "../domain/models/region/pointModel";
import { PricingModel } from '../domain/models/property/pricingModel';
import { OptionsPaginate } from '../interface/Options';
import { PropertiesRegionModel } from '../domain/models/property/propertyRegionsModel';

export class PropertyService {
    async create(property: PropertyModel){
        return propertyRepository.create(property)
    }
    async createPoint(point?: PointModel){
        return pointRepository.create(point)
    }
    async createPricing(pricing?: PricingModel){
        return pricingRepository.create(pricing)
    }
    async updateProperty(property: PropertyModel, id?: number){
        return propertyRepository.update(property, {
            where: {
                propertyId: id
            }
        })
    }
    async updatePricing(pricing?: PricingModel, id?: number){
        if (pricing) {
            
            return pricingRepository.update(pricing, {
                where:{
                    pricingId: id
                }
            })
        }
    }
    async getOneProperty(id: number){
        return propertyRepository.findByPk(id)
    }
    async getOnePropertyInclude(id: number){
        return propertyRepository.findOne({
            where:{
                propertyId: id,
                
            },
            include: [{
                model: pointRepository,

            }, {model: pricingRepository}]
        })
    }
    async getOnePricing(id?: number){
        return pricingRepository.findByPk(id)
    }
    async getOneLocation(id?: number){
        return pointRepository.findByPk(id)
    }
    async paginate(options: OptionsPaginate){
        return propertyRepository.findAll(options)
    }
    async updateLocation( point?: PointModel, id?:number  ){
        if (point) {
            return pointRepository.update(point, {
                where:{
                    pointId: id
                }
            })
            
        }
    }
    async propertyRegion(propertyRegion:PropertiesRegionModel){
        return propertyRegionRepository.create(propertyRegion)
    }

}

export default new PropertyService()