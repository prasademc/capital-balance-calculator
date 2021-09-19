import { Year } from './year.interface';

export interface CapitalBalanceData {
	startBalance: number;
	contribution: number;
	earnings: number;
	fee: number;
	tax: number;
	withdrawal: number;
	endBalance: number;
	year: Year;
}
