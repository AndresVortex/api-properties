import { Response } from "express"

export const respuesta = (res: Response, resultado: any, status: number, exitoso: boolean, novedad: string | any | null, mensaje: string, codigo: number) => {
  return res.status(status || 200).json({
    exitoso: exitoso || true,
    codigo: codigo || 200,
    mensaje: mensaje || 'Proceso realizado Correctamente.',
    resultado: resultado || null,
    novedad: novedad || null,
    fecha: new Date()
  })

}


export const errorCliente = (res: Response, resultado: any, status: number, exitoso: boolean, novedad: string | any | null, mensaje: string, codigo: number) => {
  return res.status(status || 401).json({
    exitoso: exitoso || false,
    codigo: codigo || 401,
    mensaje: mensaje || 'Ha ocurrido algo inesperado',
    resultado: resultado || null,
    novedad: novedad || null,
    fecha: new Date()
  })
}
