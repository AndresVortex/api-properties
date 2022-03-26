import { Boundingbox } from "./BoundingBox";

export default interface Region {
    regionId?: number,
    name: string,
    boundingBox: Boundingbox
}