import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class ApiServicesService {

  baseUrl: string = environment.nodeUrl

  constructor(private http: HttpClient) { }

  genericPost(endpoint: any, payload: any) {
    return this.http.post(`${this.baseUrl}${endpoint}`, payload)
  }

}
