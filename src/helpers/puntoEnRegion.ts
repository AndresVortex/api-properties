//esta funcion valida si un punto esta en una region o pasa por la misma region
import  RegionService  from '../services/regionService';


export const puntoEnRegion = async (longitude?:number, latitude?:number) => {
  
  let adentro:boolean = false
  let sobre:boolean = false
  let nombreRegion:string = ""
  let regionId:number = 0

  if(!(longitude && latitude)) return 


  let todas = await RegionService.getAllRegions()

  
  if (todas.length >= 1) {

    let bboxFound

    let bottomLeftId, upperRightId
    let bottomLeftFound, upperRightFound

    for (let x = 0; x < todas.length; x++) {
      // bboxFound = await BoundingBox.findByPk(todas[x].boundingBoxId)
      bboxFound = await RegionService.getOneBoundingBox(todas[x].boundingBoxId)

      if (bboxFound) {
        bottomLeftId = bboxFound.bottomLeftId
        upperRightId = bboxFound.upperRightId

        // bottomLeftFound = await Points.findByPk(bottomLeftId)
        // upperRightFound = await Points.findByPk(upperRightId)
        bottomLeftFound = await RegionService.getOnePoint(bottomLeftId)
        upperRightFound = await RegionService.getOnePoint(upperRightId)

        if (bottomLeftFound && upperRightFound) {

          console.log("longitude:::", longitude, "latitude:::", latitude);

          console.log("upperRightFound.longitude:::", upperRightFound.longitude, "upperRightFound.latitude:::", upperRightFound.latitude);
          console.log("bottomLeftFound.longitude:::", bottomLeftFound.longitude, "bottomLeftFound.latitude:::", bottomLeftFound.latitude);

          if (longitude > bottomLeftFound.longitude && longitude < upperRightFound.longitude && latitude > bottomLeftFound.latitude && latitude < upperRightFound.latitude) {
            adentro = true
            nombreRegion = todas[x].name
            regionId = todas[x].regionId
          }

          if (longitude >= bottomLeftFound.longitude && longitude <= upperRightFound.longitude && latitude >= bottomLeftFound.latitude && latitude <= upperRightFound.latitude) {
            if (adentro == false) {
              sobre = true
              adentro = true
              nombreRegion = todas[x].name
              regionId = todas[x].regionId
            }
          }

        }

      }

    }

  }

  return {adentro, sobre, nombreRegion, regionId}

}

