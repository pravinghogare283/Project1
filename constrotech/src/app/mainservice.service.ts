import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor(private http:HttpClient) { }

  //Get data from backend 
  getData(){
    return this.http.get('http://localhost:3000/api/getAllLabels/');
  }
}
