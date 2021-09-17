import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-personal-detail',
	templateUrl: './personal-detail.component.html',
	styleUrls: ['./personal-detail.component.scss'],
})
export class PersonalDetailComponent implements OnInit {
	personalDetailForm!: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.personalDetailForm = this.fb.group({
			salary: [100000, [Validators.required]],
			contributionRate: [9.5, [Validators.required]],
			inflationRate: [3, [Validators.required]],
			earnings: [7.5, [Validators.required]],
			fees: [2, [Validators.required]],
			tax: [15, [Validators.required]],
			withdrawalRate: [5, [Validators.required]],
		});
	}
}
