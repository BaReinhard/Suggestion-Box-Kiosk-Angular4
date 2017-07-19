import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
	selector: 'app-suggestion-form',
	templateUrl: './suggestion-form.component.html',
	styleUrls: ['./suggestion-form.component.css'],
})
export class SuggestionFormComponent implements OnInit {
	suggestionForm: FormGroup;
	post: any; // A property for our submitted form
	description: string = '';
	formName: string = '';
	suggestions: Object = [];
	name: string = '(Optional)';
	email: string = '(Optional)';
	message: string = '';
	promises: Array<any> = [];
	saveMessage: string = '';
	disabled: boolean = false;
	loading: boolean = false;
	updateMe: boolean = false;
	constructor(private fb: FormBuilder, private http: Http) {
		this.suggestionForm = fb.group({
			name: ['(Optional)', Validators.compose([Validators.required])],
			message: [
				null,
				Validators.compose([
					Validators.required,
					Validators.minLength(3),
					Validators.maxLength(200),
				]),
			],
			email: [
				'(Optional)',
				Validators.compose([Validators.required]),
			],
			updateMe: false,
		});
	}

	ngOnInit() {}
	clearForm = () => {
		this.suggestionForm.reset({
			name: '(Optional)',
			email: '(Optional)',
			updateMe: false,
			message: null,
		});
		this.suggestionForm.enable();
		console.log(this.suggestionForm);
	};
	touchForm = () => {
		this.suggestionForm.controls.message.markAsTouched();
		this.suggestionForm.controls.name.markAsTouched();
		this.suggestionForm.controls.email.markAsTouched();
	};
	disableForm = () => {
		this.suggestionForm.disable();
	};
	selectAll = el => {
		el.select();
	};
	updateMember = () => {};
	saveSuggestion = (el, vals) => {
		// Disable Inputs
		console.log(this.suggestionForm.controls);
		if (this.suggestionForm.valid) {
			console.log(this.suggestionForm.controls['message'].valid);
			let form = this.suggestionForm.value;
			console.log(this.suggestionForm);
			this.disableForm();
			this.loading = true;
			//Make some API call to NODE to save to Mongo
			this.promises.push(
				new Promise(resolve => {
					setTimeout(
						() =>
							resolve(
								`Save ${form.name} with email of ${form.email} and with message : ${form.message}. The member has indicated they want to ${form.updateMe
									? 'be updated'
									: 'not be updated'} on the topic`,
							),
						2500,
					);
				}).then(response => {
					this.saveMessage = response.toString();
					this.loading = false;
					this.clearForm();
					el.focus();
					el.select();
				}),
			);
			let newJson = {
				emailAddress: 'brettreinhard@gmail.com',
				message: `Suggestion: 
					${form.message}.
					Name: ${form.name}.
					Email: ${form.email}.
					Update: ${form.updateMe ? 'Yes' : 'No'}`,
				name: 'Made from Angular, via TypeScript',
			};
			this.promises.push(
				this.http
					.post(
						'https://prod-05.centralus.logic.azure.com:443/workflows/fa37615468aa4ffd9da2ba549e1ce8b8/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=aA49qZ8e59z65oZm152xWL9bn4CRe9vJRLR8bYrezoc',
						newJson,
					)
					.toPromise()
					.then(response => {
						console.log(response);
					}),
			);
		} else {
			this.touchForm();
		}
	};
	// Check for Enter Event, then fire addSuggestion
	onEnter(event, el, vals) {
		if (event.keyCode === 13) {
			this.saveSuggestion(el, vals);
		}
	}
}
