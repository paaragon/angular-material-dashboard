import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

	public userIsLogged: boolean = false;

	constructor(
	) { }

	public login(email: string, password: string): Promise<any> {
		this.userIsLogged = true;
		return Promise.resolve(true);
	}

	public logout(): Promise<any> {
		this.userIsLogged = false;
		return Promise.resolve(true);
	}

	public isLogged(): boolean {

		console.log('isLogged?');
		console.log(this.userIsLogged);

		return this.userIsLogged;
	}
}
