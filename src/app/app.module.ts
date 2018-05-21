import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { StudentsComponent } from './students.component';
import { MyServiceService } from './my-service.service';
import { ProfileComponent } from './profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule , AppRoutingModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
