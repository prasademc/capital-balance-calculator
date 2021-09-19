import { Year } from '../interfaces/year.interface';
import { CapitalBalanceData } from '../interfaces/capital.balance.data.interface';
import { PersonalDetail } from '../interfaces/personal.data.interface';

/**
 * This call handle the calculation and mange the data
 */
export class CbCalculator {
	startBalance: number = 0;
	contribution: number = 0;
	earnings: number = 0;
	fee: number = 0;
	tax: number = 0;
	withdrawal: number = 0;
	endBalance: number = 0;
	year: Year = {
		startBalance: '',
		label: '',
		value: 0,
	};

	_year: any = null;
	_prevousobject: any = null;

	constructor(
		year: Year,
		prevousData: CapitalBalanceData,
		formInput: PersonalDetail
	) {
		this._year = year;
		this._prevousobject = prevousData;

		this.startBalance =
			year.startBalance !== null
				? year.startBalance
				: this._prevousobject.endBalance;

		this.contribution =
			year.startBalance !== null
				? this.amountCalculate(
						formInput.salary,
						formInput.contributionRate
				  )
				: this.getContribution(
						this._prevousobject.contribution,
						formInput.inflationRate,
						year.value,
						formInput.wcYear
				  );

		let earningsSum = this.startBalance + this.contribution;
		this.earnings = this.amountCalculate(earningsSum, formInput.earnings);

		let feeSum = this.startBalance + this.contribution + this.earnings;
		this.fee = this.amountCalculate(feeSum, formInput.fees);

		let taxSum = this.contribution + this.earnings;
		this.tax = this.amountCalculate(taxSum, formInput.tax);

		this.withdrawal =
			year.label < formInput.wcYear
				? 0
				: this.amountCalculate(
						this.startBalance,
						formInput.withdrawalRate
				  );

		this.endBalance =
			this.startBalance +
			this.contribution +
			this.earnings -
			this.fee -
			this.tax -
			this.withdrawal;

		this.year = year;
	}

	/**
	 * Calculate the Amount of some precentage
	 * @param value
	 * @param precentage
	 * @returns
	 */
	private amountCalculate(value: number, precentage: number): number {
		return Math.round(value * (precentage / 100));
	}

	/**
	 * Calculate contribution
	 * @param contributionAmount
	 * @param inflationRate
	 * @returns
	 */
	private getContribution(
		contributionAmount: number,
		inflationRate: number,
		year: number,
		wcYear: string
	): number {
		return parseInt(wcYear) < year
			? 0
			: Math.round(contributionAmount * (1 + inflationRate / 100));
	}
}
