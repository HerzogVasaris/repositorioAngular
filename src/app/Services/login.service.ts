import { Injectable, NgZone } from "@angular/core";
import * as _ from "lodash";
import { GoogleAuthService } from "ng-gapi";
import GoogleUser = gapi.auth2.GoogleUser;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public static readonly SESSION_STORAGE_KEY: string = "accessToken";

  profile: any = undefined;
  profile2: any = undefined;
  tokenUser: string;
  userId: string;
  userName: string;
  userEmail: string;
  user: GoogleUser;
  

  constructor(public googleAuthService: GoogleAuthService, private ngZone: NgZone) { 
    if(this.isUserSignedIn()){
      this.setUser(this.getSessionUser());
    }
  }

  private setUser(user: any){
     this.profile = user['Fs']
     this.profile2 = user['uc'];
     
    //this.tokenUser = user['Zi'];
    // this.userId = user['Eea'];
    this.userId = this.profile['KR'];
    this.userName = this.profile['sd'];
    this.userEmail = this.profile['lt'];
    this.tokenUser = this.profile2['access_token']

    console.log(user);
    console.log(this.userId);
    console.log(this.userName);
    console.log(this.userEmail);
  }

  public getSessionUser(): GoogleUser {
    let user: string = sessionStorage.getItem(LoginService.SESSION_STORAGE_KEY);
    if (!user) {
      throw new Error("no token set , authentication required");
    }
    return JSON.parse(user);
  }

  public signIn() {
    this.googleAuthService.getAuth().subscribe((auth) => {
      auth.signIn().then(
        res => this.signInSuccessHandler(res),
        err => this.signInErrorHandler(err));
    });
  }

  public signOut(): void {
    this.googleAuthService.getAuth().subscribe((auth) => {
      try {
        auth.signOut();
        this.profile = undefined;
        this.tokenUser = undefined;
        this.userId = undefined;
      } catch (e) {
        console.error(e);
      }
      sessionStorage.removeItem(LoginService.SESSION_STORAGE_KEY);
    });
  }

  public isUserSignedIn(): boolean {
    return !_.isEmpty(sessionStorage.getItem(LoginService.SESSION_STORAGE_KEY));
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.ngZone.run(() => {
      this.setUser(res);
      sessionStorage.setItem(
        LoginService.SESSION_STORAGE_KEY, JSON.stringify(res)
      );
    });
  }

  private signInErrorHandler(err) {
    console.warn(err);
  }
} 