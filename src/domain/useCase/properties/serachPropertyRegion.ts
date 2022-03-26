
import { Boundingbox } from '../../../interface/BoundingBox';
import { RegionModel } from '../../models/region/regionModel';
import { PropertyModel } from '../../models/property/propertyModel';
import { Properties } from '../../modelsVO/Properties';

export interface searchPropertyRegionDb {

    propertyId?: number,
    regionId?: number,
    propertiePerRegionId?: number
}


export interface searchPropertyRegion {
  search: (regionId: number, offset: number, pageSize: number) => Promise<Properties[]>
}