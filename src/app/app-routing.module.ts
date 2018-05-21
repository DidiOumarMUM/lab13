import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { StudentsComponent } from './students.component';
import { ProfileComponent } from './profile.component';
import { MyGuard } from './guard';
//import { AboutComponent } from './about.component';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'students', component: StudentsComponent  },
  { path: 'students/profile/?:id', component: ProfileComponent ,  canActivate: [MyGuard]}

  
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [MyGuard]
})
export class AppRoutingModule { }
