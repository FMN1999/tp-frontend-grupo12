export interface TemporadaReqResResponse {
    _id:        ID;
    detalle:    string;
    fechaDesde: string;
    fechaHasta: string;
    __v:        number;
}

export interface ID {
    $oid: string;
}