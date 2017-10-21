import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
