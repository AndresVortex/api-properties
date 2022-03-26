import { Properties } from '../../modelsVO/Properties';
export interface SearchPropertyDb {
    
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

//   propertyId?: number
}


export interface SearchProperty {
    search: (bbox: string, page: number, pageSize: number) => Promise<Properties[] | null>
}