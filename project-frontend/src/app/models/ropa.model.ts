//Modelo creado para las entidades de ropa

export class Ropa{
    
    //Sintaxis simplificada, en la cual dentro del constructor declaramos e inicializamos los atributos.
    //Al poner 'public' se crea y se declara el atributo, como parte del atributo de nuestra clase.
    constructor(public marca: string, public categoria: string, public talle: string, 
                public detalle: string, public tipoRopa: string, 
                public temporada: string, public precioRopa: string, public _id?: string) {}


    
}