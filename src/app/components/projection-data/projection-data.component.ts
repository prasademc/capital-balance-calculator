import { Component, Input, OnChanges } from '@angular/core';

/**
 * Import interfaces
 */
import { CapitalBalanceData } from '../../interfaces/capital.balance.data.interface';
import { Year } from 'src/app/interfaces/year.interface';
@Component({
	selector: 'app-projection-data',
	templateUrl: './projection-data.component.html',
	styleUrls: ['./projection-data.component.scss'],
})
export class ProjectionDataComponent implements OnChanges {
	@Input() capitalBalanceData: CapitalBalanceData[] = [];
	@Input() age: number = 45;
	startBalance: Array<number> = [];
	contributions: Array<number> = [];
	earnings: Array<number> = [];
	fees: Array<number> = [];
	taxes: Array<number> = [];
	weithdrawals: Array<number> = [];
	endBalances: Array<number> = [];
	years: Year[] = [];
	ages: Array<number> = [];

	constructor() {}

	ngOnChanges() {
		this.startBalance = this.capitalBalanceData.map((data) => data.startBalance);
		this.years = this.capitalBalanceData.map((data) => data.year);
		this.contributions = this.capitalBalanceData.map((data) => data.contribution);
		this.earnings = this.capitalBalanceData.map((data) => data.earnings);
		this.fees = this.capitalBalanceData.map((data) => data.fee);
		this.taxes = this.capitalBalanceData.map((data) => data.tax);
		this.weithdrawals = this.capitalBalanceData.map((data) => data.withdrawal);
		this.endBalances = this.capitalBalanceData.map((data) => data.endBalance);

		if(this.age > 0) {
			this.ages = [];
			for (let a = 0; a < this.years.length; a++) {
				this.ages.push(this.age);
				++this.age;
			}
		}
	}
}
