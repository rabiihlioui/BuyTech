import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { ErrorHandlerService } from './error-handler.service';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:8080/clients";

  constructor(
    private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) { }

  getClientsList(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.baseURL}`);
  }

  createClient(client: Client): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, client);
  }

  getClientById(id: number): Observable<Client>{
    return this.httpClient.get<Client>(`${this.baseURL}/${id}`);
  }

  updateClient(id: number, client: Client): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${id}`, client);
  }

  deleteClient(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getClientByEmail(email: string): Observable<any>{
    const params = new HttpParams().append('email', email);
    return this.httpClient.get<Client>(`${this.baseURL}/clientByEmail`, { params }).pipe(
      catchError(this.errorHandlerService.handleError)
    );
  }

}
