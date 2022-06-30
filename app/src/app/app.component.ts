import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameApp';
  constructor(
    private router: Router,
  ){}
  ngOnInIt(){

  }

  startGame(){
    console.log("game starts")
    this.router.navigate(['/chrismomchrischild'])
  }

  goBack(){
    console.log("game ends")
    this.router.navigate(['/back'])
  }
}
