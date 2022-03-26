import { SearchProperty, SearchPropertyDb } from '../../../../domain/useCase/properties/searchProperties';
import propertyService from '../../../../services/propertyService';
import { Properties } from '../../../../domain/modelsVO/Properties';
import { OptionsPaginate } from '../../../../interface/Options';

export class GetPropertiesDb implements SearchProperty {
    async search (bbox: string, page: number, pageSize: number): Promise<Properties[] >{
        console.log({bbox, page, pageSize})
        const offset = (page-1) * pageSize 
        console.log({offset})
        const options: OptionsPaginate = {
            offset: offset,  
            limit: pageSize
        }
        
        const properties = await propertyService.paginate(options)

        
        return new Promise(resolve => resolve(properties))
    }
}