import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements AfterViewInit {

  board: number[];
  players: { player1: string, player2: string } = {player1: '', player2: ''};
  turn = false;
  last10: string[] = [];
  last10boards: any = [];
  namesModel: boolean = true;

  ngAfterViewInit() {
    document.body.style.backgroundColor = '#ffffff';
    setTimeout(() => window['$']('ul.tabs').tabs(), 100);
  }

  constructor() {
    this.last10 = (sessionStorage.getItem('last10Boards') !== null) ? JSON.parse(sessionStorage.getItem('last10Boards')) : [];
    this.last10boards = (sessionStorage.getItem('last10Winners') !== null) ? JSON.parse(sessionStorage.getItem('last10Winners')) : [];
    /*
    if (JSON.parse(localStorage.getItem('last10Winners')) == null) {
      this.last10 = [];
    } else {
      this.last10 = JSON.parse(localStorage.getItem('last10Winners'));
    }
    if (JSON.parse(localStorage.getItem('last10Boards')) == null) {
      this.last10boards = [];
    } else {
      this.last10boards = JSON.parse(localStorage.getItem('last10Boards'));
    }*/
  }

  toggleNamesModel() {
    this.namesModel = !this.namesModel;
  }

  startGame() {
    this.players = (this.players.player1 === '' || this.players.player2 === '') ? ({player1: 'Player 1', player2: 'Player 2'})
      : this.players;
    this.toggleNamesModel();
    this.resetBoard();
  }

  resetBoard() {
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.turn = false;
  }

  /*setLastWinner(str) {
    this.lastWinner = str;
    localStorage.setItem('lastWinner', this.lastWinner);
  }*/
  setLast5(str) {
    this.last10.unshift(str);
    if (this.last10.length > 5) {
      this.last10.splice(4, 1);
    }
    sessionStorage.setItem('last10Winners', JSON.stringify(this.last10));
  }

  setLast5Boards() {
    this.last10boards.unshift(this.board);
    if (this.last10boards.length > 5) { // Removes the 11th game
      this.last10boards.splice(4, 1);
    }
    sessionStorage.setItem('last10Boards', JSON.stringify(this.last10boards));
  }

  select(index) {
    if (this.board[index] === 0) {
      this.board[index] = this.turn ? 2 : 1;
      if (this.checkWin(this.turn ? 2 : 1)) {
        this.setLast5(this.players[this.turn ? 0 : 1] + (this.turn ? 2 : 1) + ' Won!');
        this.setLast5Boards();
        this.resetBoard();
        console.log(this.last10);
        console.log(this.last10boards);
        return 'null';
      }
      if (this.checkTie()) {
        this.setLast5('Tie!');
        this.setLast5Boards();
        this.resetBoard();
        return 'null';
      }
      this.turn = !this.turn;
    }
  }

  checkWin(val) {
    return (
      this.allEqual(val, [0, 1, 2]) ||
      this.allEqual(val, [3, 4, 5]) ||
      this.allEqual(val, [6, 7, 8]) ||
      this.allEqual(val, [0, 3, 6]) ||
      this.allEqual(val, [1, 4, 7]) ||
      this.allEqual(val, [2, 5, 8]) ||
      this.allEqual(val, [0, 4, 8]) ||
      this.allEqual(val, [2, 4, 6])
    );
  }


  checkTie() {
    return this.board.filter(val => val === 0).length === 0;
  }

  allEqual(val, ar) {
    return ar.filter(a => this.board[a] === val).length === ar.length;
  }
}
