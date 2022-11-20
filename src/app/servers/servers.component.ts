import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server created yet.";
  serverName = "Test Server";
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus = "Server Created. Name is "+ this.serverName;
  }

  onUpdateServer(event: Event){
    // console.log(event, event.target.value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
