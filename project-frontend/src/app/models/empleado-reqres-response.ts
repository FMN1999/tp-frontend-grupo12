export interface EmpleadoReqResResponse {
    _id:      ID;
    legajo:   Legajo;
    nombre:   string;
    apellido: string;
}

export interface ID {
    $oid: string;
}

export interface Legajo {
    $numberLong: string;
}


export class Empleado{

    //Sintaxis simplificada, en la cual dentro del constructor declaramos e inicializamos los atributos.
    //Al poner 'public' se crea y se declara el atributo, como parte del atributo de nuestra clase.
    constructor(public legajo: string, public nombre: string, public apellido: string) {}
}
