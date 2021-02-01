import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployerServiceService} from '../../services/employer-service.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-employer-liste',
  templateUrl: './employer-liste.component.html',
  styleUrls: ['./employer-liste.component.css']
})
export class EmployerListeComponent implements OnInit {
  /*[x: string]: any;*/

  public employees: any = [];
  public countEmployer: number = 0;
  private deleteId: any;
  //private modalService!: NgbModal


  constructor(private employerService:EmployerServiceService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getListeEmployees();
  }


  private getListeEmployees() {
    this.employerService.onGetAllEmployes().subscribe(data => {
      console.log(data)
      this.employees = data;
    }, error =>{
      console.log(error);
    })
  }

  openDelete(targetModal: any, employer: any) {
    this.deleteId = employer;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDeleteEmployer() {
    this.employerService.onRemoveEmploye(this.deleteId).subscribe(data=>{
      this.getListeEmployees();
      this.modalService.dismissAll();
    });
  }


  btoa(_id: any) {
    return btoa(_id);
  }

}
