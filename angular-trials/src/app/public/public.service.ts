import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http
      .get('https://thronesapi.com/api/v2/Characters')
      .pipe(catchError(this.handleError));
  }

  getContinents(): Observable<any> {
    return this.http
      .get('https://thronesapi.com/api/v2/Continents')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    console.log(error);
    const msg = `'Error status code' + error.status + 'status' + error.statusText +`;
    return throwError(() => msg);
  }
}
