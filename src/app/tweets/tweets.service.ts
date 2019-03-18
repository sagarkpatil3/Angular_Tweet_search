import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  private apiUrl = 'http://192.168.123.1:3000/tweets';
  constructor(private http: HttpClient) { }

  getTweets(query: any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json'});
    return this.http.post<any>(this.apiUrl, query, {headers: headers});
  }
}
