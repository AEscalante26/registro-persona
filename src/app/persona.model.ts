export class Persona {
  cedula: number;
  nombre: string;
  apellido: string;
  fecha: Date;

  constructor(cedula: number, nombre: string, apellido: string, fecha: Date) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha = fecha;
  }
}
