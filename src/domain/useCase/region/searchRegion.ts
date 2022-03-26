import { Boundingbox } from '../../../interface/BoundingBox';
import { RegionModel, RegionJson } from '../../models/region/regionModel';

export interface SearchRegionDb {
    
    regionId: number 
}


export interface SearchRegion {
    search: (id: number) => Promise<RegionJson | null>
}