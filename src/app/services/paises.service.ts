import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  urlAPI = 'https://restcountries.com/v2/lang/es';

  constructor(private http:HttpClient) { }

  getPais():Observable<any>{
    return this.http.get(this.urlAPI);
  }
}
