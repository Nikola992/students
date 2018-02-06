import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { MockServiceService } from './mock-service.service';
import { HighlightDirective } from './highlight.directive';
import { MessagesComponent } from './messages/messages.component';
import { MesaageService } from './mesaage.service';
import { AppRoutingModule } from './/app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailComponent,
    HighlightDirective,
    MessagesComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MockServiceService, MesaageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
