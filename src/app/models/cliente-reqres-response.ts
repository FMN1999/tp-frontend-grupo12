export interface ClienteReqResResponse {
    _id:      ID;
    apellido: string;
    email:    string;
    nombre:   string;
    __v:      number;
}

export interface ID {
    $oid: string;
}