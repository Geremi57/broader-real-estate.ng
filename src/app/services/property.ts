import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Props } from '../models/property'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private apiUrl = "http://localhost:8080/api/properties"

  constructor(private http: HttpClient) {}

  getProperties(): Observable<Props[]> {
    return this.http.get<Props[]>(this.apiUrl)
  }

  getProperty(slug: string): Observable<Props> {
    return this.http.get<Props>(`${this.apiUrl}/${slug}`)
  }

}