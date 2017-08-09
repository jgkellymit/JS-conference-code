import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Wheels } from './Wheels'
import { getSpin } from './getSpin'

@Component({
  selector: 'Spin',
  templateUrl: './Spin.html',
  styleUrls: ['./Spin.css']
})
export class Spin {
  private get_spin:getSpin;
  wheel1result = "";
  wheel2result = "";
  wheel3result = "";
  congratsMessage = "";
  credits = 10;
		constructor(get_spin:getSpin) {
			this.get_spin = get_spin;
		}

  handleSpin(){
    //this.get_spin.getToken()
    var that = this
    this.credits -= 1
    this.wheel1result = "";
    this.wheel2result = "";
    this.wheel3result = "";
    this.congratsMessage = "";

    var wheel1 = new Wheels();
    var wheel2 = new Wheels();
    var wheel3 = new Wheels();

    wheel1.spin_wheel();
    if (this.wheel1result === ""){
      this.wheel1result = wheel1.result
    }
    setTimeout(function(){
      wheel2.spin_wheel();
      if (that.wheel2result === ""){
        that.wheel2result = wheel2.result
      }
    }, 500);
    setTimeout(function(){
      wheel3.spin_wheel();
      if (that.wheel3result === ""){
        that.wheel3result = wheel3.result
      }
    }, 1000);

    setTimeout(function(){
      that.checkForWinner()
    }, 1001)
  }

  checkForWinner(){
    if (this.wheel1result === this.wheel2result && this.wheel1result === this.wheel3result){
      this.congratsMessage = "YOU WIN!!!"
      if (this.wheel1result === "yellow"){
        this.credits += 50;
        this.congratsMessage += " Jackpot! Here's 50 more credits!!!!"
      }
      if (this.wheel1result === "red"){
        this.credits += 15;
        this.congratsMessage += " Woohoo! You're a winner of 15 credits!!"
      }
      if (this.wheel1result === "blue"){
        this.credits += 10;
        this.congratsMessage += " Congrats! You've won 10 credits!"
      }
      if (this.wheel1result === "orange"){
        this.credits += 25;
        this.congratsMessage += " Way to go! 2500% earnings!!"
      }
      if (this.wheel1result === "green"){
        this.credits += 5;
        this.congratsMessage += " Nice! Take 5 more credits and keep on spinning!"
      }
    }
  }

  reset(data:NgForm){
    this.wheel1result = "";
    this.wheel2result = "";
    this.wheel3result = "";
    this.congratsMessage = "";
  }
}
