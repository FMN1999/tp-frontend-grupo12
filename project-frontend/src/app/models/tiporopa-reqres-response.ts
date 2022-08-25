/* export interface TipoRopaReqResResponse {
    _id:     ID;
    detalle: string;
    __v:        number;
}

export interface ID {
    $oid: string;
}

*/

export class TipoRopa{
    
    //Sintaxis simplificada, en la cual dentro del constructor declaramos e inicializamos los atributos.
    //Al poner 'public' se crea y se declara el atributo, como parte del atributo de nuestra clase.
    constructor(public detalle: string) {}
}
