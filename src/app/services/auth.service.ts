import { Injectable } from '@angular/core';
import { config } from '../../config/config' ;

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAppServer:string;
  private passwordAppServer:string;
  private loggedIn:boolean= false;

  private authHeader:HttpHeaders;

  private URL_LOGIN:string;
  private URL_LOGOUT:string;


  constructor(private http:HttpClient) { 
  
    this.userAppServer = config['UTENTE-APP-SERVER'];
    this.passwordAppServer = config['PASSWORD-APP-SERVER'];
    this.URL_LOGIN = config['URL-LOGIN-APP-SERVER'];
    this.URL_LOGOUT = config['URL-LOGOUT-APP-SERVER'];
  }

  logInServer(){
    var ute = {utente: this.userAppServer, password: this.passwordAppServer};
  
    return this.http.post(this.URL_LOGIN, ute);     
  };

  logOutServer(){

    return this.http.delete(this.URL_LOGOUT,{headers: this.getAuthHeader()});

  };

  logInClient(token:string){
    window.localStorage.setItem('x-auth', token);
  };

  logOutClient(){
    window.localStorage.removeItem('x-auth');
  };  

  getAuthHeader():HttpHeaders{
    return this.authHeader = new HttpHeaders({'x-auth':localStorage.getItem('x-auth')});
  };
}
