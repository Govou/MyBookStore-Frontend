import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { finalize, Observable } from 'rxjs';
import { BookDetails, ResponseDaum } from './models/book-details';
import { CreateBook, Publication } from './models/create-book';
import { BookStoreService } from './services/book-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  books: ResponseDaum[] = [];
  SPINNER = SPINNER;

  publishers:any;
  authors: any;

  years: number[] = [];
  currentYear: any;

  title:any = '';
  author:any;
  publish:any;
  yearr: any;
  edition: any;

  itemDelete: any;
  itemUpdate: any;

  updateEdition: any;
  updateYear: any;

  ngOnInit(): void {
    this.ngxService.start();
   this.bookService.getBooks().subscribe(res => {
      if(res.responseCode == "00"){
        this.toastr.success("records retrieved successfully");
        this.ngxService.stop();
        this.books = res.responseData;
      }
      else{
        this.toastr.success("no records found");
        this.ngxService.stop();
      }
   }, (err: any) => {
    this.ngxService.stop();
    this.toastr.error("an error has occured");
   })
  }

  constructor(private ngxService: NgxUiLoaderService,
    private toastr: ToastrService, private bookService: BookStoreService, private router: Router) { }



  onSubmit(){
    this.ngxService.start();
    var book = new CreateBook();
    book.authorId = this.author;
    book.publisherId = this.publish;
    book.title = this.title;

    var publication = new Publication();
    publication.edition = Number.parseInt(this.edition)
    publication.year = Number.parseInt(this.yearr)

    book.publication = publication;
    console.log(book);

    this.bookService.createBook(book).subscribe(res => {
      this.ngxService.stop();

        if(res.responseCode == "00"){
          this.toastr.success("successfully added")
        }
        else{
          this.toastr.error("request failed")
        }

        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {

          this.bookService.getBooks().subscribe(res => {
            if(res.responseCode == "00"){
              this.toastr.success("records retrieved successfully");
              this.ngxService.stop();
              this.books = res.responseData;
              this.author = "";
              this.title = "";
              this.publish = "";
              this.yearr = null;
              this.edition = null
            }
            else{
              this.toastr.info("no records found");
              this.ngxService.stop();
            }
         }, (err: any) => {
          this.ngxService.stop();
          this.toastr.error("an error has occured");
         })
          this.router.navigate(['app']);
        })
    }, (err: any) => {
      this.toastr.error("request failed")
      this.ngxService.stop();
    });
  }



  initiatAddition(){
    this.ngxService.start();

    this.currentYear = new Date().getFullYear() + 1;
    for (let year = this.currentYear; year >= 1990; year--) {
      this.years.push(year);
    }
    this.bookService.getPublishers().subscribe(res =>{
        if(res.responseCode == "00"){
          this.publishers = res.responseData;3
        }
    })
    this.bookService.getAuthors().subscribe(res => {
      if(res.responseCode == "00"){
        this.authors = res.responseData;
        this.ngxService.stop();
      }
    })
  }

  updateBook(){
    this.ngxService.start();
    var update = {
      id: this.itemUpdate,
      year: Number.parseInt(this.updateYear) ,
      edition: Number.parseInt(this.updateEdition)
    }
    console.log(update)
    this.bookService.updateBook(update).subscribe(res => {
      if(res.responseCode == "00"){
        this.toastr.success("record updated successfully");
        this.ngxService.stop();
        this.updateYear = null;
        this.updateEdition = null
        this.itemUpdate = ""
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {

          this.bookService.getBooks().subscribe(res => {
            if(res.responseCode == "00"){
              this.toastr.success("records retrieved successfully");
              this.ngxService.stop();
              this.books = res.responseData;

            }
            else{
              this.toastr.success("no records found");
              this.ngxService.stop();
            }
            }, (err: any) => {
             this.ngxService.stop();
             this.toastr.error("an error has occured");
              })
          this.router.navigate(['app']);
            })
      }
      else{
        this.toastr.info("no records found");
        this.ngxService.stop();
      }
      }, (err: any) => {
        this.ngxService.stop();
       this.toastr.error("an error has occured");
      })
    this.router.navigate(['app']);
  }


  initializeDeleteBook(id: string){
      this.itemDelete = id;
  }

  initializeUpdate(id: string){
    this.currentYear = new Date().getFullYear() + 1;
    for (let year = this.currentYear; year >= 1990; year--) {
      this.years.push(year);
    }
    this.itemUpdate = id;
  }

  deleteBook(){
    this.ngxService.start();

    this.bookService.deleteBook(this.itemDelete).subscribe(res => {
      if(res.responseCode == "00"){
        this.toastr.success("record deleted successfully");
        this.ngxService.stop();
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {

          this.bookService.getBooks().subscribe(res => {
            if(res.responseCode == "00"){
              this.toastr.success("records retrieved successfully");
              this.ngxService.stop();
              this.books = res.responseData;

            }
            else{
              this.toastr.success("no records found");
              this.ngxService.stop();
            }
            }, (err: any) => {
             this.ngxService.stop();
             this.toastr.error("an error has occured");
              })
          this.router.navigate(['app']);
            })
      }
      else{
        this.toastr.info("no records found");
        this.ngxService.stop();
      }
      }, (err: any) => {
        this.ngxService.stop();
       this.toastr.error("an error has occured");
      })

        }
      }
