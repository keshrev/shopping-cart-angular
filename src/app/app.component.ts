import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private translate: TranslateService) {
    // To set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    this.translate.use('en'); // Set your language here
    }
}
