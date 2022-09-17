import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookDetails } from '../models/book-details';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = environment['baseUrl']

  createBook(request: any){
    return this.httpClient.post<any>(`${this.baseUrl}/api/Book/CreateBook`, request)
                          .pipe(map(res => {
                            console.log(res);
                            return res;
                          })
                        )
  }

  updateBook(request: any){
    return this.httpClient.put<any>(`${this.baseUrl}/api/Book/UpdateBook`, request)
                          .pipe(map(res => {
                            console.log(res);
                            return res;
                          })
                        )
  }

  getBooks(){
    return this.httpClient.get<BookDetails>(`${this.baseUrl}/api/Book/GetAllBooks`)
                          .pipe(map(res => {
                            console.log(res);
                            return res;
                          })
                        )
  }



  getAuthors(){
    return this.httpClient.get<any>(`${this.baseUrl}/api/Author`)
                          .pipe(map(res => {
                            return res;
                          })
                        )
  }

  getPublishers(){
    return this.httpClient.get<any>(`${this.baseUrl}/api/Publisher`)
                          .pipe(map(res => {
                            return res;
                          })
                        )
  }

  deleteBook(id: string){
    return this.httpClient.delete<any>(`${this.baseUrl}/api/Book/DeleteBook?id=${id}`)
                          .pipe(map(res => {
                            return res;
                          })
                        )
  }
}
