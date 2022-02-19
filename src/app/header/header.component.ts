import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //Icons
  readonly faGithub = faGithub;
  readonly faLinkedin = faLinkedin;

  //URLs
  readonly githubUrl = "https://github.com/speel11";
  readonly linkedinUrl = "https://www.linkedin.com/in/sean-peel-47263250";

  constructor() { }

  ngOnInit(): void {}

  openWindow(url: string) {
    window.open(url);
  }
}
