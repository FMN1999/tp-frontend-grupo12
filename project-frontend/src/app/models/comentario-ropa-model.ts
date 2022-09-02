import mongoose from "mongoose";

export class ComentarioRopa{
    constructor(public detalle: string, public idRopa: mongoose.Schema.Types.ObjectId, public nombreUsuario: string, 
                public apellidoUsuario: string, public fecha: string) {}
}