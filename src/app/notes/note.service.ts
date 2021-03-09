import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap} from'rxjs/operators';
import { INote } from './note';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

 
  private noteUrl = "https://60456662c0194f00170bcc03.mockapi.io/abcis/todos";
 

  getNotes(): Observable<INote[]> {
    return this.http.get<INote[]>(this.noteUrl)
    .pipe(
        tap(data => console.log('All: '+ JSON.stringify(data))),
        catchError(this.handleError)
    );  
  } 

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
        errorMessage =`An error occurred :${err.error.message}`
      }
        else{
          errorMessage = `Server returned code: ${err.status} ,error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
    
}

