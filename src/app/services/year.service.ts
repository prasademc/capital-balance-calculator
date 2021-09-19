import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';

/**
 * Import interfaces
 */
import { Years } from '../interfaces/year.interface';

@Injectable()
export class YearService {
	yearsDataUrl: string = './assets/data/years.json';

	constructor(private http: HttpClient) {}

	getYears(): Observable<Years> {
		return this.http.get<Years>(this.yearsDataUrl).pipe(
			map((res) => res),
			shareReplay()
		);
	}
}
