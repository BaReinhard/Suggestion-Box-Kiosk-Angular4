import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-suggestion-form',
	templateUrl: './suggestion-form.component.html',
	styleUrls: ['./suggestion-form.component.css'],
})
export class SuggestionFormComponent implements OnInit {
	suggestions = [];
	name = '(Optional)';
	email = '(Optional)';
	message = '';
	promises = [];
	saveMessage = '';
	disabled = false;
	loading = false;
	updateMe = false;
	constructor() {}

	ngOnInit() {}

	disableForm = () => {
		this.disabled = true;
	};
	selectAll = el => {
		el.select();
	};
	updateMember = () => {};
	saveSuggestion = el => {
		// Disable Inputs
		this.disableForm();
		this.loading = true;
		//Make some API call to NODE to save to Mongo
		this.promises.push(
			new Promise(resolve => {
				setTimeout(
					() =>
						resolve(
							`Save ${this.name} with email of ${this
								.email} and with message : ${this
								.message}. The member has indicated they want to ${this
								.updateMe
								? 'be updated'
								: 'not be updated'} on the topic`,
						),
					2500,
				);
			}).then(response => {
				this.saveMessage = response.toString();
				this.name = '';
				this.email = '';
				this.message = '';
				this.updateMe = false;
			}),
		);
		// Wait until API Call Returns
		Promise.all(this.promises).then(() => {
			this.name = '(Optional)';
			this.email = '(Optional)';

			this.disabled = false;
			this.loading = false;
			this.updateMe = false;
			el.focus();
			el.select();
		});
	};
	// Check for Enter Event, then fire addSuggestion
	onEnter(event, el) {
		if (event.keyCode === 13) {
			this.saveSuggestion(el);
		}
	}
}
