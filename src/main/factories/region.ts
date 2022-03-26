import { CreateRegion } from '../../controllers/region/createRegion';
import { CreateRegionDb } from '../../application/useCases/regions/createRegion/db-createRegion';
import { GetOneRegionDb } from '../../application/useCases/regions/getOneRegion/db-getOneRegion';
import { GetOneRegion } from '../../controllers/region/getOneRegion';
import { UpdateRegion } from '../../controllers/region/updateRegion';
import { UpdateRegionDb } from '../../application/useCases/regions/updateRegion/db-updateRegion';

export const makeCreateRegionController = (): CreateRegion => {
    
    const createRegionDb = new CreateRegionDb()
    const createRegion = new CreateRegion(createRegionDb)
    return createRegion
}

export const makeGetOneRegionController = (): GetOneRegion => {
    
    const getOneRegionDb = new GetOneRegionDb()
    const getOneRegion = new GetOneRegion(getOneRegionDb)
    return getOneRegion
}

export const makeUpdateRegionController = (): UpdateRegion => {
    const updateRegionDb = new UpdateRegionDb()
    const updateRegion = new UpdateRegion(updateRegionDb)
    return updateRegion
}
