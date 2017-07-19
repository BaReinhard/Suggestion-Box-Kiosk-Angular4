import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Headers, Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/toPromise';
import { SuggestionListService } from './suggestion-list.service';

@Component({
	selector: 'app-suggestion-list',
	templateUrl: './suggestion-list.component.html',
	styleUrls: ['./suggestion-list.component.css'],
})
export class SuggestionListComponent implements OnInit {
	informUserForm: FormGroup;
	error: boolean = false;
	errorMessage: string = '';
	suggestions: Array<any> = [];
	loading: boolean = false;
	informUser: boolean = false;
	currentSuggestionIndex: number = null;
	overlay: boolean = false;
	modal: boolean = false;
	modalMessage: string = '';
	modalTitle: string = '';

	constructor(
		private fb: FormBuilder,
		private suggestionService: SuggestionListService,
	) {
		this.informUserForm = fb.group({
			subject: ['Update', Validators.compose([Validators.required])],
			message: [
				null,
				Validators.compose([
					Validators.required,
					Validators.minLength(3),
					Validators.maxLength(300),
				]),
			],
		});
	}
	ngOnInit() {
		this.loadSuggestions();
	}

	loadSuggestions = () => {
		this.loading = true;
		this.error = false;
		// Bad practice do not actually use this on real web pages
		let password = prompt('Please enter the password');
		if (password === 'password') {
			this.suggestionService.getSuggestions().subscribe(
				response => {
					// console.log(response.json());
					// this.suggestions = response.json().suggestions;
					this.error = false;
					this.loading = false;

					let res = response.json();
					console.log(res);
					let arrSugs = [];
					for (var key in res) {
						// skip loop if the property is from prototype
						if (!res.hasOwnProperty(key)) continue;
						res[key].sugKey = key;
						arrSugs.push(res[key]);
						console.log(res);
					}

					this.suggestions = arrSugs;
					console.log(this.suggestions);
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
	showForm = (index: number, sendEmail: boolean) => {
		if (sendEmail) {
			this.overlay = sendEmail;
			this.currentSuggestionIndex = index;
			this.informUser = sendEmail;
			console.log(this.currentSuggestionIndex, this.informUser);
			// AJAX to Update Member
			// Create new service to update user
		} else {
			this.deleteSuggestion(index);
		}
	};
	selectAll = el => {
		el.select();
	};
	closeForm = () => {
		this.overlay = false;
		this.informUser = false;
		this.informUserForm.reset({ subject: 'Update' });
	};
	onEnter = (event, vals) => {
		event.keyCode === 13
			? this.sendEmail(vals)
			: console.log(event.keyCode);
	};
	sendEmail = vals => {
		let index = this.currentSuggestionIndex;
		console.log(index, vals);
		let suggestionDetails = this.suggestions[index];
		let emailJSON = {
			email: suggestionDetails.email,
			name: suggestionDetails.name,
			message: vals.message,
			subject: vals.subject,
		};
		console.log(emailJSON);
		console.log(suggestionDetails);
		this.informUser = this.overlay = false;
		this.modal = true;
		this.overlay = true;
		this.modalMessage = `You have successfully sent the update to ${emailJSON.name}`;
		this.modalTitle = 'Success!';
		setTimeout(() => {
			this.modal = false;
			this.overlay = false;
			this.informUserForm.reset({
				subject: 'Update',
			});
		}, 2000);
	};
	deleteSuggestion = index => {
		console.log(this.suggestions[index].sugKey);
		this.suggestionService
			.deleteSuggestion(this.suggestions[index].sugKey)
			.subscribe(
				response => {
					this.suggestions.splice(index, 1);
				},
				error => {},
			);
	};
}
