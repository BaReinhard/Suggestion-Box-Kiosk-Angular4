import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
	selector: 'app-suggestion-list',
	templateUrl: './suggestion-list.component.html',
	styleUrls: ['./suggestion-list.component.css'],
})
export class SuggestionListComponent implements OnInit {

	error: boolean = false;
	errorMessage: string = '';
	suggestions: Array<Object> = [];
	loading: boolean = false;

	constructor(private http: Http) {}
	ngOnInit() {
		this.loadSuggestions();
	}
	loadSuggestions = () => {
		this.loading = true;
		this.error = false;
		// Bad practice do not actually use this on real web pages
		let password = prompt('Please enter the password');
		if (password === 'password') {
			this.http
				.get(
					'https://raw.githubusercontent.com/BaReinhard/ClubReady/master/suggestions.json',
				)
				.toPromise()
				.then(
					response => {
						this.suggestions = response.json().suggestions;
						this.error = false;
						this.loading = false;
					},
					error => {
						console.log(error);
						this.error = true;
						this.errorMessage = error;
						this.loading = false;
					},
				);
			// let newJson = {
			// 	emailAddress: 'brettreinhard@gmail.com',
			// 	message:
			// 		'This is a valid post request, made from Angular4 in TypeScript',
			// 	name: 'Made from Angular, via TypeScript',
			// };
			// this.http
			// 	.post(
			// 		'https://prod-05.centralus.logic.azure.com:443/workflows/fa37615468aa4ffd9da2ba549e1ce8b8/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=aA49qZ8e59z65oZm152xWL9bn4CRe9vJRLR8bYrezoc',
			// 		newJson,
			// 	)
			// 	.toPromise()
			// 	.then(response => {
			// 		console.log(response);
			// 	});
		} else {
			this.suggestions = [];
			this.loading = false;
			this.error = true;
			this.errorMessage =
				'You have entered an incorrect password, please refresh and try again';
		}
	};
	deleteSuggestion = (index, el) => {
		this.suggestions.splice(index, 1);
	};
