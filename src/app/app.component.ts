import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    //this.ngxService.start();

    this.page ='report';
  }
  disInput: any

  constructor(private ngxService: NgxUiLoaderService,
    private toastr: ToastrService, private router: Router) { }

  SPINNER = SPINNER;

  btns='';
  page=''

  shouldEdit: any
  back(){
    this.page ='report'
  }

  books:any
  detail(id: number){
    this.ngxService.start();
   /////////////////////////
    this.page ='detail';
    this.disInput = true;
    this.btns='edit';
  }


  edit(){
    this.disInput = false;
    this.shouldEdit = true;
    this.btns='save';
  }
}
