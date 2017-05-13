import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CocpitComponent } from './cocpit/cocpit.component';
import { ServerComponentComponent } from './server-component/server-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CocpitComponent,
    ServerComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
