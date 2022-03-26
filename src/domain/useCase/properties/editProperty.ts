export interface EditPropertyDb {
    
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


export interface EditProperty {
    edit: (id:number, property: EditPropertyDb) => Promise<EditPropertyDb | null>
}