
import { Boundingbox } from '../../../interface/BoundingBox';
import { RegionModel } from '../../models/region/regionModel';

export interface AddRegionDb {
    
    name: string,
    boundingBoxId?: number
    boundingBox?: Boundingbox 
}


export interface AddRegion {
    add: (region: AddRegionDb) => Promise<RegionModel | void>
}