import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //private heroesUrl = 'https://reqres.in/api/user';  // URL to web api
  //  private Url = 'http://localhost:4000/api/usuario';  // URL to web api
  private Url = 'http://localhost:4000/api/usuario';

  constructor(private http: HttpClient) { }

  obtenerByIdUsuario(num): any {
    return this.http.get<any>(this.Url+"/"+num)
      .pipe(
        tap(_ => this.log('fetched UsuarioService')),
        catchError(this.handleError<object[]>('getUsuario', []))
      );
  }
  
  // obtenerByIdUsuario(num): Observable<object[]> {
  //   return this.http.get<object[]>(this.Url+"/"+num)
  //     .pipe(
  //       tap(_ => this.log('fetched UsuarioService')),
  //       catchError(this.handleError<object[]>('getUsuario', []))
  //     );
  // }

  obtenerUsuarios(): Observable<object[]> {
    return this.http.get<object[]>(this.Url)
      .pipe(
        tap(_ => this.log('fetched UsuarioService')),
        catchError(this.handleError<object[]>('getUsuario', []))
      );
  }

  //   this.http.post<any>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
  //     this.postId = data.id;
  // })post

   create(usuario): any  {
    console.log("services usuario ", usuario);
    return  this.http.post(this.Url, usuario);
     //return  this.http.post(this.Url, { Nombre: 'Juan Carlos', Estado: 1, Clave: 'Clave', UsuarioRegistro: 'system' });

  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message: string) {
    console.log(`UsuarioService: ${message}`);

  }

}
