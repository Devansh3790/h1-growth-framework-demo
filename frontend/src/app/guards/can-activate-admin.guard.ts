import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

export class UserToken {}

export class Permissions {
  constructor() {}
  canActivate(user: UserToken, id: string): boolean {
    return true;
  }
}

@Injectable({
  providedIn: "root",
})
export class CanActivateAdmin implements CanActivate {
  constructor(
    private router: Router,
    private permissions: Permissions,
    private currentUser: UserToken
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.permissions.canActivate(this.currentUser, next.params.id)) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(["/login"], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
