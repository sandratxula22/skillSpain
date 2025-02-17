import { Pueblo } from "./pueblo";

export interface Usuarios {
    id: number,
    nombre: string,
    apellidos: string,
    rol: string,
    pueblo_id: number,
    created_at: Date,
    updated_at: Date,
    pueblo: Pueblo;
}
