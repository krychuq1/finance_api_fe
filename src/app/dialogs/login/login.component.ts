import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ILogin} from './ILogin';
import {LoginDto} from './LoginDto';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginModel = new LoginDto();
  public loginForm: FormGroup;
  public loading: boolean;
  constructor(public dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data,
              private userService: UserService, private toastr: ToastrService) {
    this.loading = false;
    this.createFormControl();
  }

  ngOnInit() {
  }
  async onSubmit() {
    this.loading = true;
    this.loginModel.login = this.loginForm.value.loginControl;
    this.loginModel.password = this.loginForm.value.passwordControl;
    try {
      const token: any = await this.userService.login(this.loginModel);
      localStorage.setItem('token', token.accessToken);
      this.toastr.success('Login success');
      this.close();
    }catch (e) {
      this.toastr.error('Login or password invalid');
      this.loading = false;
      console.log(e);
    }
  }
  createFormControl() {
    this.loginForm = new FormGroup({
      loginControl: new FormControl('', [Validators.required, Validators.minLength(1)]),
      passwordControl: new FormControl('', [Validators.required, Validators.minLength(1)]),
    });
  }

  close() {
    this.dialogRef.close();
  }
}
