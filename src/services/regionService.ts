import { RegionModel } from '../domain/models/region/regionModel';
import regionRepository from '../domain/repositories/regionRepository'
import pointRepository from '../domain/repositories/pointRepository'
import boundingBoxRepository from '../domain/repositories/boundingBoxRepository'
import { BoundingBox, Points } from "../domain";


import { Regions } from '../domain/modelsVO/Regions';
import { PointModel } from '../domain/models/region/pointModel';
import { BoundingBoxModel } from '../domain/models/region/boundingBoxModel';
import { SearchRegionDb } from '../domain/useCase/region/searchRegion';
import { EditRegionDb } from '../domain/useCase/region/editRegion';
import { Boundingbox } from '../interface/BoundingBox';
import { EditPointDb } from '../domain/useCase/region/editPoint';
export class RegionService {


    async create(region: RegionModel) {
        return regionRepository.create(region)
    }

    async createPoint(point: PointModel){
        return pointRepository.create(point)
    }
    
   async createBoundingBox(boundingBox: BoundingBoxModel) {
       return boundingBoxRepository.create(boundingBox)
   }
   async getAllRegions(){
     return regionRepository.findAll()
   }
   async validateName(name: string){
    return regionRepository.findOne({
      where: {
        name
      }
    })
   }
   async getOneRegion(id: number){
       return regionRepository.findOne({
        where: {
            regionId: id
          },
          
       })
   }
   async getOneBoundingBox(id?: number){
     return boundingBoxRepository.findOne({where: {
       boundingBoxId: id
     }})
   }
   async getOnePoint(id?: number) {
     return pointRepository.findByPk(id)
   }

   async updateRegion(id: number, region: EditRegionDb ){
     return regionRepository.update(region, {
       where: {
         regionId: id
       }
     })
   }
   async updatePoint(point:EditPointDb, id?:number,  ){
     return pointRepository.update(point, {
       where:{
         pointId: id
       }
     })
   }


   
}


export default new RegionService()