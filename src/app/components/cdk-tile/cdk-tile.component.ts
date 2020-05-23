import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TileService } from 'src/app/services/tile.service';

@Component({
  selector: 'app-cdk-tile',
  templateUrl: './cdk-tile.component.html',
  styleUrls: ['./cdk-tile.component.scss'],
})
export class CdkTileComponent implements OnInit, AfterViewInit {
  tileNumber: number;

  constructor(private tileService: TileService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.tileNumber = this.tileService.getTileNumber();
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }
}
