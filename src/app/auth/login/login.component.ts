import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Login } from 'src/app/services/auth/login';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  loginInfo!: Login;

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private toastr: ToastrService
  ) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      console.log("Login start : " + this.roles);
    }
  }

  onSubmit() {
    console.log(this.form);
    this.loginInfo = new Login(
      this.form.username,
      this.form.password,
      );

    this.authService.attemptAuth(this.loginInfo).subscribe(data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.tokenStorage.saveUsername(data.username);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

        if(this.tokenStorage.getUser().roles == 'ROLE_USER') {
          this.toastr.error("Vous navez pas l'accès à cette partie");
          this.logout();
          window.location.reload();
        } else {
          this.router.navigateByUrl("admin/accueil/dashboard").then(() => {
          window.location.reload();
          });
        }
       
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    location.reload();
  }

  reloadHomePage() {
    this.router.navigateByUrl("admin/accueil", { skipLocationChange: true }).then(() => {
      this.router.navigate(['singIn']);
    });
  }

  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('singIn');
  }


}
