import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() output = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.output.emit(true);
  }

  form = new FormGroup({
    gender: new FormControl('', Validators.required)
  });
   
  get f(){
    return this.form.controls;
  }
   
  submit(){
  }
 
  changeGender(e:any) {
    if(e.target.value == 'male'){
      this.output.emit(true);
    }else{
      this.output.emit(false);
    }
  }

}
