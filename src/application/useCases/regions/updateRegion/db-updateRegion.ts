import { RegionModel, RegionJson } from '../../../../domain/models/region/regionModel';
import { EditRegion, EditRegionDb } from '../../../../domain/useCase/region/editRegion';
import RegionService from '../../../../services/regionService';


export class UpdateRegionDb implements EditRegion {

    async edit(id: number, region: EditRegionDb): Promise<EditRegionDb> {

        let regionDb = await RegionService.getOneRegion(id)
        let boundingBoxDb = await RegionService.getOneBoundingBox(regionDb?.boundingBoxId)
        let upperRightDb = await RegionService.getOnePoint(boundingBoxDb?.upperRightId)
        let bottomLeftDb = await RegionService.getOnePoint(boundingBoxDb?.bottomLeftId)
        const pointUpper = { 
            latitude: region.boundingBox?.upperRight.latitude, 
            longitude: region.boundingBox?.upperRight.longitude 
        }
        const pointBottom = { 
            latitude: region.boundingBox?.bottomLeft.latitude, 
            longitude: region.boundingBox?.bottomLeft.longitude 
        }
        await RegionService.updateRegion(id, region)
        await RegionService.updatePoint(pointUpper, upperRightDb?.pointId)
        await RegionService.updatePoint(pointBottom, bottomLeftDb?.pointId)

        regionDb = await RegionService.getOneRegion(id)
        boundingBoxDb = await RegionService.getOneBoundingBox(regionDb?.boundingBoxId)
        upperRightDb = await RegionService.getOnePoint(boundingBoxDb?.upperRightId)
        bottomLeftDb = await RegionService.getOnePoint(boundingBoxDb?.bottomLeftId)

        const regionJson: RegionJson = {
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
        return new Promise(resolve => {
            resolve(regionJson)
        })
    }
}