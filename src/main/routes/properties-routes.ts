import {Request, Response, Router} from 'express'
import { adapterRoute } from '../adapters/express-adapter';
import { makeCreatePropertyController, makeUpdatePropertyController, makeGetPropertiesController } from '../factories/property';

export default (router: Router): void => {
    

    //create properties
    router.post('/createProperty', adapterRoute(makeCreatePropertyController()));

    //update properties
    router.put('/updateProperty/:id', adapterRoute(makeUpdatePropertyController()))
    
    // get properties
    router.get('/properties', adapterRoute(makeGetPropertiesController()))

};