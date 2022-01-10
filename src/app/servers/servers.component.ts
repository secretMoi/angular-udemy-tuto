import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  // onMethod... means triggered by event
  onCreateServer() {
    this.serverCreationStatus = 'Server created';
  }

  onUpdateServerName(event: Event) {
    // cast $event.target en input
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
