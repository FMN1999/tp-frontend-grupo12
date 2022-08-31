/* export interface ClienteReqResResponse {
    _id:      ID;
    apellido: string;
    email:    string;
    nombre:   string;
    __v:      number;
}

export interface ID {
    $oid: string;
}
*/

export class Cliente{
    
    //Sintaxis simplificada, en la cual dentro del constructor declaramos e inicializamos los atributos.
    //Al poner 'public' se crea y se declara el atributo, como parte del atributo de nuestra clase.
    constructor(public apellido: string, public email: string, public nombre: string) {}
}

