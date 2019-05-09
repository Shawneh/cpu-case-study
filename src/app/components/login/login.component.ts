import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginForm: FormGroup;
isHidden: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.initForms();
    this.isHidden = true;
  }

  initForms() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log('Reached Login');
    this.authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value);
  }

  toggle() {
    this.isHidden = this.isHidden ? false : true;
  }

}
