import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private apiUrl = 'https://mocki.io/v1/b4544a37-0765-405f-baf6-6675845d5a0e';

  constructor(private http: HttpClient) {}

  getTournamentData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
