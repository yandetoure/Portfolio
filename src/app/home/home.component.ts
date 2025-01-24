import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { ContactComponent } from '../contact/contact.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ServicesComponent } from '../services/services.component';
import { SkilsComponent } from '../skils/skils.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, ContactComponent, NavbarComponent,ProjectsComponent, ServicesComponent, SkilsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}