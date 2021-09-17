import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Import shared modules
 */
import { NGZorroAntdModule } from './modules/antd.module';

/**
 * Import components
 */
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CbCalculatorComponent } from './components/cb-calculator/cb-calculator.component';
import { PersonalDetailComponent } from './components/personal-detail/personal-detail.component';
import { StartBalanceProjectorComponent } from './components/start-balance-projector/start-balance-projector.component';
import { ProjectionDataComponent } from './components/projection-data/projection-data.component';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(en);
@NgModule({
	declarations: [
		AppComponent,
		MainLayoutComponent,
		CbCalculatorComponent,
		PersonalDetailComponent,
		StartBalanceProjectorComponent,
		ProjectionDataComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		NGZorroAntdModule,
		ReactiveFormsModule,
	],
	providers: [{ provide: NZ_I18N, useValue: en_US }],
	bootstrap: [AppComponent],
})
export class AppModule {}
