import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopiedListComponent } from './components/copied-list/copied-list.component';
import { LoginComponent } from './components/login/login.component';
import { ListItemsComponent } from './components/copied-list/list-items/list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    CopiedListComponent,
    LoginComponent,
    ListItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
