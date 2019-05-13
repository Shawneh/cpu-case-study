import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginForm: FormGroup;
isHidden: boolean;
resetEmail: string;
state: string;

  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService,
              private resetSnackBar: MatSnackBar,
              public forgotDialog: MatDialog) { }

  ngOnInit() {
    this.initForms();
    this.isHidden = true;
    this.state = 'Show'
  }

  initForms() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value);
  }

  clearInput() {
    this.loginForm.reset();
  }

  forgotPassword(): void {
    const dialogRef = this.forgotDialog.open(DialogForgotPassword, {
      width: '512px',
      data: {resetEmail: this.resetEmail}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.resetEmail = result;
      this.resetSnackBar.open(`Reset Link sent to ${this.resetEmail}!`, 'Okay!', {
        duration: 5000
      });
    });
  }

  toggleCredentials() {
    this.isHidden = this.isHidden ? false : true;
    this.state = this.isHidden ? 'Show' : 'Hide';
  }

}

@Component({
  selector: 'dialog-forgot-password',
  templateUrl: 'dialog-forgot-password.html',
  styleUrls: ['./login.component.scss']
})
export class DialogForgotPassword {

  constructor(public dialogRef: MatDialogRef<DialogForgotPassword>,
              @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close({data: this.data.resetEmail});
  }

}