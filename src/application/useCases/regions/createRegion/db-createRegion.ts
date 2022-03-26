
import { AddRegion, AddRegionDb } from '../../../../domain/useCase/region/addRegion';
import RegionService  from '../../../../services/regionService';





export class CreateRegionDb implements AddRegion {

    
    async add(region: AddRegionDb): Promise<AddRegionDb >{
        console.log({region})
        const maxLongitude = region.boundingBox?.upperRight.longitude
        const maxLatitude = region.boundingBox?.upperRight.latitude
        const minLongitude = region.boundingBox?.bottomLeft.longitude
        const minLatitude = region.boundingBox?.bottomLeft.latitude
        const name = region.name
        if (!(minLatitude && minLongitude && maxLatitude && maxLongitude)) {
            return new Promise(resolve => {}) 
        }
        try {

            const existsName = await RegionService.validateName(name)

            if(existsName) return new Promise((resolve, reject) => reject('el nombre existe en la DB') )
            const bottomLeft = await RegionService.createPoint({latitude: minLatitude, longitude: minLongitude})
            
            const upperRight = await RegionService.createPoint({latitude: maxLatitude, longitude: maxLongitude})
    
            const boundingBox = await RegionService.createBoundingBox({bottomLeftId: bottomLeft.pointId , upperRightId: upperRight.pointId})
            
            const regionDB = await RegionService.create({name, boundingBoxId: boundingBox.boundingBoxId})

            console.log({regionDB})
            return new Promise(resolve => {
                
                return resolve(regionDB)
            })
            
        } catch (error) {
            console.log(error)
            return new Error('Error al guardar en la base de datos, consulte con el administrador') 
        }
    }
}

// export class CreateRegion implements Controller {

    

//     // async run(data: CreateRegionDTO){
//     //     const regionExists = await this.regionRepository.getById(data.id)
//     //     if(regionExists){
//     //         throw new  Error('La region existe en la db')
//     //     }
//     //     const region = new Region(data)
//     //     await this.regionRepository.saveRegion(region)
        
//     // }
//     async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
//         try {
//             const requiredProperties = ['name', 'model', 'year', 'color']
//             for (const props of requiredProperties) {
//               if (!httpRequest.body[props]) {
//                 return {
//                   statusCode: 400,
//                   body: new MissingFormalParameter(`${props}`)
//                 }
//               }
//             }
//             const data = httpRequest.body
//             success(data)
//         } catch (error: any) {
//             serverError(error)
//         }
//       }


// }
// export const createRegion = async(req: Request, res: Response) => {

  
//     const {name, boundingBox} = req.body;
    
//     console.log({name, boundingBox})
//     const region: Region = {name, boundingBox}
    
//     const validate = await validateName(name)
  
//     if (validate?.exitoso) {
//       if (validate.nameExists) {
//         errorCliente(res, null, 400, false, 'El nombre de la region ya existe', 'El nombre de la region no esta disponible', 400)
//       }
//     }
//     const regionDb = await saveRegionDb(region)
  
//     if(regionDb.exitoso){
  
//       respuesta( res, regionDb.resultado, 200, true, null, 'Proceso completado exitosamente', 200)
//     }else {
//       errorCliente(res, null, 400, regionDb.exitoso, regionDb.error, 'Algo salio mal', 400 )
//     }
   
    
    
  
//   } 
