import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable()
export class SnackBarService {
	constructor(
	) { }

	public snackBarEmitter: EventEmitter<{ message: string, action?: string }> = new EventEmitter<{ message: string, action?: string }>();

	public open(message: string, action?: string) {

		this.snackBarEmitter.emit({ message: message, action: action });
	}
}
