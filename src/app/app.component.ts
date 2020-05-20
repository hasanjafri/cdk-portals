import { Component, AfterViewInit, ViewContainerRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { CdkTileComponent } from './components/cdk-tile/cdk-tile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  tilePortal: ComponentPortal<CdkTileComponent>;

  tiles: Array<Number>;

  constructor(private _viewContainerRef: ViewContainerRef) {
    this.tiles = Array(10)
      .fill(0)
      .map((x, i) => i);
  }

  ngAfterViewInit() {
    this.tilePortal = new ComponentPortal(CdkTileComponent);
  }
}
