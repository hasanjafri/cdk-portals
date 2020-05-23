import { Component, AfterViewInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { CdkTileComponent } from './components/cdk-tile/cdk-tile.component';
import { moveItemInArray, CdkDragEnter } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  tilePortal: ComponentPortal<CdkTileComponent>;

  tiles: Array<number>;
  showTiles = true;

  constructor(private cdRef: ChangeDetectorRef) {
    this.tiles = Array(20)
      .fill(0)
      .map((x, i) => i);
  }

  ngAfterViewInit() {
    this.tilePortal = new ComponentPortal(CdkTileComponent);
    this.cdRef.detectChanges();
  }

  toggleTiles() {
    this.showTiles = !this.showTiles;
  }

  enter(event: CdkDragEnter) {
    console.log(`from: ${event.item.data}`, `to: ${event.container.data}`, `tiles: ${this.tiles}`);
    if (event.item.data < event.container.data) {
      moveItemInArray(this.tiles, event.item.data, event.container.data - 1);
    } else {
      moveItemInArray(this.tiles, event.item.data, event.container.data);
    }
  }
}
