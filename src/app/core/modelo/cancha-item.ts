export class Cancha {
    id: Number;
    nombre: String;
    estado: boolean;
    valor: Number;
    fechaCreacion: Date;

    constructor(id: Number, nombre: String, estado: boolean, valor: Number) {
        this.id = id;
        this.nombre = nombre;
        this.estado = estado;
        this.valor = valor;
    }
}