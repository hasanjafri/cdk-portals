import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PortalModule } from '@angular/cdk/portal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTileComponent } from './components/cdk-tile/cdk-tile.component';

@NgModule({
  declarations: [AppComponent, CdkTileComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, PortalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
