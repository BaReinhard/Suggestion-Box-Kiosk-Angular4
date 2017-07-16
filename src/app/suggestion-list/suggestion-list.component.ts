import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-suggestion-list',
	templateUrl: './suggestion-list.component.html',
	styleUrls: ['./suggestion-list.component.css'],
})
export class SuggestionListComponent implements OnInit {
	suggestions = [
		{ name: 'Brett', message: 'Message 1 from here' },
		{ name: 'Brett', message: 'Message 2 from here' },
		{ name: 'Brett', message: 'Message 3 from here' },
		{ name: 'Brett', message: 'Message 4 from here' },
	];
	constructor() {}
	ngOnInit() {}
}
