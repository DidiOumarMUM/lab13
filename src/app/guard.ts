import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router ,ActivatedRoute} from '@angular/router';
import { MyServiceService } from './my-service.service';
import { Student } from './students';


@Injectable()
export class MyGuard implements CanActivate {
    constructor(private router: Router, private db: MyServiceService) {
    }
  
    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot):  Promise<boolean> | boolean {
      if (next.queryParams['id']) {
        if (this.db.getStudentByid(next.params['id']))
          return true;
        else {
          this.router.navigate(['/home']);
        }
      } else {
        this.router.navigate(['/home']);
        return false ;
      }
    }
  
}
