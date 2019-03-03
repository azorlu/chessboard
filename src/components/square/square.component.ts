import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
 
  @Input('piece') piece: string;

  constructor() { 
    this.piece = "";
  }

  ngOnInit() {
    this.renderPiece(this.piece);
  }

  renderPiece(p: string) {

  }

}
