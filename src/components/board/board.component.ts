import { Component, OnInit } from '@angular/core';
import { faChessKing, faChessQueen, faChessRook, faChessBishop, faChessKnight, faChessPawn, faSquareFull } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  faChessKing = faChessKing;
  faChessQueen = faChessQueen;
  faChessRook = faChessRook;
  faChessBishop = faChessBishop;
  faChessKnight = faChessKnight;
  faChessPawn = faChessPawn;
  faSquareFull = faSquareFull;
  
  squares: any[] = [0,1,2,3,4,5,6,7];

  constructor() { }

  ngOnInit() {
  }

}
