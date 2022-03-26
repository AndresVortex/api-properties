import { Boundingbox } from '../../../interface/BoundingBox';
import { RegionModel } from '../../models/region/regionModel';

export interface EditRegionDb {
    
    name?: string,
    boundingBoxId?: number
    boundingBox?: Boundingbox 
}


export interface EditRegion {
    edit: (id:number, region: EditRegionDb) => Promise<EditRegionDb>
}