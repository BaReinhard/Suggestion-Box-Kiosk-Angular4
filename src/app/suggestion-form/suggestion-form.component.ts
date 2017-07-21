import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { SuggestionFormService } from './suggestion-form.service';
import { EmailService } from '../email/email.service';

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
	error: boolean = false;
	errorTitle: string = '';
	errorMessage: string = '';
	message: string = '';
	promises: Array<any> = [];
	saveMessage: string = '';
	disabled: boolean = false;
	loading: boolean = false;
	loadingText: string = 'Saving';
	updateMe: boolean = false;
	modal: boolean = false;
	modalMessage: string = '';
	modalTitle: string = '';
	overlay: boolean = false;
	constructor(
		private fb: FormBuilder,
		private suggestionService: SuggestionFormService,
		private emailService: EmailService,
	) {
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
			this.overlay = true;
			//Make some API call to NODE to save to Mongo

			let newJson = {
				emailAddress: 'brettreinhard@gmail.com',
				message: `Suggestion: 
					${form.message}.
					Name: ${form.name}.
					Email: ${form.email}.
					Update: ${form.updateMe ? 'Yes' : 'No'}`,
				name: 'Made from Angular, via TypeScript',
			};
			let formJSON = {
				name: form.name,
				email: form.email,
				update: form.updateMe,
				message: form.message,
			};
			setTimeout(() => {
				this.suggestionService.saveSuggestion(formJSON).subscribe(
					response => {
						this.emailService.sendEmailOnSubmit(formJSON).subscribe(
							response => {
								console.log(response);
							},
							error => {
								console.log(response);
							},
						);
						this.saveMessage = response.toString();
						this.loading = false;
						this.clearForm();
						el.focus();
						el.select();
						this.modal = this.overlay = true;
						this.modalTitle = 'Success!';
						this.modalMessage = `${formJSON.name}, your suggestion has been submitted`;
						setTimeout(() => {
							this.modal = this.overlay = false;
						}, 3000);
					},
					error => {
						console.log(error);
					},
				);
			}, 1500);
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
