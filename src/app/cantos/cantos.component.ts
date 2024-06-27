import { Component } from '@angular/core';
import { CANTOS } from '../../model/cantos';
import { Canto } from '../../model/canto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cantos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cantos.component.html',
  styleUrl: './cantos.component.css'
})
export class CantosComponent {

  
  cantos = CANTOS;
  selectedCanto: Canto = new Canto("34.txt", 456, "Wielkanocne", "Zmartwychwstał Pan", 6, "flkjflksjksalk");

  constructor() {}

  onSelect(canto: Canto): void {
    this.selectedCanto = canto;
    console.log(canto.formattedCanto)
  }

}
