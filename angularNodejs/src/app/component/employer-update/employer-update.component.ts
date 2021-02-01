import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import {Employer} from '../../modeles/employer';
import {EmployerServiceService} from '../../services/employer-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employer-update',
  templateUrl: './employer-update.component.html',
  styleUrls: ['./employer-update.component.css']
})
export class EmployerUpdateComponent implements OnInit {

  public employer: Employer = new Employer();
  registerForm: any;
  submitted = false;

  constructor(private route: ActivatedRoute, private employerService: EmployerServiceService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      let id = atob(this.route.snapshot.params.id);
      this.onGetEmployer(id);
      this.registerForm = FormGroup;
      this.valideForm();
  }

  onGetEmployer(id:any) {
    this.employerService.onGetEmplyerById(id).subscribe(data =>{
      // @ts-ignore
      this.employer = data;
      console.log(data);
    }, error=>{
      console.log(error)
    });
  }


  onUpdateEmployer() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }else{
      this.submitted = false;
      this.employerService.onUpdateEmployer(this.employer).subscribe(data => {
        return this.router.navigate(['/']);
      }, error => {
        console.log(error)
      })
      this.employer = new Employer();
    }
  }

  valideForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    });
  }

  get f() { return this.registerForm.controls; }

}
