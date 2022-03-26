
import { Boundingbox } from '../../../interface/BoundingBox';
import { RegionModel } from '../../models/region/regionModel';
import { PropertyModel } from '../../models/property/propertyModel';

export interface AddPropertyDb {

  title: string
  description: string
  // princingId?: number
  bedrooms: number
  bathrooms: number
  area: number
  pricingId?: number
  pointId?: number
  pricing?: {
    rentalPrice: number
    administrativeFee: number
  },
  location?: {
    latitude: number,
    longitude: number
  }
  // NOTE: Auto-generated

  propertyId?: number
  regions?: string[]
}


export interface AddProperty {
  add: (property: AddPropertyDb) => Promise<PropertyModel>
}