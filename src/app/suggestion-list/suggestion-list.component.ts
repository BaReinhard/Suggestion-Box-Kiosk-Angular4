import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Headers, Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/toPromise';
import { SuggestionListService } from './suggestion-list.service';
import { EmailService } from '../email/email.service';

@Component({
	selector: 'app-suggestion-list',
	templateUrl: './suggestion-list.component.html',
	styleUrls: ['./suggestion-list.component.css'],
})
export class SuggestionListComponent implements OnInit {
	informUserForm: FormGroup;
	deleteNow: boolean = false;
	badPassword: boolean = false;
	error: boolean = false;
	errorMessage: string = '';
	suggestions: Array<any> = [];
	loading: boolean = false;
	loadingText: string = 'Loading';
	informUser: boolean = false;
	currentSuggestionIndex: number = null;
	overlay: boolean = false;
	modal: boolean = false;
	modalMessage: string = '';
	modalTitle: string = '';
	errorTitle: string = '';

	constructor(
		private fb: FormBuilder,
		private suggestionService: SuggestionListService,
		private emailService: EmailService,
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
		this.badPassword = false;
		this.loading = true;
		this.overlay = true;
		this.error = false;
		// Bad practice do not actually use this on real web pages
		let password = prompt('Please enter the password');
		if (password === 'password') {
			this.suggestionService.getSuggestions().subscribe(
				response => {
					// console.log(response.json());
					// this.suggestions = response.json().suggestions;
					setTimeout(() => {
						this.error = false;
						this.loading = false;
						this.overlay = false;
					}, 1000);

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
		} else {
			this.suggestions = [];
			setTimeout(() => {
				this.loading = false;
				this.overlay = false;
			}, 1000);
			this.badPassword = true;
			this.errorMessage =
				'You have entered an incorrect password, please refresh and try again';
		}
	};
	showForm = (
		index: number,
		sendEmail: boolean,
		deleteSuggestion: boolean,
	) => {
		if (sendEmail) {
			this.deleteNow = deleteSuggestion;
			this.overlay = sendEmail;
			this.currentSuggestionIndex = index;
			this.informUser = sendEmail;
			console.log(this.currentSuggestionIndex, this.informUser);
			// AJAX to Update Member
			// Create new service to update user
		} else {
			this.modal = true;
			this.overlay = true;
			this.modalMessage = `You have successfully completed this suggestion`;
			this.modalTitle = 'Success!';
			setTimeout(() => {
				this.modal = false;
				this.overlay = false;
				this.deleteSuggestion(index);
				this.informUserForm.reset({
					subject: 'Update',
				});
			}, 2000);
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
	showError = (title, message) => {
		this.error = this.overlay = true;
		this.errorMessage = message;
		this.errorTitle = title;
		setTimeout(() => {
			this.error = this.overlay = false;
		}, 3000);
	};
	touchForm = () => {
		this.informUserForm.controls.subject.markAsTouched();
		this.informUserForm.controls.message.markAsTouched();
	};
	sendEmail = vals => {
		if (this.informUserForm.valid) {
			let index = this.currentSuggestionIndex;
			console.log(index, vals);
			let suggestionDetails = this.suggestions[index];
			let emailJSON = {
				email: suggestionDetails.email,
				name: suggestionDetails.name,
				message: vals.message,
				subject: vals.subject,
			};
			this.loading = true;
			this.emailService.sendEmail(emailJSON).subscribe(
				response => {
					setTimeout(() => {
						console.log(emailJSON);
						console.log(suggestionDetails);
						this.informUser = this.overlay = false;
						this.modal = true;
						this.loading = false;
						this.overlay = true;
						this.modalMessage = `You have successfully sent the update to ${emailJSON.name}`;
						this.modalTitle = 'Success!';
						setTimeout(() => {
							this.modal = false;
							this.overlay = false;
							this.informUserForm.reset({
								subject: 'Update',
							});
							if (this.deleteNow) {
								this.deleteSuggestion(index);
							}
						}, 3000);
					}, 1500);
				},
				error => {
					this.showError('Error', error);
				},
			);
		} else {
			this.touchForm();
		}
	};
	deleteSuggestion = index => {
		console.log(this.suggestions[index].sugKey);
		let name = this.suggestions[index].name;
		this.loadingText = 'Deleting';
		this.loading = true;
		this.overlay = true;
		this.suggestionService
			.deleteSuggestion(this.suggestions[index].sugKey)
			.subscribe(
				response => {
					setTimeout(() => {
						this.suggestions.splice(index, 1);
						this.modal = true;
						this.modalMessage = `Successfully deleted suggestion by ${name}`;
						this.loading = false;
						setTimeout(() => {
							this.modal = false;
							this.overlay = false;
							this.loadingText = 'Loading';
						}, 2000);
					}, 3000);
				},
				error => {
					this.showError('Error', error);
				},
			);
	};
}
