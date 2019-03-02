import { Component, OnInit, Input } from '@angular/core';
import { faChessKing, faChessQueen, faChessRook, faChessBishop, faChessKnight, faChessPawn, faSquareFull } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  faChessKing = faChessKing;
  faChessQueen = faChessQueen;
  faChessRook = faChessRook;
  faChessBishop = faChessBishop;
  faChessKnight = faChessKnight;
  faChessPawn = faChessPawn;
  faSquareFull = faSquareFull;

  @Input('icon') icon;

  constructor() { }

  ngOnInit() {
  }

}
