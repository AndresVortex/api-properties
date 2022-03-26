export class BoundingBoxModel {
    public boundingBoxId?: number
    public upperRightId: number 
    public bottomLeftId: number 
    constructor(){
        this.boundingBoxId = 0
        this.bottomLeftId = 0
        this.upperRightId = 0
    }
}