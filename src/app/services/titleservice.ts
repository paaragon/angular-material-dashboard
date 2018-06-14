import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable()
export class TitleService {

	public titleEmitter: EventEmitter<string> = new EventEmitter<string>();

	constructor(
	) { }

	public setTitle(title: string) {
		this.titleEmitter.emit(title);
	}
}
