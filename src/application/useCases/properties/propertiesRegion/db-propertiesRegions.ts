import { Properties } from '../../../../domain';
import { searchPropertyRegion } from '../../../../domain/useCase/properties/serachPropertyRegion';
import { OptionsPaginate } from '../../../../interface/Options';
import PropertiesRegionsService  from '../../../../services/propertiesRegionService';
import propertyService from '../../../../services/propertyService';

export class GetPropertiesRegionsDb implements searchPropertyRegion {
    async search (regionId: number, offset:number, pageSize:number): Promise<Properties[]>{


        const propertiesRegionDb = await PropertiesRegionsService.findPropertiesRegion(regionId)
        const options: OptionsPaginate = {
            offset: offset,  
            limit: pageSize,
            where: {
                propertyId: propertiesRegionDb.map(propertyRegion => propertyRegion.propertyId)
            }
        }
        const properties = await propertyService.paginate(options)
        return new Promise(resolve => resolve(properties))



    }
    
}