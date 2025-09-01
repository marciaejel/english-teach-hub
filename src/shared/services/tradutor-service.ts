import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TradutorService {
  private API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor(private http: HttpClient) {}

  traduzir(palavra: string): Observable<any> {
    console.log(`Traduzindo palavra: ${palavra}`);
    return this.http.get(`${this.API_URL}${palavra}`);
  }
}
