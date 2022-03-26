
export class ServerError extends Error {
    // public name:string
    // public 
    constructor(stack?: string) {
        super(`error internal the server`)
        this.name = `error internal the server`
        this.stack = stack
    }

}