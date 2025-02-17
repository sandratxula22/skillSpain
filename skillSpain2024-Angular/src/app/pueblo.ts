export interface Pueblo {
    id: number,
    nombre: string,
    provincia_id: number,
    num_vecinos_censados: number,
    num_personas_fiestas: number,
    num_personas_verano: number,
    created_at: Date,
    updated_at: Date,
    alcalde_id: number
}
