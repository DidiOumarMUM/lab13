import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from './students';

@Component({
  selector: 'app-profile',
  template: `
    <p>
     Welcome , Student details : </p> <br>
     <table> 
     <tr> {{student.id}}  </tr>
     <tr> {{student.name}}   </tr>
     <tr> {{student.age}}   </tr>
     <tr> {{student.studID}}   </tr>
     <tr> {{student.email}}   </tr>
     </table>

  `,
  styles: []
})
export class ProfileComponent implements OnInit {
  id : number ;
   student : Student ;
  constructor( private route: ActivatedRoute ,private service : MyServiceService) { 
 
    this.route.params.subscribe(params => this.id=params['id']);

  }
  ngOnInit() {
    this.student=this.service.getStudentByid(this.id) ;
    console.log(this.id) ;
  }

}
