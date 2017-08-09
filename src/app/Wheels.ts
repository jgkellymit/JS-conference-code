import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'Wheels',
  templateUrl: './Wheels.html',
  styleUrls: ['./Wheels.css'],
})
export class Wheels {
  title:string = 'Wheels';
  result = "";
  choiceMap = ['yellow', 'orange', 'blue', 'green', 'red']

  spin_wheel(){
    const random = Math.random();
    if (random <= .2){
      this.result = this.choiceMap[0];
    }
    else if (random > .2 && random <= .4){
      this.result = this.choiceMap[1];
    }
    else if (random > .4 && random <= .6){
      this.result = this.choiceMap[2];
    }
    else if (random > .6 && random <= .8){
      this.result = this.choiceMap[3];
    }
    else {
      this.result = this.choiceMap[4];
    }

  }
}
