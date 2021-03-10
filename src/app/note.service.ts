import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Note } from './note';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const noteUrl = "https://60456662c0194f00170bcc03.mockapi.io/abcis/todos";

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  constructor(private http: HttpClient) { }

  // All To Do list data
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(noteUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }


  // Error Case
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getNote(id: number): Observable<Note> {
    const url = `${noteUrl}/${id}`;
    return this.http.get<Note>(url).pipe(
      tap(_ => console.log(`fetched Todo id=${id}`)),
      catchError(this.handleError<Note>(`getTodo id=${id}`))
    );
  }

  updateNote(id: number, note): Observable<any> {
    const url = `${noteUrl}/${id}`;
    return this.http.put(url, note, httpOptions).pipe(
      tap(_ => console.log(`updated note id=${id}`)),
      catchError(this.handleError<any>('updateNote'))
    );
  }
}