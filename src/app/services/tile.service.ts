import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TileService {
  private tileNumber = -1;

  constructor() {}

  getTileNumber() {
    this.tileNumber++;
    return this.tileNumber;
  }
}
