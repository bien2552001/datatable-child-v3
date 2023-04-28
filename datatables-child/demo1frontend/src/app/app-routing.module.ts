import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexchartDACComponent } from './apexchart-dac/apexchart-dac.component';
import { TestComponent } from './apexchart-dac/test/test.component';
import { BackgroundComponent } from './background/background.component';
import { AuthorizeGuard } from './chapter10_authen/api-authorization/authorize.guard';
import { LoginComponent } from './chapter10_authen/api-authorization/login/login.component';
import { FetchDataComponent } from './chapter10_authen/fetch-data/fetch-data.component';
import { HealthycheckComponent } from './chapter3/healthycheck/healthycheck.component';
import { BarchartComponent } from './chartjs/barchart/barchart.component';
import { CheckinternetComponent } from './checkinternet/checkinternet.component';
import { CurrentchartDemoComponent } from './currentchart-demo/currentchart-demo.component';
import { TestcurrentComponent } from './currentchart-demo/testcurrent/testcurrent.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DaterangerpickerComponent } from './daterangerpicker/daterangerpicker.component';
import { Dtsu666Component } from './dtsu666/dtsu666.component';
import { TableComponent } from './dtsu666/table/table.component';
import { FilterdateComponent } from './filterdate/filterdate.component';
import { MessageComponent } from './signal-ir/message/message.component';
import { SendmessageComponent } from './signal-ir/sendmessage/sendmessage.component';
import { SignalIRComponent } from './signal-ir/signal-ir.component';
const routes: Routes = [
  { path: '', component: BackgroundComponent },
  { path: 'get', component: DatatableComponent },
  { path: 'check', component: CheckinternetComponent },
  { path: 'hc', component: HealthycheckComponent },
  { path: 'fetch', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'apex-chart', component: ApexchartDACComponent },
  { path: 'current-chart', component: CurrentchartDemoComponent },
  { path: 'test-apexchart', component: TestComponent },
  { path: 'test-currentchart', component: TestcurrentComponent },
  { path: 'dashboard', component: Dtsu666Component },
  { path: 'testTableDTSU666', component: TableComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: 'daterangerpicker', component: DaterangerpickerComponent },
  //Signal
  { path: 'signal', component: SignalIRComponent },
  { path: 'message', component: MessageComponent },
  { path: 'sendmessage', component: SendmessageComponent },
  { path: 'filterdate', component: FilterdateComponent },
  { path: 'chartjs', component: BarchartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
