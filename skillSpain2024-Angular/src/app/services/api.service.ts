import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000'; // Cambia esto según la URL base de tu backend

  constructor(private http: HttpClient) {}

  // Métodos generales
  getAll(endpoint: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${endpoint}`);
  }

  getOne(endpoint: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${endpoint}/${id}`);
  }

  create(endpoint: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${endpoint}`, data);
  }

  update(endpoint: string, id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${endpoint}/${id}`, data);
  }

  delete(endpoint: string, id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${endpoint}/${id}`);
  }

  // Métodos específicos por entidad
  getProvincias(): Observable<any[]> {
    return this.getAll('provincias');
  }

  getProvincia(id: number): Observable<any> {
    return this.getOne('provincias', id);
  }

  createProvincia(data: any): Observable<any> {
    return this.create('provincias', data);
  }

  updateProvincia(id: number, data: any): Observable<any> {
    return this.update('provincias', id, data);
  }

  deleteProvincia(id: number): Observable<any> {
    return this.delete('provincias', id);
  }

  // Métodos para Pueblos
  getPueblos(): Observable<any[]> {
    return this.getAll('pueblos');
  }

  getPueblo(id: number): Observable<any> {
    return this.getOne('pueblos', id);
  }

  createPueblo(data: any): Observable<any> {
    return this.create('pueblos', data);
  }

  updatePueblo(id: number, data: any): Observable<any> {
    return this.update('pueblos', id, data);
  }

  deletePueblo(id: number): Observable<any> {
    return this.delete('pueblos', id);
  }

  // Métodos para Usuarios
  getUsuarios(): Observable<any[]> {
    return this.getAll('usuarios');
  }

  getUsuario(id: number): Observable<any> {
    return this.getOne('usuarios', id);
  }

  createUsuario(data: any): Observable<any> {
    return this.create('usuarios', data);
  }

  updateUsuario(id: number, data: any): Observable<any> {
    return this.update('usuarios', id, data);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.delete('usuarios', id);
  }

  // Métodos para Eventos
  getEventos(): Observable<any[]> {
    return this.getAll('eventos');
  }

  getEvento(id: number): Observable<any> {
    return this.getOne('eventos', id);
  }

  createEvento(data: any, token: string): Observable<any> {
    return this.create('eventos', data);
  }

  updateEvento(id: number, data: any): Observable<any> {
    return this.update('eventos', id, data);
  }

  deleteEvento(id: number): Observable<any> {
    return this.delete('eventos', id);
  }

  // Métodos para Bailes
  getBailes(): Observable<any[]> {
    return this.getAll('bailes');
  }

  getBaile(id: number): Observable<any> {
    return this.getOne('bailes', id);
  }

  createBaile(data: any): Observable<any> {
    return this.create('bailes', data);
  }

  updateBaile(id: number, data: any): Observable<any> {
    return this.update('bailes', id, data);
  }

  deleteBaile(id: number): Observable<any> {
    return this.delete('bailes', id);
  }

  // Métodos para Inscripciones
  getInscripciones(): Observable<any[]> {
    return this.getAll('inscripciones');
  }

  getInscripcion(id: number): Observable<any> {
    return this.getOne('inscripciones', id);
  }

  createInscripcion(data: any): Observable<any> {
    return this.create('inscripciones', data);
  }

  updateInscripcion(id: number, data: any): Observable<any> {
    return this.update('inscripciones', id, data);
  }

  deleteInscripcion(id: number): Observable<any> {
    return this.delete('inscripciones', id);
  }

  // Métodos para Noticias
  getNoticias(): Observable<any[]> {
    return this.getAll('noticias');
  }

  getNoticia(id: number): Observable<any> {
    return this.getOne('noticias', id);
  }

  createNoticia(data: any): Observable<any> {
    return this.create('noticias', data);
  }

  updateNoticia(id: number, data: any): Observable<any> {
    return this.update('noticias', id, data);
  }

  deleteNoticia(id: number): Observable<any> {
    return this.delete('noticias', id);
  }

  //logout
  logout() {
    localStorage.removeItem('session');
    localStorage.removeItem('id');
  }
}
