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
