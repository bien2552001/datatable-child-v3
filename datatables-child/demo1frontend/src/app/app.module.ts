import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { OnlineStatusModule } from 'ngx-online-status';
import { CheckinternetComponent } from './checkinternet/checkinternet.component';
import { HealthycheckComponent } from './chapter3/healthycheck/healthycheck.component';
import { BackgroundComponent } from './background/background.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiAuthorizationComponent } from './chapter10_authen/api-authorization/api-authorization.component';
import { LoginComponent } from './chapter10_authen/api-authorization/login/login.component';
import { LogoutComponent } from './chapter10_authen/api-authorization/logout/logout.component';
import { LoginMenuComponent } from './chapter10_authen/api-authorization/login-menu/login-menu.component';
import { FetchDataComponent } from './chapter10_authen/fetch-data/fetch-data.component';
import { ApexchartDACComponent } from './apexchart-dac/apexchart-dac.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTabsModule } from '@angular/material/tabs';
import { TestComponent } from './apexchart-dac/test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentchartDemoComponent } from './currentchart-demo/currentchart-demo.component';
import { TestcurrentComponent } from './currentchart-demo/testcurrent/testcurrent.component';
import { Dtsu666Component } from './dtsu666/dtsu666.component';
import { TodayComponent } from './dtsu666/today/today.component';
import { WeekComponent } from './dtsu666/week/week.component';
import { TableComponent } from './dtsu666/table/table.component';
import { DaterangerpickerComponent } from './daterangerpicker/daterangerpicker.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { SignalIRComponent } from './signal-ir/signal-ir.component';
import { MessageComponent } from './signal-ir/message/message.component';
import { SendmessageComponent } from './signal-ir/sendmessage/sendmessage.component';
import { FilterdateComponent } from './filterdate/filterdate.component';
import { BarchartComponent } from './chartjs/barchart/barchart.component';
@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    CheckinternetComponent,
    HealthycheckComponent,
    BackgroundComponent,
    ApiAuthorizationComponent,
    LoginComponent,
    LoginMenuComponent,
    LogoutComponent,
    FetchDataComponent,
    ApexchartDACComponent,
    TestComponent,
    CurrentchartDemoComponent,
    TestcurrentComponent,
    Dtsu666Component,
    TodayComponent,
    WeekComponent,
    TableComponent,
    DaterangerpickerComponent,
    SignalIRComponent,
    MessageComponent,
    SendmessageComponent,
    FilterdateComponent,
    BarchartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule,
    OnlineStatusModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgApexchartsModule,
    DataTablesModule,
    MatTabsModule,
    Daterangepicker,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
