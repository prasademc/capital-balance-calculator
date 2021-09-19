import { Component, OnDestroy, OnInit } from '@angular/core';

/**
 * Import services
 */
import { PersonalDataStatusService } from '../../services/personal-data-status.service';
import { YearService } from '../../services/year.service';

/**
 * Import interfaces
 */
import { SBProjectionData } from '../../interfaces/sb.projection.data.interface';
import { PersonalDetail } from '../../interfaces/personal.data.interface';
import { Year } from '../..//interfaces/year.interface';
import { CapitalBalanceData } from '../../interfaces/capital.balance.data.interface';

import { CbCalculator } from '../../classes/CbCalculater.class';

@Component({
	selector: 'app-cb-calculator',
	templateUrl: './cb-calculator.component.html',
	styleUrls: ['./cb-calculator.component.scss'],
	providers: [YearService],
})
export class CbCalculatorComponent implements OnInit, OnDestroy {
	initialStartBalance: number = 300000;
	displayPersonalData: CapitalBalanceData[] = [];
	years: Year[] = [];
	age: number = 0;

	chartsData: SBProjectionData[] = [];
	constructor(
		private personalDataStatusService: PersonalDataStatusService,
		private yearService: YearService
	) {}

	ngOnInit(): void {
		this.personalDataStatusService.personalDataStatusSubject.subscribe(
			(personalData) => {
				if (personalData.salary > 0)
					return this.initCapitalBalance(personalData);
			}
		);
	}

	ngOnDestroy() {
		this.personalDataStatusService.personalDataStatusSubject.unsubscribe();
	}

	/**
	 * initialize the calculation of the capital balance
	 * @param personalData
	 */
	private initCapitalBalance(personalData: PersonalDetail): void {
		this.yearService.getYears().subscribe((res) => {
			if (Array.isArray(res.years)) {
				this.age = personalData.age;
				this.years = res.years;
				this.displayPersonalData = [];
				let previousCBDataObject: any = null;

				this.years.forEach((year) => {
					let tempob = new CbCalculator(
						year,
						previousCBDataObject,
						personalData
					);
					this.displayPersonalData.push(tempob);
					previousCBDataObject = tempob;
				});

				this.chartsData = this.displayPersonalData.map((cbData) => {
					return {
						year: cbData.year,
						startBalance: cbData.startBalance,
					};
				});
			}
		});
	}
}
