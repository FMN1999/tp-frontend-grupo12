/*export interface PrecioRopaReqResResponse {
    _id:        ID;
    importe:    number;
    fechaDesde: string;
}

export interface ID {
    $oid: string;
}
*/


export class PrecioRopa{
    
    //Sintaxis simplificada, en la cual dentro del constructor declaramos e inicializamos los atributos.
    //Al poner 'public' se crea y se declara el atributo, como parte del atributo de nuestra clase.
    constructor(public importe: number, public fechaDesde: string) {}
}


