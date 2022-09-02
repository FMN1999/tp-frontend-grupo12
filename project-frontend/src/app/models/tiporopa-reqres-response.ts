export interface TipoRopaReqResResponse {
    _id:     ID;
    detalle: string;
    __v:        number;
}

export interface ID {
    $oid: string;
}