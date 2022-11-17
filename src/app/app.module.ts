import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AlertsComponent } from './alerts-practice/alerts/alerts.component';
import { SuccessComponent } from './alerts-practice/success/success.component';
import { WarningComponent } from './alerts-practice/warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertsComponent,
    SuccessComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
