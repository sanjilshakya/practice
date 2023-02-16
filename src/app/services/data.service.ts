import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, catchError, throwError } from 'rxjs';
// import { throwError } from 'rxjs/';

@Injectable()
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(map((response: any) => response),
        catchError(this.handleError))
  }

  create(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(map((response: any) => response),
        catchError(this.handleError))
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(map((response: any) => response),
        catchError(this.handleError))
  }

  delete(id: any) {
    return this.http.delete(this.url + '/' + id)
      .pipe(map((response: any) => response),
        catchError(this.handleError))
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(() => (new BadInput(error)));

    if (error.status === 404)
      return throwError(() => (new NotFoundError()));

    return throwError(() => (new AppError(error)));
  }
}
