import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

/**
 * Import services
 */
import { YearService } from '../../services/year.service';
import { PersonalDataStatusService } from '../../services/personal-data-status.service';

/**
 * Import interfaces
 */
import { Year } from '../../interfaces/year.interface';

@Component({
	selector: 'app-personal-detail',
	templateUrl: './personal-detail.component.html',
	styleUrls: ['./personal-detail.component.scss'],
	providers: [YearService],
})
export class PersonalDetailComponent implements OnInit {
	personalDetailForm!: FormGroup;
	years: Year[] = [];
	selectedYear: string = '2041';

	constructor(
		private fb: FormBuilder,
		private yearService: YearService,
		private personalDataStatusService: PersonalDataStatusService
	) {
		this.personalDetailForm = this.fb.group({
			salary: [100000, [Validators.required]],
			contributionRate: [
				9.5,
				[Validators.required, Validators.min(0), Validators.max(100)],
			],
			inflationRate: [
				3,
				[Validators.required, Validators.min(0), Validators.max(100)],
			],
			earnings: [
				7.5,
				[Validators.required, Validators.min(0), Validators.max(100)],
			],
			fees: [1.5, [Validators.required, Validators.min(0)]],
			tax: [
				15,
				[Validators.required, Validators.min(0), Validators.max(100)],
			],
			withdrawalRate: [
				5,
				[Validators.required, Validators.min(0), Validators.max(100)],
			],
			wcYear: ['2041', [Validators.required]],
			age: [
				45,
				[Validators.required, Validators.min(0), Validators.max(120)],
			],
		});

		this.personalDetailForm.controls['wcYear'].setValue(this.selectedYear, {
			onlySelf: true,
		});
	}

	ngOnInit(): void {
		this.getYears();

		// Update the status initial load
		this.personalDataStatusService.updatePersonalDataStatus(
			this.personalDetailForm.value
		);

		this.personalDetailForm.valueChanges
			.pipe(debounceTime(500))
			.subscribe((value) => {
				const isEmpty = Object.values(value).some(
					(x) => x === null || x === ''
				);
				if (!isEmpty)
					this.personalDataStatusService.updatePersonalDataStatus(
						value
					);
			});
	}

	/**
	 * Get list of years
	 */
	private getYears(): void {
		this.yearService.getYears().subscribe((res) => {
			if (Array.isArray(res.years)) {
				this.years = res.years;
			}
		});
	}
}
