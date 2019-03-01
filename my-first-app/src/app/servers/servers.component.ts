import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreateService = 'No Server Was Created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreateService = `Server was Created. Server Name is ${this.serverName}`;
  }

  onUpdateServerName(ev: any) {
    this.serverName = ev.target.value;
  }

}
