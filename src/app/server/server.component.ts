import { Component, OnInit } from '@angular/core';

// indique à angular que c'est un component avec le décorateur @Component
@Component({
  selector: '.app-server', // balise pour utiliser ce component dans un fichier HTML
  templateUrl: './server.component.html', // fichier HTML du component
  styleUrls: ['./server.component.css'] // fichiers CSS du component
})
// export le component pour l'utiliser dans angular
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() { }

  ngOnInit(): void {
  }

  getServerStatus() : string {
    return this.serverStatus;
  }
}
