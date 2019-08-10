import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formbuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.signupForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  listflag: boolean = false;
  register() {
    this.isSubmitted = true;
    if (this.signupForm.invalid)
      return;
    else {
      this.http.post('https://reqres.in/api/register/', this.signupForm.value).subscribe((response: any) => {
      });
      this.listflag = true;
    }

  }
}
