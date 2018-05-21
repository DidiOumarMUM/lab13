import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { Student } from './students';

@Component({
  selector: 'app-students',
  template: `
    <p>
      students works!
    </p>
    <ul>
       <li *ngFor="let st of students" > <a  routerLink="profile/{{st.id}}">{{st.name}} </a>   </li>
    </ul>
    <router-outlet> </router-outlet>
  `,
  styles: []
})
export class StudentsComponent implements OnInit {
   students : Student[] ;

  constructor(private service : MyServiceService) { }
  getStudents() {
   return  this.students ;
}
  ngOnInit() {
    this.students=this.service.students ;

  }

}
