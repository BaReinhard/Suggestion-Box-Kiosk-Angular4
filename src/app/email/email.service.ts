import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class EmailService {
	headers = new Headers({ 'Content-Type': 'application/json' });
	constructor(private http: Http) {}
	ngOnInit() {}
	sendEmail(email: Object) {
		const headers = new Headers({
			'Content-Type': 'application/json',
		});
		return this.http.post('something', email, {
			headers: this.headers,
		});
	}
}
