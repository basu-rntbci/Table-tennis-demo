import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  postMethod(data: any){
    return this.http.post<any>('http://localhost:3000/matches/', data)
  }

}
