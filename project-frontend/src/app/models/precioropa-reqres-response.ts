export interface PrecioRopaReqResResponse {
    _id:        ID;
    importe:    number;
    fechaDesde: string;
}

export interface ID {
    $oid: string;
}
