import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'LoginPage',
  templateUrl: './LoginPage.html',
  styleUrls: ['./LoginPage.css']
})
export class LoginPage {
  title:string = 'app';
  username_password_map = {jack:"kelly"};

  handleLoginSubmit(data:NgForm){
    if (this.username_password_map[data.value.Username] === data.value.Password){
      console.log("you're in");
    }
    data.reset();
  }
}
