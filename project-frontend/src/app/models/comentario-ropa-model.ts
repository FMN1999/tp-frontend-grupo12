import {mongoose} from "../../../../../tp-backend-grupo-12/node_modules/mongoose/lib";

export class ComentarioRopa{
    constructor(public detalle: string, public idRopa: mongoose.Schema.Types.ObjectId, public nombreUsuario: string, 
                public apellidoUsuario: string, public fecha: string) {}
}