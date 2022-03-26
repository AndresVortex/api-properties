import { Boundingbox } from '../../../interface/BoundingBox';
import { RegionModel } from '../../models/region/regionModel';

export interface EditPointDb {
    
    latitude?: number,
    longitude?: number
     
}


export interface EditRegion {
    edit: (id:number, point: EditPointDb) => Promise<EditPointDb>
}