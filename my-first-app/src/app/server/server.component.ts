import { Component } from '@angular/core';

@Component({
  selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['../app.component.css']
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? '#44CB36' : '#F4414A'
  }
}
