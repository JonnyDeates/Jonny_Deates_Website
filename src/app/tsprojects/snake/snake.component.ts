import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  count: 0;
  x = 0;
  grid = 16;
  snake = {
    x: 0,
    y: 0,
    dx: this.grid,
    dy: 0,
    cells: [],
    maxCells: 4
  };
  apple = {
    x: 32,
    y: 32
  };
  constructor() { }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('snake');
    this.ctx = this.canvas.getContext('2d');
    this.loop();
  }
  loop(){
    requestAnimationFrame(()=>this.loop());
    if (this.count++ < 4) {
      return;
    }
    this.count = 0;
    this.ctx.clearRect(0,0, this.canvas.width,this.canvas.height);

    this.snake.x += this.snake.dx;
    this.snake.y += this.snake.dy;

    this.snake.cells.unshift({x: this.snake.x, y: this.snake.y});

    if (this.snake.cells.length > this.snake.maxCells) {
      this.snake.cells.pop();
    }

    if (this.snake.x < 0) {
      this.snake.x = this.canvas.width - this.grid;
    }
    else if (this.snake.x >= this.canvas.width) {
      this.snake.x = 0;
    }
    if (this.snake.y < 0) {
      this.snake.y = this.canvas.height - this.grid;
    }
    else if (this.snake.y >= this.canvas.height) {
      this.snake.y = 0;
    }
    // draw apple
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.apple.x, this.apple.y, this.grid-1, this.grid-1);

    this.ctx.fillStyle = 'green';
    this.snake.cells.forEach((cell, index) =>{
      this.ctx.fillRect(cell.x, cell.y, this.grid - 1, this.grid - 1);
      if (cell.x === this.apple.x && cell.y === this.apple.y) {
        this.snake.maxCells++;
        this.apple.x = this.getRandomInt(0, 25) * this.grid;
        this.apple.y = this.getRandomInt(0, 25) * this.grid;
      }
      // check collision with all cells after this one (modified bubble sort)
      for (var i = index + 1; i < this.snake.cells.length; i++) {

        // collision. reset game
        if (cell.x === this.snake.cells[i].x && cell.y === this.snake.cells[i].y) {
          this.snake.x = 0;
          this.snake.y = 0;
          this.snake.cells = [];
          this.snake.maxCells = 4;
          this.snake.dx = this.grid;
          this.snake.dy = 0;
          this.apple.x = this.getRandomInt(0, 25) * this.grid;
          this.apple.y = this.getRandomInt(0, 25) * this.grid;
        }
      }
    });

    document.addEventListener('keydown', (e)=> {
      // prevent snake from backtracking on itself
      if (e.which === 37 && this.snake.dx === 0) {
        this.snake.dx = -this.grid;
        this.snake.dy = 0;
      }
      else if (e.which === 38 && this.snake.dy === 0) {
        this.snake.dy = -this.grid;
        this.snake.dx = 0;
      }
      else if (e.which === 39 && this.snake.dx === 0) {
        this.snake.dx = this.grid;
        this.snake.dy = 0;
      }
      else if (e.which === 40 && this.snake.dy === 0) {
        this.snake.dy = this.grid;
        this.snake.dx = 0;
      }
    });
  }

  fillCirlce(context,centerX,centerY,radius){
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
  }
}
