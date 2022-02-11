import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconConstants } from './icon.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  githubUrl:string;
  linkedinUrl:string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private icons: IconConstants) {
    iconRegistry.addSvgIconLiteral('github', sanitizer.bypassSecurityTrustHtml(icons.GITHUB_ICON))
    iconRegistry.addSvgIconLiteral('linkedin', sanitizer.bypassSecurityTrustHtml(icons.LINKEDIN_ICON))

    this.githubUrl = icons.GITHUB_URL;
    this.linkedinUrl = icons.LINKEDIN_URL;
  }


  ngOnInit(): void {}

  openWindow(url: string) {
    window.open(url);
  }



}