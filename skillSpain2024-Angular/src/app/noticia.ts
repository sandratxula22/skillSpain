export interface Noticia {
    tipo : string,
    titulo:string;
    contenido:string;
    fecha_creacion: Date |null;
    pueblo_id:number;
}
