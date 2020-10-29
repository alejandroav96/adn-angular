export class Usuario {
    id: Number;
    nombre: String;
    fechaCreacion: Date;

    constructor(id: Number, nombre: String) {
        this.id = id;
        this.nombre = nombre;
    }
}