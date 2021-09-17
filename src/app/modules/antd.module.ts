import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
	imports: [
		NzLayoutModule,
		NzTypographyModule,
		NzSpaceModule,
		NzGridModule,
		NzFormModule,
		NzCardModule,
		NzSelectModule,
		NzInputModule,
	],
	exports: [
		NzLayoutModule,
		NzTypographyModule,
		NzSpaceModule,
		NzGridModule,
		NzFormModule,
		NzCardModule,
		NzSelectModule,
		NzInputModule,
	],
	providers: [],
})
export class NGZorroAntdModule {}
