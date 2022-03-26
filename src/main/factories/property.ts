import { CreateProperties } from '../../controllers/properties/createProperties';
import { CreatePropertyDb } from '../../application/useCases/properties/createProperty/db-createProperty';
import { UpdateProperty } from '../../controllers/properties/updateProperty';
import { UpdatePropertyDb } from '../../application/useCases/properties/updateProperty/db-updateProperty';
import {  GetPropertiesDb } from '../../application/useCases/properties/getProperties/db-getProperties';
import { GetProperties } from '../../controllers/properties/getProperties';
import { GetPropertiesRegionsDb } from '../../application/useCases/properties/propertiesRegion/db-propertiesRegions';
import { PropertiesRegion } from '../../controllers/properties/propertiesRegions';


export const makeCreatePropertyController = (): CreateProperties => {
    
    const createPropertyDb = new CreatePropertyDb()
    const createProperty = new CreateProperties(createPropertyDb)
    return createProperty
}

export const makeUpdatePropertyController = (): UpdateProperty => {
    
    const updatePropertyDb = new UpdatePropertyDb()
    const updateProperty = new UpdateProperty(updatePropertyDb)
    return updateProperty
}

export const makeGetPropertiesController = ():GetProperties => {
    
    const getPropertiesDb = new GetPropertiesDb()
    const getProperties = new GetProperties(getPropertiesDb)
    return getProperties
}

export const makeGetPropertiesRegionController = (): PropertiesRegion => {
    const getPropertiesRegionDb = new GetPropertiesRegionsDb()
    const getPropertiesRegions = new PropertiesRegion(getPropertiesRegionDb)
    return getPropertiesRegions
}