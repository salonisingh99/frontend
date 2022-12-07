import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router'; 


@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  private login="http://localhost:3000/login"

  constructor(private http:HttpClient,private route:Router) { }


  LoginUser(user:any){
    return this.http.post(this.login,user)

  }
}
