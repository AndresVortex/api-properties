


export class MissingFormalParameter extends Error {
    constructor (public name: string) {
      super(`Error In the Parameter: ${name}`)
      this.name = `Error In the Parameter: ${name}`
    }
}
export class ErrorTypeParameter extends Error {
  constructor (public name: string) {
    super(`Error In the Parameter: ${name}`)
    this.name = `Error In the Parameter: ${name}`
  }
}
export class MissingFormalParameterValidator extends Error {
  constructor (public error: any) {
    super(`Error In the Parameter: ${error}`)
    this.name = `Error In the Parameter: ${error}`
  }
}