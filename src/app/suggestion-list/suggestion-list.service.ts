import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SuggestionListService {
	headers = new Headers({
		'Content-Type': 'application/json',
	});
	constructor(private http: Http) {}
	ngOnInit() {}
	getSuggestions() {
		return this.http.get(
			'https://suggestionbox-b3b3d.firebaseio.com/suggestion.json',
			{ headers: this.headers },
		);
	}
	deleteSuggestion(key) {
		return this.http.delete(
			`https://suggestionbox-b3b3d.firebaseio.com/suggestion/${key}.json`,
			{ headers: this.headers },
		);
	}
}
