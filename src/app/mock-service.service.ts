import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MesaageService } from './mesaage.service';



@Injectable()
export class MockServiceService {

  constructor(private messeagesService: MesaageService) {


   }

getStudents(): Observable <Student[]> {
  this.messeagesService.addNewMessage("Dohvaceni su podaci o studentima");
  this.messeagesService.addNewMessage("Dohvaceni su podaci o studentima2");

  return of (STUDENTS);
}

}
