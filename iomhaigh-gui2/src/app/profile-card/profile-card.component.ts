import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  linkedinIcon = faLinkedin;
  githubIcon = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
