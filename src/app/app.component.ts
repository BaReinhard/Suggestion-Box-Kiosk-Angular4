import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title: string = 'app';
}
