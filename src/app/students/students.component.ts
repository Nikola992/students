import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../mock-students';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})


export class StudentsComponent implements OnInit {

students = STUDENTS;
selectedStudent: Student = { id: 1, name: 'Ime',gender: '', description: '' };


onSelectedStudent(student) {
  this.selectedStudent = student;
}


  constructor() { }

  ngOnInit() {
  }

}
