import { Router, Response, Request } from 'express'
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validate-fields';
import { adapterRoute } from '../adapters/express-adapter';

import { makeCreateRegionController, makeGetOneRegionController, makeUpdateRegionController } from '../factories/region';
import { makeGetPropertiesRegionController } from '../factories/property';

export default (router: Router): void => {
    // const regionController = container.get('controllers.RegionsController');
    // const regionController = new RegionController()

    //create regions
    router.post('/createRegion', [
      check('name', 'el name es obligatorio').not().isEmpty(),
      validateFields
    ], adapterRoute(makeCreateRegionController()));

    // get one regions
    router.get('/region/:id', adapterRoute(makeGetOneRegionController()));
    // return all properties in a specific regions
    router.get('/region/:id/properties', adapterRoute(makeGetPropertiesRegionController()) );
    //update a region
    router.put('/region/:id', adapterRoute(makeUpdateRegionController()));

    

};



// const router = Router()
// // const regionController = new RegionController()

// // get one regions
// router.get('/:id', regionById)

// //return all properties in a specific regions
// router.get('/:id/properties', () => { })

// //create regions
// router.post('/', [
//   check('name', 'El name es obligatorio').not().isEmpty(),
//   check('boundingBox', 'El boundingBox es obligatorio').not().isEmpty(),
//   validateFields
// ] ,createRegion)

// router.post('/createRegion', createRegion)

// //update a regions
// router.put('/updateRegion/:id', updateRegion)

// export default router;
