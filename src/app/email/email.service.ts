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
		return this.http.post(
			'https://prod-27.centralus.logic.azure.com:443/workflows/957ebed812b24ebb9dd95e812e417b16/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=jU_IXBzNqNWQ2u2Iy5biYgecNGkMvgt4UR3Yk0PfOkQ',
			email,
			{
				headers: this.headers,
			},
		);
	}
	sendEmailOnSubmit(email: Object) {
		const headers = new Headers({
			'Content-Type': 'application/json',
		});
		return this.http.post(
			'https://prod-14.centralus.logic.azure.com:443/workflows/e09c9383ed9d4e389d85682801a3bb1b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vcxi3TML3gIg2vFfKzefUCM7HXugEyWP72dhMdeTKvQ',
			email,
			{ headers: this.headers },
		);
	}
}
