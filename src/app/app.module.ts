import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-top-right",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
