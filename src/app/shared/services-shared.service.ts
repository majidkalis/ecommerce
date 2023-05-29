import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class ServicesSharedService {
  public httpHeaders = new HttpHeaders().set('Content-Type','application/json')
  public image_Url ="http://localhost3000/upload"

  constructor(private http:HttpClient) { }
  imageUrl(formDate:any){
    return this.http.post(this.image_Url,formDate)
  }
}
