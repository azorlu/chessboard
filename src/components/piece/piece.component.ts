import { Component, OnInit, Input, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { faChessKing, faChessQueen, faChessRook, faChessBishop, faChessKnight, faChessPawn } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit, AfterViewInit {

  @Input('type') pieceType: string;
  @Input('color') pieceColor: string;

  @ViewChild('king') king: FaIconComponent;
  @ViewChild('queen') queen: FaIconComponent;
  @ViewChild('rook') rook: FaIconComponent;
  @ViewChild('bishop') bishop: FaIconComponent;
  @ViewChild('knight') knight: FaIconComponent;
  @ViewChild('pawn') pawn: FaIconComponent;

  showKing: boolean;
  showQueen: boolean;
  showRook: boolean;
  showBishop: boolean;
  showKnight: boolean;
  showPawn: boolean;

  faChessKing = faChessKing;
  faChessQueen = faChessQueen;
  faChessRook = faChessRook;
  faChessBishop = faChessBishop;
  faChessKnight = faChessKnight;
  faChessPawn = faChessPawn;

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.render();
  }

  ngAfterViewInit(): void {
  }

  setPieceColor() {
    switch (this.pieceColor) {
      case 'w':
        this.renderer.addClass(this.elementRef.nativeElement, "light-piece");
        break;
      case 'b':
        this.renderer.addClass(this.elementRef.nativeElement, "dark-piece");
        break;
      default:
        break;
    }
  }

  setPieceType() {
    this.showKing = false;
    this.showQueen = false;
    this.showRook = false;
    this.showBishop = false;
    this.showKnight = false;
    this.showPawn = false;

    switch (this.pieceType) {
      case 'k':
        this.showKing = true;
        break;
      case 'q':
        this.showQueen = true;
        break;
      case 'r':
        this.showRook = true;
        break;
      case 'b':
        this.showBishop = true;
        break;
      case 'n':
        this.showKnight = true;
        break;
      case 'p':
        this.showPawn = true;
        break;
      default:
        break;
    }
  }

  render() {
    this.setPieceType();
    this.setPieceColor();
  }

}
