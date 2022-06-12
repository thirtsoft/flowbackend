import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  info: any;
  private roles!: string[];

  currentTime: number = 0;

  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  showManagerBoard = false;
  userId:any;

  username!: string;
  img!: boolean;

  constructor(public userService: UtilisateurService,
              private tokenService: TokenStorageService,
              public toastr: ToastrService,
              private router: Router,
  ){}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();

      console.log(user);
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showManagerBoard = this.roles.includes("ROLE_MANAGER");
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
      this.userId = user.id;
  
      if (this.userService.getUserAvatar(this.userId) === null)
        this.img = false;
      else this.img = true;
    }

  }

  logout() {
    this.tokenService.signOut();
    this.router.navigateByUrl("auth/login");
  }

  getProfile() {
    this.router.navigate(['/admin/accueil/utilisateurs/profile/' + this.userId]);
  }

  getTS() {
    return this.currentTime;
  }

}
