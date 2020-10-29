export class Reserva {
    id: Number;
    usuarioId: Number;
    canchaId: Number;
    valor: Number;
    fecha: Date;
    fechaCreacion: Date;

    constructor(id: Number,
        usuarioId: Number,
        canchaId: Number,
        valor: Number,
        fecha: Date,
        fechaCreacion: Date) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.canchaId = canchaId;
        this.valor = valor;
        this.fecha = fecha;
        this.fechaCreacion = fechaCreacion;
    }
}
