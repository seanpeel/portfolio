import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconConstants } from './icon.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  githubUrl:string;
  linkedinUrl:string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private icons: IconConstants) {
    iconRegistry.addSvgIconLiteral('github', sanitizer.bypassSecurityTrustHtml(icons.GITHUB_ICON_STRING))
    iconRegistry.addSvgIconLiteral('linkedin', sanitizer.bypassSecurityTrustHtml(icons.LINKEDIN_ICON_STRING))

    this.githubUrl = icons.GITHUB_URL;
    this.linkedinUrl = icons.LINKEDIN_URL;
  }


  ngOnInit(): void {}

  openWindow(url: string) {
    window.open(url);
  }
}
