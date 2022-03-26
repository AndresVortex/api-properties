import { OptionsPaginate } from '../interface/Options';
import propertyRegionRepository from '../domain/repositories/propertyRegionRepository'



export class PropertiesRegionsService {
    async findPropertiesRegion(regionId: number){
        return propertyRegionRepository.findAll({
            where: {
                regionId
            }
        }) 
    }
}

export default new PropertiesRegionsService()