import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';



@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(
    private httpClient: HttpClient,
    private errorHandler: ErrorHandlerService
  )
  { }


  register(uName: string, pWord: string): Observable<any>{
    return this.httpClient.post(
      'http://localhost:8001/register',
      {username: uName, password: pWord}
    ).pipe(catchError(this.errorHandler.handleError));
  }

  login(uName: string, pWord: string): Observable<any>{
    return this.httpClient.post(
      'Login-env.eba-qckyzwbx.ap-southeast-2.elasticbeanstalk.com/login',
      {username: uName, password: pWord}
    ).pipe(catchError(this.errorHandler.handleError));
  }

  findUser(name: string): Observable<any>{
    console.log(name);
    return this.httpClient.get('http://localhost:8003/retrieve-users/' + 'Jord').pipe(catchError(this.errorHandler.handleError));
  }
}
