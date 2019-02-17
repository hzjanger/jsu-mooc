import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LoginService} from '../../service/login.service';
import {User} from '../../entity/user';
import {mergeResolvedReflectiveProviders} from '@angular/core/src/di/reflective_provider';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //tabs 选择打开当前的视图(登录视图和注册视图)
  selectedIndex = 0;
  //登录
  login: FormGroup;
  //注册
  register: FormGroup;

  loginUserName: '';
  verifyMessage: number;
  userName: '666';

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private fb: FormBuilder,
              private loginService: LoginService) {
  }

  ngOnInit() {
    this.selectedIndex = this.data.selectedIndex;
    this.login = this.fb.group({
      // user: [this.userName, Validators.compose([Validators.required, this.userValidator])],
      // password: ['', Validators.required]
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.register = this.fb.group({
      phone: ['', Validators.compose([Validators.required, this.userValidator])],
      password: ['', Validators.required],
      rePassword: ['', Validators.required]
    });
  }

  /**
   * 点击登录
   * @param {any} value
   * @param {any} valid
   * @param {Event} ev
   */
  loginClick({value, valid}, ev: Event) {
    ev.preventDefault();
    this.loginService.login(value.user, value.password)
      .subscribe(data => {
        if (data.rspCode === '0006000') {
          //将数据存储在浏览器本地
          localStorage.setItem('currentUser', JSON.stringify(data));
          //将存储在浏览器本地的数据取出来
          let currentUser = JSON.parse(localStorage.getItem('currentUser'));

          this.dialogRef.close({'result': true, 'type': '登录'});
        } else {
          console.log('登录失败');
        }
      });

  }

  registerClick({value, valid}, ev: Event) {
    console.log('点击登录');
    let user: User = new User();
    if (value.phone.indexOf('@')) {
      user.useremail = value.phone;
    } else {
      user.useremail = value.phone;
    }
    user.userpassword = value.password;
    this.loginService.register(user)
      .subscribe(data => {
        console.log(data);
      });
  }


  userValidator(control: FormControl): {[key: string]: any} {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    const pattern = /@/;
    if (myreg.test(control.value) || pattern.test(control.value)) {
      return null;
    }

    return {
      userNotValid: '账户输入有错'
    }

    // let valid = myreg.test(control.value);
    // var myreg1 = /{@}/;
    // var valid1 = myreg1.test(control.value);
    // if (valid) {
    //   return null;
    // }
    // return {
    //   mobile: '输入的手机号不合法'
    // }
  }

  /**
   * 自己定义的判读
   * @param {FormControl} c
   * @returns {{[p: string]: any}}
   */
  validate(c: FormControl): {[key: string]: any} {
    if (!c.value) {
      return null;
    }

    const pattern = /^wang+/;
    if (pattern.test(c.value)) {
      return null;
    }
    return {
      userNotValid: '账户输入有错'
    }
  }

  /**
   * 得到错误信息
   * @returns {string}
   */
  getErrorMessage() {
    return this.login.controls['user'].hasError('required') ? '输入不能为空' :
      this.login.controls['user'].hasError('email') ? '清输入正确的邮箱' :
        this.login.controls['user'].hasError('userNotValid') ? '输入的格式不正确' :
        '';
  }

  /**
   * 获取验证吗
   */
  getVerification({value, valid}, ev: Event) {
    // console.log(this.register.value.phone);
    ev.preventDefault();
    if (valid) {
      this.loginService.sendEmail(this.register.value.phone)
        .subscribe(data => {
          this.verifyMessage = data;
        });
    }
  }

  closeDialog(): void {
    console.log('点击登录');
    this.dialogRef.close(this.login.value);
  }
}
