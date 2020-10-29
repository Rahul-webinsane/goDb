import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatasServiceService } from '../datas-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  // Post = { title: string, content: string };

  postDats: any = [{"emailId": "ss", "password": "ss"}];
  data: any;
  registerForm: FormGroup;
  submitted = false;
  phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  private readonly newProperty = '/assets/jsonDatas/loginDetails.json';

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private router: Router, private http: HttpClient, private logService: DatasServiceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      gender: ['', [Validators.required]],
      address: [null, [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
     });
  }

  get fval() {
    return this.registerForm.controls;
    }


  signup(){

    this.submitted = true;
    if (this.registerForm.invalid) {
    return;
    }
    this.logService.addPostDetails(this.postDats);
    alert('form fields are validated successfully!');
    this.router.navigateByUrl('/login');
  }



}
