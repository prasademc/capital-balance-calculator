import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
	imports: [
		NzLayoutModule,
		NzTypographyModule,
		NzGridModule,
		NzFormModule,
		NzCardModule,
		NzSelectModule,
		NzInputModule,
		NzTableModule,
	],
	exports: [
		NzLayoutModule,
		NzTypographyModule,
		NzGridModule,
		NzFormModule,
		NzCardModule,
		NzSelectModule,
		NzInputModule,
		NzTableModule,
	],
	providers: [],
})
export class NGZorroAntdModule {}
