import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SuggestionFormService {
	constructor(private http: Http) {}
	ngOnInit() {}
	saveSuggestion(suggestion) {
		const headers = new Headers({
			'Content-Type': 'application/json',
		});

		return this.http.post(
			'https://suggestionbox-b3b3d.firebaseio.com/suggestion.json',
			suggestion,
			{
				headers: headers,
			},
		);
	}
}
