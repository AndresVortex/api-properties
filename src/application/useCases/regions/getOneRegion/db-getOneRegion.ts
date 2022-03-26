import { RegionJson, RegionModel } from '../../../../domain/models/region/regionModel';
import { SearchRegion, SearchRegionDb } from '../../../../domain/useCase/region/searchRegion';
import  RegionService  from '../../../../services/regionService';

export class GetOneRegionDb implements SearchRegion {
    async search(id: number): Promise<RegionJson | null> {

        const regionDb = await RegionService.getOneRegion(id)
        const boundingBoxDb = await RegionService.getOneBoundingBox(regionDb?.boundingBoxId)
        const upperRightDb = await RegionService.getOnePoint(boundingBoxDb?.upperRightId)
        const bottomLeftDb = await RegionService.getOnePoint(boundingBoxDb?.bottomLeftId)

        const region: RegionJson = {
            id: regionDb?.regionId,
            name: regionDb?.name,
            boundingBox: {
                upperRight:{
                    latitude: upperRightDb?.latitude,
                    longitude: upperRightDb?.longitude
                },
                bottomLeft: {
                    latitude: bottomLeftDb?.latitude,
                    longitude: bottomLeftDb?.longitude
                }
            }
        }
        console.log(region)
        return new Promise(resolve => {
            return resolve(region)
        })
    }
}