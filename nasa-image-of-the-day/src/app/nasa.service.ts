import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiUrl='https://api.nasa.gov/planetary/apod';
  private apiKey='CZwcFpqzmUuyR4vbepi3qmbYlMiobubPRPwziZM0';
  
  constructor(private http: HttpClient) { 
    
  }
  getImageOfTheDay():Observable<any>{
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}`) //comillas invertidas
  }
  getImageByDate(date:Date):Observable<any>{
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&date=${date}`)
  }
}
