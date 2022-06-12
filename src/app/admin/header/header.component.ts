import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmailDto } from 'src/app/models/email';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { EmailService } from 'src/app/services/email.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  numberOfNotificationInMonth: any;
  numberOfCustomerEmail: any;

  info: any;
  private roles!: string[];

  currentTime: number = 0;

  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  showVendeurBoard = false;

  username!: string;
  email!: String;
  userId:any;
  photo:any;
  img!: boolean;
  emailDtoList!: EmailDto[];


  constructor(private dashboardService: DashboardService,
              private router: Router,
              public toastr: ToastrService,
              private tokenService: TokenStorageService,
              public userService: UtilisateurService,
              private mail: EmailService
  ){}

  ngOnInit(): void {
    this.getNumberOfNotificationInMonth();
    this.getListEmailsDTOs();
    this.isLoggedIn = !!this.tokenService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showVendeurBoard = this.roles.includes("ROLE_VENDEUR");
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
      this.userId = user.id;
      this.photo = user.photo;

      if (this.userService.getUserAvatar(this.userId) === null)
        this.img = false;
      else this.img = true;

    }

  }

  logout() {
    this.tokenService.signOut();
    this.router.navigateByUrl("auth/login");
    window.location.reload();
  }

  getProfile() {
    this.router.navigate(['/admin/accueil/profile/' + this.userId]);
  }

  goToHistoriqueConnexion() {
    this.router.navigateByUrl("admin/accueil/historique-Connection");
  }

  getTS() {
    return this.currentTime;
  }


  getNumberOfNotificationInMonth(): void {
    this.dashboardService.countNumberOfRating()
      .subscribe(response => {
      this.numberOfNotificationInMonth = response;
    });
  }

  getNumberOfEmailInMonth(): void {
    this.dashboardService.countNumberOfEmailRequest()
      .subscribe(response => {
      this.numberOfCustomerEmail = response;
    });
  }

  getListEmailsDTOs() {
    this.mail.getAllListEmailDTOOrderIdDesc().subscribe(
      (response: EmailDto[]) => {
        this.emailDtoList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
