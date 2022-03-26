import { Boundingbox } from "./BoundingBox"

export class Region {
    public id: number
    public name: string
    public boundingBox: Boundingbox
    constructor(props: Region){
        this.id = props.id,
        this.name = props.name,
        this.boundingBox = props.boundingBox
    }
}