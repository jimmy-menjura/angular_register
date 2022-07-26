import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http';
import {registro} from '../modelo/registroModel';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  myApUrl = 'http://127.0.0.1:8000/';
  myApiUrl = 'api/create';
  myUrl = 'http://127.0.0.1:8000/';
  myApiiUrl = 'api/registro';
  list: registro[];
  constructor( private http : HttpClient) { }
  guardarData(regis: registro):Observable<registro>  
  {
    return this.http.post<registro>(this.myApUrl + this.myApiUrl, regis);
  }
  obtenerData(): Observable<HttpResponse<registro[]>>  {
    return this.http.get<registro[]>(this.myUrl + this.myApiiUrl,{observe: 'response'});
    
  }
}
