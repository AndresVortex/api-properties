import { Point } from "./Point";
import { Pricing } from "./Pricing";

export default interface Propertie {
    propertyId?: number,
    title: string,
    description: string,
    pricing: Pricing,
    point: Point,
    bedrooms: number,
    bathrooms: number,
    area: number
}