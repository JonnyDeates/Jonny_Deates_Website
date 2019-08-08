import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-giveaway-wheel',
  templateUrl: './giveaway-wheel.component.html',
  styleUrls: ['./giveaway-wheel.component.css']
})
export class GiveawayWheelComponent implements AfterViewInit {

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  // Hex Tester
  hexTest = /[0-9A-Fa-f]{6}/g;

  // Contestants
  contestants: any;

  // Inputs
  color: string;
  colorSelector: any;
  colorPatterns: any;
  contestant: string;
  fontSize: number;
  spinTime: number;

  // Tabs
  tabs: any;


  // Wheel
  wheelRotation = {dialLocation: 0, rate: 1.1, timer: 0, counter: 0, totalRot: 0, rotation: 0};
  winner = '';
  colors: any[];
  cssAnimation = document.createElement('style');
  spinBtn: any;

  // Constructor
  constructor(private router: Router) {
    this.contestants = [];
    this.colors = [];
    this.color = '';
    this.colorSelector = 'Color Selection';
    this.colorPatterns = ['abcd', 'ababcdcd', 'aabccd', 'abbcdd', 'abcb', 'abababcdcdcd', 'random', 'totalRandom'];
    this.fontSize = 0;
    this.spinTime = 100;
    this.tabs = ['Contestants', 'Colors', 'Settings'];
    // sessionStorage.setItem('contestants', JSON.stringify([{name: 'Jonny', sAngle: 0, eAngle: 0, sColor: '#FFDAB9'},
    //   {name: 'Tom', sAngle: 0, eAngle: 0, sColor: '#E6E6FA'},
    //   {name: 'ter', sAngle: 0, eAngle: 0, sColor: '#E6E6FA'},
    //   {name: 'Jeff', sAngle: 0, eAngle: 0, sColor: '#7744ff'}]))
    // Checks the Local Storage to See if there is a registry saved from before if not then creates three default names
    if (!(!!sessionStorage.getItem('contestants'))) {
      this.contestants = [{name: 'Jonny', sAngle: 0, eAngle: 0, sColor: '#FFDAB9'},
        {name: 'Tom', sAngle: 0, eAngle: 0, sColor: '#E6E6FA'},
        {name: 'ter', sAngle: 0, eAngle: 0, sColor: '#E6E6FA'},
        {name: 'Jeff', sAngle: 0, eAngle: 0, sColor: '#7744ff'}];
    } else {
      this.contestants = JSON.parse(sessionStorage.getItem('contestants'));
    }
    // Checks the Local Storage to See if there is a registry saved from before if not then creates two default colors
    if (!(!!sessionStorage.getItem('colors'))) {
      this.colors = ['#FFDAB9', '#E6E6FA', '#7744ff'];
    } else {
      this.colors = JSON.parse(sessionStorage.getItem('colors'));
    }
    this.resetColors();
    this.cssAnimation.type = 'text/css';
    this.spinBtn = document.getElementsByClassName('btn-large');
  }

  ngAfterViewInit() {
    setTimeout(() => window['$']('ul.tabs').tabs(), 100); // Will Be removed
    document.body.style.backgroundColor = '#00b140'; // Green Screen Color
    this.canvas = <HTMLCanvasElement> document.getElementById('cnvs'); // Gets the Canvas Element
    this.ctx = this.canvas.getContext('2d'); // Context is 2d for the canvas
    this.refreshWheel(); // Calls the function Refresh Wheel
  }

  // Resets the Colors
  resetColors() {
    let colorsUsed = this.colorSelection(this.colorSelector);

    this.contestants.forEach((contestant) => {
      if (colorsUsed.length === 0) {
        colorsUsed = this.colorSelection(this.colorSelector);
      }
      if (!!(contestant.cColor)) {
        contestant.sColor = contestant.cColor;
      } else {
        contestant.sColor = colorsUsed.splice(0, 1);
      }

    });
  }

  colorSelection(selector) {
    let colorsUsed = [];
    // ['', '', '', '', 'abcadebcdb', '', 'random', '']
    if (this.colors.length > 1) {
      if (selector.includes('abababcdcdcd')) { // Creates the pattern shown by adding to itself the color mutliple times.
        for (let i = 0; i < this.colors.length; i += 2) { // Moves 2 at a time so it loops through two colors from ab to cd
          colorsUsed.push(this.colors[i]);
          colorsUsed.push((!!(this.colors[i + 1]) ? this.colors[i + 1] : this.colors[i - 1]));
          colorsUsed.push(this.colors[i]);
          colorsUsed.push((!!(this.colors[i + 1]) ? this.colors[i + 1] : this.colors[i - 1]));
          colorsUsed.push(this.colors[i]);
          colorsUsed.push((!!(this.colors[i + 1]) ? this.colors[i + 1] : this.colors[i - 1]));
        }
      } else if (selector.includes('ababcdcd')) {
        for (let i = 0; i < this.colors.length; i += 2) {
          colorsUsed.push(this.colors[i]);
          colorsUsed.push((!!(this.colors[i + 1]) ? this.colors[i + 1] : this.colors[i - 1]));
          colorsUsed.push(this.colors[i]); // Resets colors to be one after another
          colorsUsed.push((!!(this.colors[i + 1]) ? this.colors[i + 1] : this.colors[i - 1]));
        }
      } else if (selector.includes('abcd')) {
        for (const color of this.colors) {
          colorsUsed.push(color); // Resets colors to be one after another
        }
      } else if (selector.includes('aabccd')) {
        for (let i = 0; i < this.colors.length; i += 2) {
          colorsUsed.push(this.colors[i]);
          colorsUsed.push(this.colors[i]);
          colorsUsed.push((!!(this.colors[i + 1]) ? this.colors[i + 1] : this.colors[i - 1]));
        }
      } else if (selector.includes('abbcdd')) {
        for (let i = 0; i < this.colors.length; i += 2) {
          colorsUsed.push(this.colors[i]);
          colorsUsed.push((!!(this.colors[i + 1]) ? this.colors[i + 1] : this.colors[i - 1]));
          colorsUsed.push((!!(this.colors[i + 1]) ? this.colors[i + 1] : this.colors[i - 1]));
        }
      } else if (this.colors.length > 2 && selector.includes('abcb')) {
          for (let i = 0; i < this.colors.length; i += 3) {
            colorsUsed.push(this.colors[i]);
            colorsUsed.push((!!(this.colors[i + 1]) ? this.colors[i + 1] : this.colors[i - 1]));
            colorsUsed.push((!!(this.colors[i + 2]) ? this.colors[i + 2] : this.colors[i - 2]));
            colorsUsed.push((!!(this.colors[i + 1]) ? this.colors[i + 1] : this.colors[i - 1]));
          }
      } else if (selector.includes('random')) {
        colorsUsed = this.colorSelection(this.colorPatterns[Math.floor(Math.random()*this.colorPatterns.length)])
      }
      else if (selector.includes('totalRandom')) {
        for (let i = 0; i < this.colors.length; i++) {
          colorsUsed.push(this.colors[Math.floor(Math.random()*this.colors.length)]);
        }
      }
      else {
        for (const color of this.colors) {
          colorsUsed.push(color);
        }
      }
    } else {
      for (const color of this.colors) {
        colorsUsed.push(color);
      }
    }
    return colorsUsed;
  }

  changeTab(tab, i) {
    // Sets both variables to document Items
    let btnAr = document.getElementsByClassName('tabButtons').item(0),
      tabAr = [document.getElementById('contestantsTab'), document.getElementById('colorsTab'), document.getElementById('settingsTab')];

    // Resets the current active tab
    for (let x = 0; x < btnAr.children.length; x++) {
      btnAr.children.item(x).className = '';
      tabAr.forEach((child) => child.className = 'disabled');
    }
    // Sets the current Tab
    btnAr.children.item(i).className = 'active';
    // Sets the current shown tab based on tab clicked.
    tabAr[tabAr.indexOf(tabAr.find((child) => child.id.toLowerCase().includes(tab.toLowerCase())))].className = '';
  }

  // Converts from Degrees to Radians
  degToRad(degrees) {
    return (degrees * Math.PI) / 180;
  }

  // Get Random Value between two Values
  getRBwVal(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Get Random Int between two Values
  getRInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // Min is inclusive, Max is Exclusive
  }

  // Draws the Names onto The segments of the Wheel
  drawSegmentLabel(canvas, context, i, cenX, cenY) {
    context.save(); // Saves the context
    context.translate(cenX, cenY); // Moves context to the center of the circle
    context.rotate(this.contestants[i].sAngle); // Rotates the context to the angle at which the contestants angle starts
    const dx = Math.floor(canvas.width * 0.5) - 10; // Starts the
    const dy = Math.floor(canvas.height * 0.05) - 10; //

    context.textAlign = 'right'; // Alighs the text to the right
    const fontSize = Math.floor(canvas.height / 30); // Determines that size of the font  ***** Will be changed
    context.font = fontSize + 'pt Helvetica'; // Picks the font and size of the segment label

    context.fillText(this.contestants[i].name, dx, dy);

    context.restore();
  }

  // Draws each individual segment of the Wheel
  drawSegment(canvas, context, angleSpacing, i) {
    context.save(); // Saves the context of the canvas
    const cenX = Math.floor(canvas.width / 2), // Finds the center of the canvas' width
      cenY = Math.floor(canvas.height / 2), // Finds the center of the canvas' height
      rad = Math.floor(canvas.width / 2), // Finds the radius of the circle, using the canvas width
      arcSize = this.degToRad(angleSpacing); // Turns the degrees to Radians of the angle spacing to get the size of the arc on the circle
    this.contestants[i].sAngle = this.degToRad(angleSpacing * i), // Gives the point at which the arc will be drawn in Radians
      this.contestants[i].eAngle = this.contestants[i].sAngle + arcSize; // Finds the end point at which the slice can be drawn

    context.beginPath(); //Starts the path
    context.moveTo(cenX, cenY); // Moves to the center
    context.arc(cenX, cenY, rad, this.contestants[i].sAngle, this.contestants[i].eAngle, false); // Makes an arc
    context.closePath(); // Ends the path
    context.fillStyle = this.contestants[i].sColor; // Finds the color of the slice
    context.fill(); // Fills the color
    context.restore(); // This method restores the most recently saved canvas state by popping the top entry in the drawing state stack

    this.drawSegmentLabel(canvas, context, i, cenX, cenY); // Calls the function draw Segment Label,
  }

  // Refreshes the Wheel
  refreshWheel() {
    const angleSpacing = 360 / this.contestants.length; // Creates the variable angleSpacing which represents the amount angle that each contestant will take up on the circle
    this.resetColors(); // Calls the function reset Colors

    for (let i = 0; i < this.contestants.length; i++) {
      this.drawSegment(this.canvas, this.ctx, angleSpacing, i);
    }
  }

  // Adds Contestant
  addContestant() {
    if (this.contestant.trim() === '') {
      alert('Could not add Contestant, lacking information');
    } else {
      this.contestants.push({name: this.contestant, sAngle: 0, eAngle: 0, sColor: '#E6E6FA'});
      this.contestant = '';
    }
    sessionStorage.setItem('contestants', JSON.stringify(this.contestants)); // Saves the contestants to the User's Session
    // this.contestants = JSON.parse(sessionStorage.getItem('contestants'));
    this.refreshWheel();
  }

  // Removes the Selected Contestant
  removeSelectedContestant(name) {
    const removee = this.contestants.find((contestant) => contestant.name === name); // Finds the Removee
    this.contestants.splice(this.contestants.indexOf(removee), 1); // Removes the contestant from the list of contestants
    sessionStorage.setItem('contestants', JSON.stringify(this.contestants)); // Saves the Contestants to the User's Session
    //this.contestants = JSON.parse(sessionStorage.getItem('contestants'));
    this.refreshWheel();
  }

  // Adds Color
  addColor() {
    if (this.color.trim() === '' || this.testForHex()) {
      alert('Could not add Color, lacking information, needs to be in hex format');
    } else {
      this.colors.push(this.color);
      this.color = '';
      this.refreshWheel();
    }
    sessionStorage.setItem('colors', JSON.stringify(this.colors));
    //this.colors = JSON.parse(localStorage.getItem('colors'));
  }

  // Removes the Selected Color
  removeSelectedColor(name) {
    this.colors.splice(this.colors.indexOf(name), 1);
    this.resetColors();
    sessionStorage.setItem('colors', JSON.stringify(this.colors));
    // this.colors = JSON.parse(localStorage.getItem('colors'));
    this.refreshWheel();
  }

  selectPattern(pattern) {
    this.colorSelector = pattern;
    this.refreshWheel();
  }

  // Testing the Color value to see if it is in the Hex format
  testForHex() {
    if (this.hexTest.test(this.color) || this.hexTest.test(this.color.substring(1))) {
      if (this.color.charAt(0) !== '#') {
        this.color = '#' + this.color;
      }
      return false;
    }
    return true;
  }

  // Checks Contestant Winner
  checkWinner() {
    this.wheelRotation.dialLocation = 270; // checks the location of the Dial based in degrees around the circle goes counter-clockwise (due to different contexts)
    this.wheelRotation.rotation = this.wheelRotation.totalRot % 360; // Gets the mod of the total rotation and sets rotation to that
    this.contestants.forEach((contestant) => { // Iterates through each Contestant
      let leftBound = ((180 * contestant.sAngle) / (Math.PI) + this.wheelRotation.rotation) % 360, // This gets the left bound angle of the contestant converts to Degrees and then adds the current rotation to that, then gets the mod of that
        rightBound = ((180 * contestant.eAngle) / (Math.PI) + this.wheelRotation.rotation) % 360; // Does the same of the above bond angle except with the ending bound
      if (leftBound < rightBound) { // Checks to see if the left bound is greater than the right bound
        if (this.wheelRotation.dialLocation >= leftBound && this.wheelRotation.dialLocation <= rightBound) { //Checks to see if the dial is inbetween the bounds
          this.winner = contestant.name; // Sets the winner
        }
      } else {
        if (this.wheelRotation.dialLocation <= leftBound && this.wheelRotation.dialLocation <= rightBound) {  // Checks to see if the bounds looping around has the dial between it
          this.winner = contestant.name; // Sets the winner
        }
      }
    });

  }


  // Rotation of the Wheel
  rotateWheel(id, rTimer) { // Rate of Rotation at any given second
    this.wheelRotation.counter += 0.1;// Counter for the interval
    if (this.wheelRotation.counter > rTimer) { // Checks to see if it should stop spinning
      clearInterval(id); // Removes The Interval
      document.getElementById('cnvs').appendChild(this.cssAnimation);
      setTimeout(() => {
        this.spinBtn[0].classList.remove('disabled');
      }, this.spinTime); // Removes the field of disabled to the Spin Button
      console.log('called')
      this.checkWinner(); // Calls the check winner function


    } else {
      this.wheelRotation.totalRot += this.wheelRotation.rate;
      if (this.wheelRotation.counter >= rTimer / 2) {
        if (this.wheelRotation.rate > 0) {
          this.wheelRotation.rate += (((this.wheelRotation.counter) * this.wheelRotation.rate) / (rTimer * this.wheelRotation.rate * this.wheelRotation.rate));
        }
        console.log(this.wheelRotation.rate, rTimer, (this.wheelRotation.rate * this.wheelRotation.counter), (rTimer * this.wheelRotation.rate));
      }
      document.getElementById('cnvs').style.transform = `rotate(${this.wheelRotation.totalRot}deg)`; // Rotates the canvas by the
    }
  }

  // Spin Function
  spinWheel() {
    //            document.getElementById('cnvs').style.transform = `rotate(${this.rotation}deg)`;
    //        this.winner = this.checkWinner();
    this.wheelRotation.counter = 0;
    this.wheelRotation.rate = 1.1;
    this.spinBtn[0].classList.add('disabled'); // Adds the field of disabled to the Spin Button
    this.wheelRotation.timer = (10 * this.spinTime); // The total timer, each 10 is a second, each digit increase is a 10 degree turn. 36 = 3.6 seconds and a complete 360 degree rotation if the rate is at 1.
    const intervalId = setInterval(() => this.rotateWheel(intervalId, this.wheelRotation.timer), 1);
  }
}
