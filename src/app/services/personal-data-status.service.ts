import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

/**
 * Import interfaces
 */
import { PersonalDetail } from '../interfaces/personal.data.interface';

@Injectable()
export class PersonalDataStatusService {
	personalDetail: PersonalDetail = {
		salary: 0,
		contributionRate: 0,
		inflationRate: 0,
		earnings: 0,
		fees: 0,
		tax: 0,
		withdrawalRate: 0,
		wcYear: '2041',
		age: 0,
	};

	public personalDataStatusSubject: BehaviorSubject<PersonalDetail> =
		new BehaviorSubject<PersonalDetail>(this.personalDetail);

	constructor() {}

	public updatePersonalDataStatus(personalDetail: PersonalDetail) {
		this.personalDetail = personalDetail;
		return this.personalDataStatusSubject.next(this.personalDetail);
	}
}
