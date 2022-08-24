/* export interface TemporadaReqResResponse {
    _id:        ID;
    detalle:    string;
    fechaDesde: string;
    fechaHasta: string;
    __v:        number;
}

export interface ID {
    $oid: string;
}

*/

//Modelo creado para las entidades de temporada

export class Temporada{
    
    //Sintaxis simplificada, en la cual dentro del constructor declaramos e inicializamos los atributos.
    //Al poner 'public' se crea y se declara el atributo, como parte del atributo de nuestra clase.
    constructor(public detalle: string, public fechaDesde: string, public fechaHasta: string) {}
}

