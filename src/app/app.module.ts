import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTileComponent } from './components/cdk-tile/cdk-tile.component';

import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [AppComponent, CdkTileComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, PortalModule, DragDropModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
