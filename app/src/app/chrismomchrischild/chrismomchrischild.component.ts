import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chrismomchrischild',
  templateUrl: './chrismomchrischild.component.html',
  styleUrls: ['./chrismomchrischild.component.css']
})
export class ChrismomchrischildComponent implements OnInit {

  gameForm: FormGroup;
  personName:any;
  personEmail:any;
  nameList1:any=[];
  nameList2: any=[];

  constructor(
    private formBuilder: FormBuilder
  ){}
  ngOnInit(): void {
    this.getform();
    console.log(this.gameForm)
  }

  public getform(){
    this.gameForm=this.formBuilder.group({
      name:[""],
      email:[""]
    })
  }

  nameInput(event){
    this.personName=event.target.value
  }

  emailInput(event){
    this.personEmail=event.target.value;
  }

  onAdd(){
    console.log(this.personName)
    //console.log(this.personEmail)
    let personobj={
      name:this.personName,
      //email:this.personEmail
    }
    this.nameList1.push(personobj)
    //this.nameList2.push(personobj)
  }

  onSubmit(){
    console.log(this.nameList1)
    //console.log(this.nameList1,this.nameList2)
    // this.nameList2=this.nameList1
    // let randomList1 = this.nameList1[Math.floor(Math.random() * this.nameList1.length)];
    // let randomList2 = this.nameList2[Math.floor(Math.random() * this.nameList2.length)];

    // if(randomList1.name==randomList2.name){
    //   console.log("error")
    // }
    // else{
    //   console.log("submit")
    //   console.log(randomList1.name,randomList2.name)
    //   this.nameList1.pop(randomList1);
    //   this.nameList2.pop(randomList2);
    // }
  }
}
