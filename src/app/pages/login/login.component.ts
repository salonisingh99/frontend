import { Component, OnInit} from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGaurdService } from 'src/app/auth-gaurd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder, private route:Router, private auth:AuthGaurdService) {}


  user=this.fb.group({
  email:['',Validators.required],
  password:['',Validators.required],
  role:['',Validators.required]
  })

  OnSubmit(){
    if(this.user.valid){
      this.auth.LoginUser({
        email:this.user.value.email,
        password:this.user.value.password,
        role:this.user.value.role
      }).subscribe((res:any)=>{
        if(res.status == 200){
          console.log("login")
        }
      })
    }

  }
    
  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
