import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted: boolean = false;
  listflag: boolean = false;
  signupflag: boolean = false;
  constructor(private formbuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  login() {
    console.log("login");
    this.isSubmitted = false;
    if (this.loginForm.invalid)
      return;
    else {
      console.log("logged");
      this.http.post('https://reqres.in/api/login', this.loginForm.value).subscribe((response: any) => {
        console.log("response", response);
        if (response == "" && response == null && response == undefined) {
          return;
        }
        else {          
          this.listflag = true;
        }
      });

    }
  }
  register() {
    this.signupflag = true;
  }
  get formControls() { return this.loginForm.controls; }

}
