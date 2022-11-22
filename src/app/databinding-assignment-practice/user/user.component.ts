import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allowResetUser = true;
  username = "Naweed";
  constructor() { }

  ngOnInit(): void {
  }

  onResetUser(){
    console.log('hi');
    this.username = '';
    this.allowResetUser = false;
  }
  onUpdateUser(event:any){
    console.log(event);
    if(this.username == '') this.allowResetUser = false;
    else this.allowResetUser = true;
  }

}
