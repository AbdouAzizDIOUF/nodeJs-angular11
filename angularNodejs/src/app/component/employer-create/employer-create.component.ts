import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import {Employer} from '../../modeles/employer';

@Component({
  selector: 'app-employer-create',
  templateUrl: './employer-create.component.html',
  styleUrls: ['./employer-create.component.css']
})
export class EmployerCreateComponent implements OnInit {

  public employer: Employer = new Employer();
  registerForm: any;
  submitted = false;

  constructor(private router:Router, private employerService:EmployerServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = FormGroup;
    this.valideForm();
  }


  onCreateEmployer() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.valid){
      this.submitted = false;
      this.employerService.onCreateEmployer(this.employer).subscribe(data => {
        return this.router.navigate(['/']);
      }, error =>{
        console.log(error);
      })
      this.employer = new Employer();
    }
  }

  valideForm(){
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required], //name: ['', [Validators.required, Validators.minLength(10)]],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    });
  }

  get f() { return this.registerForm.controls; }
}
