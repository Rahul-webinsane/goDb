import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatasServiceService } from '../datas-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  loginList: any = [];
  submitted: any;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private router: Router, private loginService: DatasServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailid: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
   });

    this.loginService.getLoginList().subscribe((data) => {
    this.loginList = data;
    console.log("Login collection", this.loginList);
  });
  }

  get loginValue() {
    return this.loginForm.controls;
  }

  onSubmit() {

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        console.log("email id   ", this.loginValue.emailid.value);
        console.log("email id   ", this.loginValue.password.value);


        if (this.loginValue.emailid.value != null && this.loginValue.password.value != null){

          for (let i = 0; i <= this.loginList.length; i++){

            // tslint:disable-next-line:no-string-literal
            if (this.loginValue.emailid.value  === this.loginList[i]['emailId'] && this.loginValue.password.value === this.loginList[i]['password']){
              alert("Login successs ");
              this.router.navigateByUrl('/userlist');
              break;
            }else{
              alert("Login Failed emaild or password incorrect ");
            }
          }
        }
    }
  }
