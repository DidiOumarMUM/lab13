import { Injectable, OnInit } from '@angular/core';
import {Student} from './students'
import { EventEmitter } from 'events';

@Injectable()
export class MyServiceService implements OnInit {

  students : Student[] ;
  studentData  = new EventEmitter() ; 
  id : number ;
  constructor() { 
    this.students =[{id : 1 , "name":"Asaad", "age":30, "studID":12345 , email : "a@mum.Edu" },
    {id : 2 , "name":"Am", "age":34, "studID":34567 , email : "bcd@mum.Edu" }
  ] ;
  
  
  }
  getStudentByid(id:number) 
  { 
   
   return this.students.find(s => s.id==id) ;
   
  }
  ngOnInit()
  {
    
  }
 
}
