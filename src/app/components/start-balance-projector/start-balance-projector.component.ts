import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

/**
 * Import interfaces
 */
import { SBProjectionData } from '../../interfaces/sb.projection.data.interface';
@Component({
	selector: 'app-start-balance-projector',
	templateUrl: './start-balance-projector.component.html',
	styleUrls: ['./start-balance-projector.component.scss'],
})
export class StartBalanceProjectorComponent implements OnChanges {
	@Input() chartsData: SBProjectionData[] = [];

	public lineChartData: ChartDataSets[] = [
		{
			data: [],
		},
	];

	public lineChartLabels: Label[] = [];

	public lineChartOptions = {
		responsive: true,
	};

	public lineChartLegend = false;
	public lineChartType: ChartType = 'line';
	public lineChartPlugins = [];

	constructor() {}

	ngOnChanges() {
		this.lineChartLabels = this.chartsData.map(
			(projectionData) => projectionData.year.label
		);

		this.lineChartData[0].data = this.chartsData.map(
			(projectionData) => projectionData.startBalance
		);
	}
}
