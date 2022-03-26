import { Boundingbox } from '../../../interface/BoundingBox';
export class RegionModel {
    regionId?: number
    name: string
    boundingBoxId?: number

    constructor() {
        this.regionId = 0
        this.name = ''
        // this.boundingBoxId = {upperRight:{latitude: 0, longitude: 0}, bottomLeft: {latitude: 0, longitude:0}}
        this.boundingBoxId = 0

    }

}

export interface RegionJson {
    id?: number,
    name?: string,
    boundingBox?: Boundingbox
}